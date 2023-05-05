const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listItemEl = ingredients.map((elem) => {
  const itemEl = document.createElement('li');
  itemEl.textContent = elem;
  itemEl.classList = 'item';
  return itemEl;
})

const listEl = document.querySelector('#ingredients');
listEl.append(...listItemEl);
