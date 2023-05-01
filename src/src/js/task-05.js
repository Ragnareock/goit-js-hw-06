const textInput = document.getElementById('name-input');
const textOutput = document.getElementById('name-output');

textInput.addEventListener('input', (event) => {
    if (event.currentTarget.value.length === 0) {
        textOutput.textContent = 'Anonymous';
    }
    else {
        textOutput.textContent = event.currentTarget.value;
    }
})
