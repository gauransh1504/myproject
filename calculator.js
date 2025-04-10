const display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = '';

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (button.classList.contains('operator')) {
            if (currentInput) {
                operator = value;
                previousInput = currentInput;
                currentInput = '';
            }
        } else if (value === '=') {
            if (previousInput && currentInput && operator) {
                currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
                operator = '';
                previousInput = '';
            }
        } else {
            currentInput += value;
        }

        display.textContent = currentInput || previousInput || '0';
    });
});
