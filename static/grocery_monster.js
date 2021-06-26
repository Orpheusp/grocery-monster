'use strict';

const $ = function (id) {
  return document.getElementById(id);
};

function getCanvas() {
  const canvas = $('canvas');
  const ctx = canvas.getContext('2d');
  return { canvas, ctx };
}

function renderImage(imageUrl) {
  const { canvas, ctx } = getCanvas();
  const imageObj = new Image();
  imageObj.src = imageUrl;
  imageObj.onload = () => {
    canvas.width = imageObj.naturalWidth;
    canvas.height = imageObj.naturalHeight;
    ctx.drawImage(imageObj, 0, 0);
  };
  imageObj.src = imageUrl;
}

function annotateImage(annotations) {
  console.log(annotations);
  annotations.forEach((annotation) => {
    drawRect(annotation);
    drawText(annotation);
  });
}

function drawRect(annotation) {
  const { canvas, ctx } = getCanvas();
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  const vertices = annotation.boundingPoly.normalizedVertices;
  const x = vertices[0].x * canvasWidth;
  const y = vertices[0].y * canvasHeight;
  const rectWidth = (vertices[1].x - vertices[0].x) * canvasWidth;
  const rectHeight = (vertices[2].y - vertices[1].y) * canvasHeight;

  ctx.save();
  ctx.lineWidth = 5;
  ctx.strokeStyle = 'red';
  ctx.strokeRect(x, y, rectWidth, rectHeight);
  ctx.restore();
}

function drawText(annotation) {
  const { canvas, ctx } = getCanvas();
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  const vertices = annotation.boundingPoly.normalizedVertices;
  const x = vertices[0].x * canvasWidth;
  const y = vertices[0].y * canvasHeight;
  const fontSize = Math.round(canvas.height / 20);
  const text = annotation.name;

  ctx.save();

  ctx.font = `${fontSize}px sans-serif`;
  ctx.textBaseline = 'top';
  // background color
  ctx.fillStyle = 'black';
  const textWidth = ctx.measureText(text).width;

  ctx.fillRect(x, y, textWidth, fontSize);

  // text color
  ctx.fillStyle = 'red';
  ctx.fillText(text, x, y);

  // restore original state
  ctx.restore();
}

function renderRecipes(recipes) {
  recipes.forEach(renderRecipe);
}

function renderRecipe(recipe) {
  const recipeEl = document.createElement('div');
  recipeEl.className = 'recipe col-lg-3 col-md-4 col-sm-6 col-12 p-4';

  const recipeTitleEl = document.createElement('div');
  recipeTitleEl.className = 'recipe--title mt-2 mb-2';
  recipeTitleEl.innerText = recipe.title;

  const recipeImageEl = document.createElement('img');
  recipeImageEl.className = 'recipe--image mt-2 mb-2 img-fluid img-thumbnail';
  recipeImageEl.src = recipe.image;

  const recipeNotesEl = getRecipeNotesEl(recipe);

  recipeEl.appendChild(recipeTitleEl);
  recipeEl.appendChild(recipeImageEl);
  recipeEl.appendChild(recipeNotesEl);

  $('recipes').appendChild(recipeEl);
}

function getRecipeNotesEl(recipe) {
  const recipeNotesEl = document.createElement('div');
  recipeNotesEl.className = 'recipe--notes mt-2 mb-2';

  const recipeUsedIngredientListEl = getIngredientListEl(
    'Used Ingredients',
    recipe.usedIngredients
  );
  const recipeMissingIngredientListEl = getIngredientListEl(
    'Missing Ingredients',
    recipe.missedIngredients
  );

  recipeNotesEl.appendChild(recipeUsedIngredientListEl);
  recipeNotesEl.appendChild(recipeMissingIngredientListEl);

  return recipeNotesEl;
}

function getIngredientListEl(title, ingredients) {
  const ingredientListEl = document.createElement('div');
  ingredientListEl.className = 'recipe--ingredient-list';

  const ingredientListTitleEl = document.createElement('p');
  ingredientListTitleEl.className = 'recipe--ingredient-list-title';
  ingredientListTitleEl.innerText = title;

  const ingredientListContentEl = document.createElement('ul');
  ingredientListContentEl.className = 'recipe--ingredient-list-content';
  const ingredientEls = ingredients.map(getIngredientEl);
  ingredientEls.forEach((el) => ingredientListContentEl.appendChild(el));

  ingredientListEl.appendChild(ingredientListTitleEl);
  ingredientListEl.appendChild(ingredientListContentEl);
  return ingredientListEl;
}

function getIngredientEl(ingredient) {
  const ingredientEl = document.createElement('li');
  ingredientEl.className = 'recipe--ingredient';
  ingredientEl.innerText = ingredient.originalString;
  return ingredientEl;
}

async function detect() {
  const photoUrl = $('photo-url').value;

  clearResults();
  $('results').className = 'shown';
  renderImage(photoUrl);
  const { annotations, recipes } = await sendDetectionRequest(photoUrl);
  annotateImage(annotations);
  console.log(recipes);
  renderRecipes(recipes);
}

async function sendDetectionRequest(photoUrl) {
  const response = await fetch('./detect', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ photoUrl }),
  });

  return response.json();
}

function clearEntries() {
  $('photo-url').value = '';
  clearResults();
}

function clearResults() {
  const { canvas, ctx } = getCanvas();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  $('recipes').innerHTML = '';
  $('results').className = 'hidden';
}

window.onload = function () {
  $('detect').onclick = detect;
  $('clear').onclick = clearEntries;
  $('photo-url').focus();
};
