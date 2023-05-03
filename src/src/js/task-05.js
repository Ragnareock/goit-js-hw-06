const textInput = document.getElementById('name-input');
const textOutput = document.getElementById('name-output');

textInput.addEventListener('input', event => {
    if (event.target.value === '') {
        textOutput.textContent = 'Anonymous';
    }
    else {
        textOutput.textContent = event.target.value;
    }
})
