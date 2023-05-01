const textInput = document.getElementById('validation-input');
textInput.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length === Number(textInput.dataset.length)) {
        textInput.classList = 'valid';
    }
    else {
        textInput.classList = 'invalid';
    }
}
