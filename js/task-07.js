const inputSizeControl = document.getElementById('font-size-control');
inputSizeControl.addEventListener('input', changeFontSize);
const dinamicSizeText = document.getElementById('text');

function changeFontSize(event) {
    const currentFontSize = event.target.value;
    dinamicSizeText.style.fontSize = `${currentFontSize}px`;
}

// inputSizeControl.addEventListener('input', event => {
//     dinamicSizeText.style.fontSize = `${event.target.value}px`;
// });

