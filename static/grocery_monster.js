'use strict';

const testRecipes = [
  {
    id: 769775,
    title: 'Simple Spinach and Tomato Frittata',
    image: 'https://spoonacular.com/recipeImages/769775-312x231.jpg',
    imageType: 'jpg',
    usedIngredientCount: 1,
    missedIngredientCount: 3,
    missedIngredients: [
      {
        id: 99037,
        amount: 1,
        unit: 'small',
        unitLong: 'small',
        unitShort: 'small',
        aisle: 'Pasta and Rice',
        name: 'burger skillet',
        original: 'small personal skillet',
        originalString: 'small personal skillet',
        originalName: 'personal skillet',
        metaInformation: [],
        meta: [],
        image: 'https://spoonacular.com/cdn/ingredients_100x100/no.jpg',
      },
      {
        id: 1123,
        amount: 2,
        unit: '',
        unitLong: '',
        unitShort: '',
        aisle: 'Milk, Eggs, Other Dairy',
        name: 'eggs',
        original: '2-3 lightly beaten eggs',
        originalString: '2-3 lightly beaten eggs',
        originalName: 'lightly beaten eggs',
        metaInformation: ['lightly beaten'],
        meta: ['lightly beaten'],
        image: 'https://spoonacular.com/cdn/ingredients_100x100/egg.png',
      },
      {
        id: 10011457,
        amount: 1,
        unit: 'leaves',
        unitLong: 'leave',
        unitShort: 'leaf',
        aisle: 'Produce',
        name: 'spinach leaves',
        original: 'spinach leaves',
        originalString: 'spinach leaves',
        originalName: 'spinach',
        metaInformation: [],
        meta: [],
        image: 'https://spoonacular.com/cdn/ingredients_100x100/spinach.jpg',
      },
    ],
    usedIngredients: [
      {
        id: 10311529,
        amount: 1,
        unit: 'serving',
        unitLong: 'serving',
        unitShort: 'serving',
        aisle: 'Produce',
        name: 'cherry tomatoes',
        original: 'cherry tomatoes, halved',
        originalString: 'cherry tomatoes, halved',
        originalName: 'cherry tomatoes, halved',
        metaInformation: ['halved'],
        meta: ['halved'],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/cherry-tomatoes.png',
      },
    ],
    unusedIngredients: [
      {
        id: 11124,
        amount: 1,
        unit: 'serving',
        unitLong: 'serving',
        unitShort: 'serving',
        aisle: 'Produce',
        name: 'carrot',
        original: 'Carrot',
        originalString: 'Carrot',
        originalName: 'Carrot',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/sliced-carrot.png',
      },
      {
        id: 10711111,
        amount: 1,
        unit: 'serving',
        unitLong: 'serving',
        unitShort: 'serving',
        aisle: 'Baking',
        name: 'food',
        original: 'Food',
        originalString: 'Food',
        originalName: 'Food',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/food-coloring.png',
      },
      {
        id: 10211821,
        amount: 1,
        unit: 'serving',
        unitLong: 'serving',
        unitShort: 'serving',
        aisle: 'Produce',
        name: 'bell pepper',
        original: 'Bell pepper',
        originalString: 'Bell pepper',
        originalName: 'Bell pepper',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/bell-pepper-orange.png',
      },
    ],
    likes: 7,
  },
  {
    id: 642303,
    title: 'Eggplant pizzette',
    image: 'https://spoonacular.com/recipeImages/642303-312x231.jpg',
    imageType: 'jpg',
    usedIngredientCount: 1,
    missedIngredientCount: 3,
    missedIngredients: [
      {
        id: 11209,
        amount: 1,
        unit: 'large',
        unitLong: 'large',
        unitShort: 'large',
        aisle: 'Produce',
        name: 'eggplant',
        original: '1 large round eggplant, washed, sliced into rounds',
        originalString: '1 large round eggplant, washed, sliced into rounds',
        originalName: 'round eggplant, washed, sliced into rounds',
        metaInformation: ['washed', 'sliced into rounds'],
        meta: ['washed', 'sliced into rounds'],
        image: 'https://spoonacular.com/cdn/ingredients_100x100/eggplant.png',
      },
      {
        id: 1040,
        amount: 100,
        unit: 'g',
        unitLong: 'grams',
        unitShort: 'g',
        aisle: 'Cheese',
        name: 'swiss cheese',
        original: '100g Swiss cheese, coarsely grated',
        originalString: '100g Swiss cheese, coarsely grated',
        originalName: 'Swiss cheese, coarsely grated',
        metaInformation: ['grated'],
        meta: ['grated'],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/Swiss-cheese.jpg',
      },
      {
        id: 2044,
        amount: 1,
        unit: 'leaves',
        unitLong: 'leave',
        unitShort: 'leaf',
        aisle: 'Produce',
        name: 'basil leaves',
        original: 'Basil and oregano leaves, fresh or dried',
        originalString: 'Basil and oregano leaves, fresh or dried',
        originalName: 'Basil and oregano , fresh or dried',
        metaInformation: ['fresh'],
        meta: ['fresh'],
        extendedName: 'fresh basil leaves',
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/fresh-basil.jpg',
      },
    ],
    usedIngredients: [
      {
        id: 11529,
        amount: 10,
        unit: 'Tbs',
        unitLong: 'Tbs',
        unitShort: 'Tbs',
        aisle: 'Produce',
        name: 'tomatoes',
        original: '10 Tbs chopped tomatoes',
        originalString: '10 Tbs chopped tomatoes',
        originalName: 'chopped tomatoes',
        metaInformation: ['chopped'],
        meta: ['chopped'],
        image: 'https://spoonacular.com/cdn/ingredients_100x100/tomato.png',
      },
    ],
    unusedIngredients: [
      {
        id: 11124,
        amount: 1,
        unit: 'serving',
        unitLong: 'serving',
        unitShort: 'serving',
        aisle: 'Produce',
        name: 'carrot',
        original: 'Carrot',
        originalString: 'Carrot',
        originalName: 'Carrot',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/sliced-carrot.png',
      },
      {
        id: 10711111,
        amount: 1,
        unit: 'serving',
        unitLong: 'serving',
        unitShort: 'serving',
        aisle: 'Baking',
        name: 'food',
        original: 'Food',
        originalString: 'Food',
        originalName: 'Food',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/food-coloring.png',
      },
      {
        id: 10211821,
        amount: 1,
        unit: 'serving',
        unitLong: 'serving',
        unitShort: 'serving',
        aisle: 'Produce',
        name: 'bell pepper',
        original: 'Bell pepper',
        originalString: 'Bell pepper',
        originalName: 'Bell pepper',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/bell-pepper-orange.png',
      },
    ],
    likes: 5,
  },
  {
    id: 654681,
    title: 'Parmesan Polenta',
    image: 'https://spoonacular.com/recipeImages/654681-312x231.jpg',
    imageType: 'jpg',
    usedIngredientCount: 1,
    missedIngredientCount: 3,
    missedIngredients: [
      {
        id: 6194,
        amount: 1,
        unit: 'cup',
        unitLong: 'cup',
        unitShort: 'cup',
        aisle: 'Canned and Jarred',
        name: 'chicken broth',
        original: 'cup chicken broth',
        originalString: 'cup chicken broth',
        originalName: 'chicken broth',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/chicken-broth.png',
      },
      {
        id: 1008166,
        amount: 24,
        unit: 'oz',
        unitLong: 'ounces',
        unitShort: 'oz',
        aisle: 'Refrigerated',
        name: 'cooked polenta',
        original: '1 tube of prepared polenta - (24 oz)',
        originalString: '1 tube of prepared polenta - (24 oz)',
        originalName: 'tube of prepared polenta',
        metaInformation: ['prepared'],
        meta: ['prepared'],
        image: 'https://spoonacular.com/cdn/ingredients_100x100/cornmeal.png',
      },
      {
        id: 1033,
        amount: 1,
        unit: 'cup',
        unitLong: 'cup',
        unitShort: 'cup',
        aisle: 'Cheese',
        name: 'parmesan cheese',
        original: '1 cup grated Parmesan cheese',
        originalString: '1 cup grated Parmesan cheese',
        originalName: 'grated Parmesan cheese',
        metaInformation: ['grated'],
        meta: ['grated'],
        image: 'https://spoonacular.com/cdn/ingredients_100x100/parmesan.jpg',
      },
    ],
    usedIngredients: [
      {
        id: 10211821,
        amount: 1,
        unit: 'serving',
        unitLong: 'serving',
        unitShort: 'serving',
        aisle: 'Produce',
        name: 'bell pepper',
        original: 'Freshly-ground black pepper to taste',
        originalString: 'Freshly-ground black pepper to taste',
        originalName: 'Freshly-ground black pepper to taste',
        metaInformation: ['black', 'freshly-ground', 'to taste'],
        meta: ['black', 'freshly-ground', 'to taste'],
        extendedName: 'black bell pepper',
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/bell-pepper-orange.png',
      },
    ],
    unusedIngredients: [
      {
        id: 11124,
        amount: 1,
        unit: 'serving',
        unitLong: 'serving',
        unitShort: 'serving',
        aisle: 'Produce',
        name: 'carrot',
        original: 'Carrot',
        originalString: 'Carrot',
        originalName: 'Carrot',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/sliced-carrot.png',
      },
      {
        id: 11529,
        amount: 1,
        unit: 'serving',
        unitLong: 'serving',
        unitShort: 'serving',
        aisle: 'Produce',
        name: 'tomato',
        original: 'Tomato',
        originalString: 'Tomato',
        originalName: 'Tomato',
        metaInformation: [],
        meta: [],
        image: 'https://spoonacular.com/cdn/ingredients_100x100/tomato.png',
      },
      {
        id: 10711111,
        amount: 1,
        unit: 'serving',
        unitLong: 'serving',
        unitShort: 'serving',
        aisle: 'Baking',
        name: 'food',
        original: 'Food',
        originalString: 'Food',
        originalName: 'Food',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/food-coloring.png',
      },
    ],
    likes: 2,
  },
  {
    id: 648368,
    title: 'Jalapeno Queso With Goat Cheese',
    image: 'https://spoonacular.com/recipeImages/648368-312x231.jpg',
    imageType: 'jpg',
    usedIngredientCount: 1,
    missedIngredientCount: 3,
    missedIngredients: [
      {
        id: 1159,
        amount: 5.3,
        unit: 'oz',
        unitLong: 'ounces',
        unitShort: 'oz',
        aisle: 'Cheese',
        name: 'goat cheese',
        original: '1 package (5.3 oz) Fresh Goat Cheese, such as Chavrie',
        originalString: '1 package (5.3 oz) Fresh Goat Cheese, such as Chavrie',
        originalName: 'package Fresh Goat Cheese, such as Chavrie',
        metaInformation: ['fresh', ' such as chavrie'],
        meta: ['fresh', ' such as chavrie'],
        extendedName: 'fresh goat cheese',
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/goat-cheese.jpg',
      },
      {
        id: 11979,
        amount: 1,
        unit: '',
        unitLong: '',
        unitShort: '',
        aisle: 'Canned and Jarred;Produce;Ethnic Foods',
        name: 'jalapeno pepper',
        original: '1 ea. jalapeno pepper diced',
        originalString: '1 ea. jalapeno pepper diced',
        originalName: 'ea. jalapeno pepper diced',
        metaInformation: ['diced'],
        meta: ['diced'],
        extendedName: 'diced jalapeno pepper',
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/jalapeno-pepper.png',
      },
      {
        id: 6168,
        amount: 2,
        unit: 'teaspoons',
        unitLong: 'teaspoons',
        unitShort: 'tsp',
        aisle: 'Condiments',
        name: 'hot sauce',
        original: '2 teaspoons hot sauce',
        originalString: '2 teaspoons hot sauce',
        originalName: 'hot sauce',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/hot-sauce-or-tabasco.png',
      },
    ],
    usedIngredients: [
      {
        id: 10011693,
        amount: 8,
        unit: 'oz',
        unitLong: 'ounces',
        unitShort: 'oz',
        aisle: 'Canned and Jarred',
        name: 'canned tomatoes',
        original: '8 oz. can diced tomatoes, drained',
        originalString: '8 oz. can diced tomatoes, drained',
        originalName: 'diced tomatoes, drained',
        metaInformation: ['diced', 'drained', 'canned'],
        meta: ['diced', 'drained', 'canned'],
        extendedName: 'diced canned tomatoes',
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/tomatoes-canned.png',
      },
    ],
    unusedIngredients: [
      {
        id: 11124,
        amount: 1,
        unit: 'serving',
        unitLong: 'serving',
        unitShort: 'serving',
        aisle: 'Produce',
        name: 'carrot',
        original: 'Carrot',
        originalString: 'Carrot',
        originalName: 'Carrot',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/sliced-carrot.png',
      },
      {
        id: 10711111,
        amount: 1,
        unit: 'serving',
        unitLong: 'serving',
        unitShort: 'serving',
        aisle: 'Baking',
        name: 'food',
        original: 'Food',
        originalString: 'Food',
        originalName: 'Food',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/food-coloring.png',
      },
      {
        id: 10211821,
        amount: 1,
        unit: 'serving',
        unitLong: 'serving',
        unitShort: 'serving',
        aisle: 'Produce',
        name: 'bell pepper',
        original: 'Bell pepper',
        originalString: 'Bell pepper',
        originalName: 'Bell pepper',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/bell-pepper-orange.png',
      },
    ],
    likes: 1,
  },
  {
    id: 644953,
    title: 'Goat Cheese Pesto Pizza',
    image: 'https://spoonacular.com/recipeImages/644953-312x231.jpg',
    imageType: 'jpg',
    usedIngredientCount: 1,
    missedIngredientCount: 3,
    missedIngredients: [
      {
        id: 93770,
        amount: 1,
        unit: '',
        unitLong: '',
        unitShort: '',
        aisle: 'Pasta and Rice;Refrigerated',
        name: 'pizza shell',
        original: '1 prepared pizza shell, 14 inches',
        originalString: '1 prepared pizza shell, 14 inches',
        originalName: 'prepared pizza shell, 14 inches',
        metaInformation: ['prepared'],
        meta: ['prepared'],
        extendedName: 'cooked pizza shell',
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/pizza-dough.jpg',
      },
      {
        id: 93698,
        amount: 1,
        unit: 'cup',
        unitLong: 'cup',
        unitShort: 'cup',
        aisle: 'Pasta and Rice',
        name: 'pesto',
        original: '1 cup pesto',
        originalString: '1 cup pesto',
        originalName: 'pesto',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/basil-pesto.png',
      },
      {
        id: 1159,
        amount: 1,
        unit: 'package',
        unitLong: 'package',
        unitShort: 'pkg',
        aisle: 'Cheese',
        name: 'goat cheese',
        original:
          '1 package of crumbled goat cheese, Alouette Provencal variety',
        originalString:
          '1 package of crumbled goat cheese, Alouette Provencal variety',
        originalName: 'crumbled goat cheese, Alouette Provencal variety',
        metaInformation: ['crumbled'],
        meta: ['crumbled'],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/goat-cheese.jpg',
      },
    ],
    usedIngredients: [
      {
        id: 11529,
        amount: 1,
        unit: 'cup',
        unitLong: 'cup',
        unitShort: 'cup',
        aisle: 'Produce',
        name: 'tomatoes',
        original: '1 cup diced Tomatoes',
        originalString: '1 cup diced Tomatoes',
        originalName: 'diced Tomatoes',
        metaInformation: ['diced'],
        meta: ['diced'],
        extendedName: 'diced tomatoes',
        image: 'https://spoonacular.com/cdn/ingredients_100x100/tomato.png',
      },
    ],
    unusedIngredients: [
      {
        id: 11124,
        amount: 1,
        unit: 'serving',
        unitLong: 'serving',
        unitShort: 'serving',
        aisle: 'Produce',
        name: 'carrot',
        original: 'Carrot',
        originalString: 'Carrot',
        originalName: 'Carrot',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/sliced-carrot.png',
      },
      {
        id: 10711111,
        amount: 1,
        unit: 'serving',
        unitLong: 'serving',
        unitShort: 'serving',
        aisle: 'Baking',
        name: 'food',
        original: 'Food',
        originalString: 'Food',
        originalName: 'Food',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/food-coloring.png',
      },
      {
        id: 10211821,
        amount: 1,
        unit: 'serving',
        unitLong: 'serving',
        unitShort: 'serving',
        aisle: 'Produce',
        name: 'bell pepper',
        original: 'Bell pepper',
        originalString: 'Bell pepper',
        originalName: 'Bell pepper',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/bell-pepper-orange.png',
      },
    ],
    likes: 1,
  },
  {
    id: 645555,
    title: 'Green Tomato Salad',
    image: 'https://spoonacular.com/recipeImages/645555-312x231.jpg',
    imageType: 'jpg',
    usedIngredientCount: 1,
    missedIngredientCount: 3,
    missedIngredients: [
      {
        id: 4053,
        amount: 1,
        unit: 'tablespoon',
        unitLong: 'tablespoon',
        unitShort: 'Tbsp',
        aisle: 'Oil, Vinegar, Salad Dressing',
        name: 'olive oil',
        original: '1 tablespoon of olive oil',
        originalString: '1 tablespoon of olive oil',
        originalName: 'olive oil',
        metaInformation: [],
        meta: [],
        image: 'https://spoonacular.com/cdn/ingredients_100x100/olive-oil.jpg',
      },
      {
        id: 10211111,
        amount: 1,
        unit: 'teaspoon',
        unitLong: 'teaspoon',
        unitShort: 'tsp',
        aisle: 'Ethnic Foods;Spices and Seasonings',
        name: 'sumac',
        original: '1 teaspoon of sumac powder',
        originalString: '1 teaspoon of sumac powder',
        originalName: 'sumac powder',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/dried-sumac.jpg',
      },
      {
        id: 2064,
        amount: 1,
        unit: 'handful',
        unitLong: 'handful',
        unitShort: 'handful',
        aisle: 'Produce',
        name: 'mint leaves',
        original: 'A handful of sage and mint leaves, finely chopped',
        originalString: 'A handful of sage and mint leaves, finely chopped',
        originalName: 'A of sage and mint leaves, finely chopped',
        metaInformation: ['finely chopped'],
        meta: ['finely chopped'],
        extendedName: 'fresh mint leaves',
        image: 'https://spoonacular.com/cdn/ingredients_100x100/mint.jpg',
      },
    ],
    usedIngredients: [
      {
        id: 11527,
        amount: 1,
        unit: 'large',
        unitLong: 'large',
        unitShort: 'large',
        aisle: 'Produce',
        name: 'green tomato',
        original: '1 large green tomato',
        originalString: '1 large green tomato',
        originalName: 'green tomato',
        metaInformation: ['green'],
        meta: ['green'],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/green-tomato.png',
      },
    ],
    unusedIngredients: [
      {
        id: 11124,
        amount: 1,
        unit: 'serving',
        unitLong: 'serving',
        unitShort: 'serving',
        aisle: 'Produce',
        name: 'carrot',
        original: 'Carrot',
        originalString: 'Carrot',
        originalName: 'Carrot',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/sliced-carrot.png',
      },
      {
        id: 10711111,
        amount: 1,
        unit: 'serving',
        unitLong: 'serving',
        unitShort: 'serving',
        aisle: 'Baking',
        name: 'food',
        original: 'Food',
        originalString: 'Food',
        originalName: 'Food',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/food-coloring.png',
      },
      {
        id: 10211821,
        amount: 1,
        unit: 'serving',
        unitLong: 'serving',
        unitShort: 'serving',
        aisle: 'Produce',
        name: 'bell pepper',
        original: 'Bell pepper',
        originalString: 'Bell pepper',
        originalName: 'Bell pepper',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/bell-pepper-orange.png',
      },
    ],
    likes: 1,
  },
  {
    id: 635342,
    title: 'BLT Sandwich',
    image: 'https://spoonacular.com/recipeImages/635342-312x231.jpg',
    imageType: 'jpg',
    usedIngredientCount: 2,
    missedIngredientCount: 4,
    missedIngredients: [
      {
        id: 18064,
        amount: 4,
        unit: 'pieces',
        unitLong: '',
        unitShort: '',
        aisle: 'Bakery/Bread',
        name: 'bread',
        original: '4 pieces of good quality bread, lightly toasted',
        originalString: '4 pieces of good quality bread, lightly toasted',
        originalName: 'good quality bread, lightly toasted',
        metaInformation: ['lightly toasted'],
        meta: ['lightly toasted'],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/white-bread.jpg',
      },
      {
        id: 11252,
        amount: 2,
        unit: 'servings',
        unitLong: 'servings',
        unitShort: 'servings',
        aisle: 'Produce',
        name: 'lettuce',
        original: 'Lettuce',
        originalString: 'Lettuce',
        originalName: 'Lettuce',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/iceberg-lettuce.jpg',
      },
      {
        id: 4025,
        amount: 2,
        unit: 'servings',
        unitLong: 'servings',
        unitShort: 'servings',
        aisle: 'Condiments',
        name: 'mayonnaise',
        original: 'Mayonnaise',
        originalString: 'Mayonnaise',
        originalName: 'Mayonnaise',
        metaInformation: [],
        meta: [],
        image: 'https://spoonacular.com/cdn/ingredients_100x100/mayonnaise.png',
      },
      {
        id: 10310123,
        amount: 8,
        unit: 'pieces',
        unitLong: '',
        unitShort: '',
        aisle: 'Meat',
        name: 'thick-cut bacon',
        original: '8 pieces Thick-sliced bacon',
        originalString: '8 pieces Thick-sliced bacon',
        originalName: 'Thick-sliced bacon',
        metaInformation: [],
        meta: [],
        image: 'https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png',
      },
    ],
    usedIngredients: [
      {
        id: 10211821,
        amount: 2,
        unit: 'servings',
        unitLong: 'servings',
        unitShort: 'servings',
        aisle: 'Produce',
        name: 'bell pepper',
        original: 'Black pepper',
        originalString: 'Black pepper',
        originalName: 'Black pepper',
        metaInformation: ['black'],
        meta: ['black'],
        extendedName: 'black bell pepper',
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/bell-pepper-orange.png',
      },
      {
        id: 11529,
        amount: 1,
        unit: '',
        unitLong: '',
        unitShort: '',
        aisle: 'Produce',
        name: 'tomato',
        original: '1 tomato, sliced thin',
        originalString: '1 tomato, sliced thin',
        originalName: 'tomato, sliced thin',
        metaInformation: ['sliced', 'thin'],
        meta: ['sliced', 'thin'],
        image: 'https://spoonacular.com/cdn/ingredients_100x100/tomato.png',
      },
    ],
    unusedIngredients: [
      {
        id: 11124,
        amount: 1,
        unit: 'serving',
        unitLong: 'serving',
        unitShort: 'serving',
        aisle: 'Produce',
        name: 'carrot',
        original: 'Carrot',
        originalString: 'Carrot',
        originalName: 'Carrot',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/sliced-carrot.png',
      },
      {
        id: 10711111,
        amount: 1,
        unit: 'serving',
        unitLong: 'serving',
        unitShort: 'serving',
        aisle: 'Baking',
        name: 'food',
        original: 'Food',
        originalString: 'Food',
        originalName: 'Food',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/food-coloring.png',
      },
    ],
    likes: 63,
  },
  {
    id: 655573,
    title: 'Penne Arrabiata',
    image: 'https://spoonacular.com/recipeImages/655573-312x231.jpg',
    imageType: 'jpg',
    usedIngredientCount: 2,
    missedIngredientCount: 4,
    missedIngredients: [
      {
        id: 11297,
        amount: 3,
        unit: 'tablespoons',
        unitLong: 'tablespoons',
        unitShort: 'Tbsp',
        aisle: 'Produce;Spices and Seasonings',
        name: 'fresh parsley',
        original: '3 tablespoons parsley, fresh, minced',
        originalString: '3 tablespoons parsley, fresh, minced',
        originalName: 'parsley, fresh, minced',
        metaInformation: ['fresh', 'minced'],
        meta: ['fresh', 'minced'],
        image: 'https://spoonacular.com/cdn/ingredients_100x100/parsley.jpg',
      },
      {
        id: 11215,
        amount: 2,
        unit: 'Cloves',
        unitLong: 'Cloves',
        unitShort: 'Cloves',
        aisle: 'Produce',
        name: 'garlic',
        original: '2 Cloves garlic, minced',
        originalString: '2 Cloves garlic, minced',
        originalName: 'garlic, minced',
        metaInformation: ['minced'],
        meta: ['minced'],
        image: 'https://spoonacular.com/cdn/ingredients_100x100/garlic.png',
      },
      {
        id: 4053,
        amount: 2,
        unit: 'tablespoons',
        unitLong: 'tablespoons',
        unitShort: 'Tbsp',
        aisle: 'Oil, Vinegar, Salad Dressing',
        name: 'olive oil',
        original: '2 tablespoons Olive oil',
        originalString: '2 tablespoons Olive oil',
        originalName: 'Olive oil',
        metaInformation: [],
        meta: [],
        image: 'https://spoonacular.com/cdn/ingredients_100x100/olive-oil.jpg',
      },
      {
        id: 11120420,
        amount: 14,
        unit: 'oz',
        unitLong: 'ounces',
        unitShort: 'oz',
        aisle: 'Pasta and Rice',
        name: 'penne',
        original: '1 pkt (14 oz) Penne (pasta quills)',
        originalString: '1 pkt (14 oz) Penne (pasta quills)',
        originalName: 'pkt Penne (pasta quills)',
        metaInformation: ['(pasta quills)'],
        meta: ['(pasta quills)'],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/penne-pasta.jpg',
      },
    ],
    usedIngredients: [
      {
        id: 10011531,
        amount: 14.5,
        unit: 'oz',
        unitLong: 'ounces',
        unitShort: 'oz',
        aisle: 'Canned and Jarred',
        name: 'canned whole tomato',
        original: '1 can (14 1/2 oz) whole tomato, chopped',
        originalString: '1 can (14 1/2 oz) whole tomato, chopped',
        originalName: 'can whole tomato, chopped',
        metaInformation: ['whole', 'chopped', 'canned'],
        meta: ['whole', 'chopped', 'canned'],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/tomatoes-canned.png',
      },
      {
        id: 11821,
        amount: 2,
        unit: '',
        unitLong: '',
        unitShort: '',
        aisle: 'Produce',
        name: 'red peppers',
        original: '2 dried red peppers',
        originalString: '2 dried red peppers',
        originalName: 'dried red peppers',
        metaInformation: ['dried', 'red'],
        meta: ['dried', 'red'],
        extendedName: 'dried red peppers',
        image: 'https://spoonacular.com/cdn/ingredients_100x100/red-pepper.jpg',
      },
    ],
    unusedIngredients: [
      {
        id: 11124,
        amount: 1,
        unit: 'serving',
        unitLong: 'serving',
        unitShort: 'serving',
        aisle: 'Produce',
        name: 'carrot',
        original: 'Carrot',
        originalString: 'Carrot',
        originalName: 'Carrot',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/sliced-carrot.png',
      },
      {
        id: 10711111,
        amount: 1,
        unit: 'serving',
        unitLong: 'serving',
        unitShort: 'serving',
        aisle: 'Baking',
        name: 'food',
        original: 'Food',
        originalString: 'Food',
        originalName: 'Food',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/food-coloring.png',
      },
    ],
    likes: 2,
  },
  {
    id: 665043,
    title: 'Watermelon, Zucchini, Carrot Salad',
    image: 'https://spoonacular.com/recipeImages/665043-312x231.jpg',
    imageType: 'jpg',
    usedIngredientCount: 2,
    missedIngredientCount: 4,
    missedIngredients: [
      {
        id: 11477,
        amount: 0.25,
        unit: '',
        unitLong: '',
        unitShort: '',
        aisle: 'Produce',
        name: 'zucchini',
        original: '1/4 of a zucchini',
        originalString: '1/4 of a zucchini',
        originalName: 'a zucchini',
        metaInformation: [],
        meta: [],
        image: 'https://spoonacular.com/cdn/ingredients_100x100/zucchini.jpg',
      },
      {
        id: 11112,
        amount: 0.25,
        unit: '',
        unitLong: '',
        unitShort: '',
        aisle: 'Produce',
        name: 'red cabbage',
        original: '1/4 of a red cabbage',
        originalString: '1/4 of a red cabbage',
        originalName: 'a red cabbage',
        metaInformation: ['red'],
        meta: ['red'],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/red-cabbage.png',
      },
      {
        id: 9326,
        amount: 1.5,
        unit: 'cups',
        unitLong: 'cups',
        unitShort: 'cup',
        aisle: 'Produce',
        name: 'watermelon',
        original: '1 1/2 cups watermelon',
        originalString: '1 1/2 cups watermelon',
        originalName: 'watermelon',
        metaInformation: [],
        meta: [],
        image: 'https://spoonacular.com/cdn/ingredients_100x100/watermelon.png',
      },
      {
        id: 12036,
        amount: 1,
        unit: 'Handful',
        unitLong: 'Handful',
        unitShort: 'Handful',
        aisle: 'Savory Snacks',
        name: 'sunflower seeds',
        original: 'Handful of sunflower seeds',
        originalString: 'Handful of sunflower seeds',
        originalName: 'sunflower seeds',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/sunflower-seeds.jpg',
      },
    ],
    usedIngredients: [
      {
        id: 11124,
        amount: 2,
        unit: '',
        unitLong: '',
        unitShort: '',
        aisle: 'Produce',
        name: 'carrots',
        original: '2 carrots',
        originalString: '2 carrots',
        originalName: 'carrots',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/sliced-carrot.png',
      },
      {
        id: 11333,
        amount: 0.5,
        unit: '',
        unitLong: '',
        unitShort: '',
        aisle: 'Produce',
        name: 'green bell pepper',
        original: '1/2 green pepper',
        originalString: '1/2 green pepper',
        originalName: 'green pepper',
        metaInformation: ['green'],
        meta: ['green'],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/green-pepper.jpg',
      },
    ],
    unusedIngredients: [
      {
        id: 11529,
        amount: 1,
        unit: 'serving',
        unitLong: 'serving',
        unitShort: 'serving',
        aisle: 'Produce',
        name: 'tomato',
        original: 'Tomato',
        originalString: 'Tomato',
        originalName: 'Tomato',
        metaInformation: [],
        meta: [],
        image: 'https://spoonacular.com/cdn/ingredients_100x100/tomato.png',
      },
      {
        id: 10711111,
        amount: 1,
        unit: 'serving',
        unitLong: 'serving',
        unitShort: 'serving',
        aisle: 'Baking',
        name: 'food',
        original: 'Food',
        originalString: 'Food',
        originalName: 'Food',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/food-coloring.png',
      },
    ],
    likes: 1,
  },
  {
    id: 641443,
    title: 'Detox Orange Carrot Juice',
    image: 'https://spoonacular.com/recipeImages/641443-312x231.jpg',
    imageType: 'jpg',
    usedIngredientCount: 1,
    missedIngredientCount: 4,
    missedIngredients: [
      {
        id: 9200,
        amount: 4,
        unit: '',
        unitLong: '',
        unitShort: '',
        aisle: 'Produce',
        name: 'oranges',
        original: '4 oranges',
        originalString: '4 oranges',
        originalName: 'oranges',
        metaInformation: [],
        meta: [],
        image: 'https://spoonacular.com/cdn/ingredients_100x100/orange.png',
      },
      {
        id: 11216,
        amount: 2,
        unit: 'inch',
        unitLong: 'inches',
        unitShort: 'inch',
        aisle: 'Produce;Ethnic Foods;Spices and Seasonings',
        name: 'fresh ginger',
        original:
          '2 inch fresh ginger (use less if you want a more subtle ginger flavor)',
        originalString:
          '2 inch fresh ginger (use less if you want a more subtle ginger flavor)',
        originalName:
          'fresh ginger (use less if you want a more subtle ginger flavor)',
        metaInformation: [
          'fresh',
          '(use less if you want a more subtle ginger flavor)',
        ],
        meta: ['fresh', '(use less if you want a more subtle ginger flavor)'],
        image: 'https://spoonacular.com/cdn/ingredients_100x100/ginger.png',
      },
      {
        id: 2043,
        amount: 1,
        unit: 'tsp',
        unitLong: 'teaspoon',
        unitShort: 'tsp',
        aisle: 'Spices and Seasonings',
        name: 'ground turmeric',
        original: '1 tsp of ground turmeric (or 2 inches of fresh turmeric)',
        originalString:
          '1 tsp of ground turmeric (or 2 inches of fresh turmeric)',
        originalName: 'ground turmeric (or 2 inches of fresh turmeric)',
        metaInformation: ['fresh', '(or 2 inches of turmeric)'],
        meta: ['fresh', '(or 2 inches of turmeric)'],
        extendedName: 'fresh ground turmeric',
        image: 'https://spoonacular.com/cdn/ingredients_100x100/turmeric.jpg',
      },
      {
        id: 19296,
        amount: 1,
        unit: 'serving',
        unitLong: 'serving',
        unitShort: 'serving',
        aisle: 'Nut butters, Jams, and Honey',
        name: 'honey',
        original: 'Honey, to taste',
        originalString: 'Honey, to taste',
        originalName: 'Honey, to taste',
        metaInformation: ['to taste'],
        meta: ['to taste'],
        image: 'https://spoonacular.com/cdn/ingredients_100x100/honey.png',
      },
    ],
    usedIngredients: [
      {
        id: 11124,
        amount: 6,
        unit: '',
        unitLong: '',
        unitShort: '',
        aisle: 'Produce',
        name: 'carrots',
        original: '6 carrots',
        originalString: '6 carrots',
        originalName: 'carrots',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/sliced-carrot.png',
      },
    ],
    unusedIngredients: [
      {
        id: 11529,
        amount: 1,
        unit: 'serving',
        unitLong: 'serving',
        unitShort: 'serving',
        aisle: 'Produce',
        name: 'tomato',
        original: 'Tomato',
        originalString: 'Tomato',
        originalName: 'Tomato',
        metaInformation: [],
        meta: [],
        image: 'https://spoonacular.com/cdn/ingredients_100x100/tomato.png',
      },
      {
        id: 10711111,
        amount: 1,
        unit: 'serving',
        unitLong: 'serving',
        unitShort: 'serving',
        aisle: 'Baking',
        name: 'food',
        original: 'Food',
        originalString: 'Food',
        originalName: 'Food',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/food-coloring.png',
      },
      {
        id: 10211821,
        amount: 1,
        unit: 'serving',
        unitLong: 'serving',
        unitShort: 'serving',
        aisle: 'Produce',
        name: 'bell pepper',
        original: 'Bell pepper',
        originalString: 'Bell pepper',
        originalName: 'Bell pepper',
        metaInformation: [],
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/bell-pepper-orange.png',
      },
    ],
    likes: 2,
  },
];

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
  const fontSize = 48;
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
  recipeEl.className = 'recipe';

  const recipeTitleEl = document.createElement('div');
  recipeTitleEl.className = 'recipe--title';
  recipeTitleEl.innerText = recipe.title;

  const recipeImageEl = document.createElement('img');
  recipeImageEl.className = 'recipe--image';
  recipeImageEl.src = recipe.image;

  const recipeNotesEl = getRecipeNotesEl(recipe);

  recipeEl.appendChild(recipeTitleEl);
  recipeEl.appendChild(recipeImageEl);
  recipeEl.appendChild(recipeNotesEl);

  $('recipes').appendChild(recipeEl);
}

