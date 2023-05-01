const inputSizeControl = document.getElementById('font-size-control');
const dinamicSizeText = document.getElementById('text');

function changeFontSize(event) {
    const currentFontSize = event.currentTarget.value;
    dinamicSizeText.style.fontSize = `${currentFontSize}px`;
}

inputSizeControl.addEventListener('input', changeFontSize);

// inputSizeControl.addEventListener('input', event => {
//     const currentFontSize = event.currentTarget.value;
//     dinamicSizeText.style.fontSize = `${currentFontSize}px`;
// });

