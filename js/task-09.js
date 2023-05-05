function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector('.change-color');
btnEl.addEventListener('click', onChangeColor);
const spanEl = document.querySelector('.color');

function onChangeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = document.body.style.backgroundColor;
  console.log(spanEl.textContent);
}