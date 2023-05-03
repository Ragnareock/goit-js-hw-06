const textInput = document.getElementById('validation-input');
textInput.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (event.target.value.length === Number(textInput.dataset.length)) {
        // textInput.classList = 'valid';
        textInput.classList.remove('invalid');
        textInput.classList.add('valid');
    }
    else {
        // textInput.classList = 'invalid';
        textInput.classList.remove('valid');
        textInput.classList.add('invalid');
    }
}