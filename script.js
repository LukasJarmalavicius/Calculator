function add(firstNumber, secondNumber){
    return firstNumber + secondNumber;
};

function subtract(firstNumber, secondNumber){
    return firstNumber - secondNumber;
};

function multiply(firstNumber, secondNumber){
    return firstNumber * secondNumber;
};

function divide(firstNumber, secondNumber){
    return firstNumber / secondNumber;
};

let firstNumber;
let operator;
let secondNumber;

function operate(firstNumber, operator, secondNumber){
    operator = operator.toLowerCase()
    switch(operator){
        case 'add':
            return add(firstNumber, secondNumber);
        case `subtract`:
            return subtract(firstNumber, secondNumber);
        case 'multiply':
            return multiply(firstNumber, secondNumber);
        case 'divide':
            return divide(firstNumber, secondNumber);    
    }
}