function getRecipeNotesEl(recipe) {
  const recipeNotesEl = document.createElement('div');
  recipeNotesEl.className = 'recipe--notes';

  const recipeUsedIngredientsEl = document.createElement('div');
  recipeUsedIngredientsEl.className = 'recipe--used-ingredients';
  recipeUsedIngredientsEl.innerText = 'Used Ingredients';
  recipeUsedIngredientsEl.appendChild(
    getIngredientListEl(recipe.usedIngredients)
  );

  const recipeMissingIngredientsEl = document.createElement('div');
  recipeMissingIngredientsEl.className = 'recipe--missing-ingredients';
  recipeMissingIngredientsEl.innerText = 'Missing Ingredients';
  recipeMissingIngredientsEl.appendChild(
    getIngredientListEl(recipe.missedIngredients)
  );

  recipeNotesEl.appendChild(recipeUsedIngredientsEl);
  recipeNotesEl.appendChild(recipeMissingIngredientsEl);

  return recipeNotesEl;
}

function getIngredientListEl(ingredients) {
  const ingredientListEl = document.createElement('ul');
  ingredientListEl.className = 'recipe--ingredient-list';
  const ingredientEls = ingredients.map(getIngredientEl);
  ingredientEls.forEach((el) => ingredientListEl.appendChild(el));
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
  const { canvas, ctx } = getCanvas();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  $('recipes').innerHTML = '';
}

window.onload = function () {
  $('detect').onclick = detect;
  $('clear').onclick = clearEntries;
  $('photo-url').focus();
};
