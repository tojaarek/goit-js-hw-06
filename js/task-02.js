const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('ul#ingredients');

ingredients.forEach((ingredient) => {
  const newItem = document.createElement('li');
  newItem.textContent = ingredient;
  newItem.classList.add('item');
  ingredientsList.appendChild(newItem);
});
