const categoriesListEl = document.getElementById('categories');
console.log(`Number of categories: ${categoriesItemEl.length}`);
const categoriesItemEl = categoriesListEl.querySelectorAll('.item');

categoriesItemEl.forEach(function (itemEl) {
    const titleOfCategories = itemEl.firstElementChild.textContent;
    console.log(`Category: ${titleOfCategories}`);
    const amountOfCategories = itemEl.lastElementChild.children.length;
    console.log(`Elements: ${amountOfCategories}`);
})
