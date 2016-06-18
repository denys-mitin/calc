
var displayInput = document.getElementById('display');
var previous;
var operationName;

function typeNumber(number) {
    displayInput.value += number;
}

function reset() {
    displayInput.value = '';
}

function operation(name) {
    previous = parseFloat(displayInput.value);
    reset();
    operationName = name;
}

function calculate() {
    var current = parseFloat(displayInput.value)
    var result;
    switch (operationName) {
        case 'add':
            result = previous + current;
            break;
        case 'substract':
            result = previous - current;
            break;
        case 'multiply':
            result = previous * current;
            break;
        case 'divide':
            result = previous / current;
            break;
        default:
            result = 'unsupported operation';
    }
    displayInput.value = result;
}