const categoriesListEl = document.getElementById('categories');
const categoriesItemEl = categoriesListEl.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesItemEl.length}`);

categoriesItemEl.forEach(function (itemEl) {
    const titleOfCategories = itemEl.firstElementChild.textContent;
    console.log(`Category: ${titleOfCategories}`);
    const amountOfCategories = itemEl.lastElementChild.children.length;
    console.log(`Elements: ${amountOfCategories}`);
})
