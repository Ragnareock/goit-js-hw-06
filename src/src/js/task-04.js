let counterValue = 0;

const counterEl = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener("click", () => {
    counterEl.textContent = --counterValue;
});
incrementBtn.addEventListener("click", () => {
    counterEl.textContent = ++counterValue;
});