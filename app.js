const express = require('express');
const path = require('path');
const vision = require('@google-cloud/vision');
const fetch = require('node-fetch');

const {
  GCLOUD_CREDENTIAL_PATH,
  GCLOUD_PROJECT_ID,
  SPOONACULAR_API_KEY,
  GOOGLE_API_KEY,
} = require('./app_secrets');

const INGREDIENT_TYPE_ALLOW_LIST = new Set([
  'Fruit',
  'Vegetable',
  'Meat',
  'Food',
  'Dairy Product',
  'Cheese',
  'Flour',
  'Plant',
  'Beverage',
]);

const INGREDIENT_MID_DENY_LIST = new Set([
  // Packaged goods
  '/j/5qg9b8',
  // Fruit
  '/m/02xwb',
  // Food
  '/m/02wbm',
  // Dairy Product
  '/m/0284d',
  // Vegetable
  '/m/0f4s2w',
]);

// Set up Google Vision API.
const imageAnnotator = new vision.ImageAnnotatorClient({
  projectId: GCLOUD_PROJECT_ID,
  keyFilename: GCLOUD_CREDENTIAL_PATH,
});

// Sety up Express Server.
const app = express();
const port = 8000;

app.use(express.static('static'));
app.use('/examples', express.static('examples'));
// for parsing application/json
app.use(express.json());
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

async function annotateImage(url) {
  // Performs label detection on the image file

  const [result] = await imageAnnotator.objectLocalization(url);
  const annotations = result.localizedObjectAnnotations;

  // const [result] = await imageAnnotator.labelDetection(url);
  // const annotations = result.labelAnnotations;

  return annotations;
}

async function filterIngredients(annotations) {
  // De-dupe.
  let ingredientIds = annotations
    .map((annotation) => annotation.mid)
    .filter((mid) => !INGREDIENT_MID_DENY_LIST.has(mid));
  ingredientIds = new Set(ingredientIds);
  ingredientIds = [...ingredientIds];

  const url = new URL('https://kgsearch.googleapis.com/v1/entities:search');
  const params = {
    languages: 'en',
    key: GOOGLE_API_KEY,
  };
  const idString = ingredientIds.map((id) => `ids=${id}`).join('&');
  const paramString = new URLSearchParams(params).toString();
  url.search = `${idString}&${paramString}`;

  console.log('[Knolwedge Graph Request] GET: ', url.toString());

  const promise = fetch(url, { method: 'GET' })
    .then((response) => response.json())
    .then((response) => _filterIngredients(response.itemListElement));

  return promise;
}

function _filterIngredients(items) {
  if (!items || !items.length) {
    return [];
  }
  // The object detection feature of Google Cloud Vision API may label objects
  // of a wide range of categories, resulting in a somewhat "noisy" label set
  // that needs to be filtered prior to further operations.
  // Due to time constraints, the filtering strategy employed here is a
  // heuristic: Grocery items recognized by Google Knowledge Graph tend to have
  // one of the types in INGREDIENT_TYPES as its description, giving us a way to
  // distinguish grocery items from non-grocery ones.
  const ingredients = items
    .map((item) => item.result)
    .filter(
      (item) =>
        !INGREDIENT_TYPE_ALLOW_LIST.has(item.name) &&
        INGREDIENT_TYPE_ALLOW_LIST.has(item.description)
    )
    .map((item) => item.name);

  return ingredients;
}

async function findRecipes(ingredients) {
  if (!ingredients || !ingredients.length) {
    return Promise.resolve([]);
  }

  const url = new URL('https://api.spoonacular.com/recipes/findByIngredients');
  const params = {
    ingredients: ingredients.join(','),
    // The maximum number of recipes to return (between 1 and 100). Defaults to
    // 10.
    number: 10,
    // Whether the recipes should have an open license that allows display with
    // proper attribution.
    limitLicense: true,
    // Whether to maximize used ingredients (1) or minimize missing ingredients
    // (2) first.
    ranking: 2,
    // Whether to ignore typical pantry items, such as water, salt, flour, etc.
    ignorePantry: false,
    // Auth credential
    apiKey: SPOONACULAR_API_KEY,
  };
  url.search = new URLSearchParams(params).toString();

  console.log('[Recipe Request] GET: ', url.toString());

  const promise = fetch(url, { method: 'GET' }).then((response) =>
    response.json()
  );

  return promise;
}

app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/detect', async (req, res) => {
  const { photoUrl } = req.body;
  console.log('Requested Image:', photoUrl);
  const annotations = await annotateImage(photoUrl);
  const ingredients = await filterIngredients(annotations);
  console.log('Ingredient List:', ingredients);
  const recipes = await findRecipes(ingredients);

  res.json({ annotations, recipes });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
