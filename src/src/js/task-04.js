let counterValue = 0;

const counterEl = document.querySelector('#value');

const decrementBtn = document.querySelector('[data-action="decrement"]');
decrementBtn.addEventListener("click", () => {
    counterEl.textContent = --counterValue;
});

const incrementBtn = document.querySelector('[data-action="increment"]');
incrementBtn.addEventListener("click", () => {
    counterEl.textContent = ++counterValue;
});