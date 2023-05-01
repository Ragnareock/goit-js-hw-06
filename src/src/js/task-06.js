const textInput = document.getElementById('validation-input');

function onInputBlur(event) {
    if (event.currentTarget.value.length === Number(textInput.dataset.length)) {
        textInput.classList = 'valid';
    }
    else {
        textInput.classList = 'invalid';
    }
}

textInput.addEventListener('blur', onInputBlur);