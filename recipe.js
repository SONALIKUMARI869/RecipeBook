// Array of recipe objects
const recipes = [
  {
      name: "Chaii",
      ingredients: [
          "half litre milk",
          " half glass water",
          "3 table spoon sugar",
          "1 table spoon tea leaves",
          "1 bay leaf",
          "2 cardamom"
      ],
      instructions: "Boil water, add  tea leaves, simmer for 2-3 minutes, strain, and serve with optional sugar, milk and extra things."
  },
  {
      name: "Pancakes",
      ingredients: [
          "1 cup flour",
          "1 tablespoon sugar",
          "1 teaspoon baking powder",
          "1 cup milk",
          "1 egg",
          "Butter for cooking"
      ],
      instructions: "In a bowl, mix flour, sugar, and baking powder. Add milk and egg, whisking until smooth. Heat a pan and add butter. Pour batter to form pancakes and cook until bubbles form on the surface, then flip and cook until golden. Serve with syrup."
  }
  // Add more recipes as needed
];

// Function to display recipe names in the list
function displayRecipes() {
  const recipeList = document.getElementById('recipes');
  recipes.forEach((recipe, index) => {
      const li = document.createElement('li');
      li.textContent = recipe.name;
      li.addEventListener('click', () => displayRecipeDetails(index));
      recipeList.appendChild(li);
  });
}

// Function to display details of the selected recipe
function displayRecipeDetails(index) {
  const detailsDiv = document.getElementById('details');
  const recipe = recipes[index];
  detailsDiv.innerHTML = `
      <h3>${recipe.name}</h3>
      <h4>Ingredients:</h4>
      <ul>
          ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
      </ul>
      <h4>Instructions:</h4>
      <p>${recipe.instructions}</p>
  `;
}

// Initialize the recipe list on page load
document.addEventListener('DOMContentLoaded', displayRecipes);
