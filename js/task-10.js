function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divEl = document.getElementById('boxes');
const inputEl = document.querySelector('input');
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');

function createBoxesСollection() {
  const amount = inputEl.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  let markup = '';
  let size = 30;
  for (let i = 0; i < amount; i++) {
    size += 10;
    let string = `<div id='boxes' style='background: ${getRandomHexColor()}; width: ${size}px; height: ${size}px; margin: 10px;'></div>`;
    markup += string;
  }
  divEl.innerHTML = markup;
}

function destroyBoxesСollection() {
  let markup = '';
  divEl.innerHTML = markup;
  inputEl.value = '';
}

btnCreateEl.addEventListener('click', createBoxesСollection);
btnDestroyEl.addEventListener('click', destroyBoxesСollection);