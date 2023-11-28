let displayValue = '0'
let firstNumber = null;
let currentOperation = null;
let secondNumber = null;
let results = null;
const topScreen = document.querySelector('.topScreen')
const botScreen = document.querySelector('.botScreen')
botScreen.textContent = displayValue;
// Click addEventListener
const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if(button.className === 'operand'){
            addOperand(button.id);
            botScreen.textContent = displayValue;
        }else if(button.className === 'operator'){
            addOperator(button.id);
            botScreen.textContent = displayValue;
        }else if(button.id === '='){
            equals()
        }else if(button.id === 'clearbtn'){
            clearScreen()
        }
    })
})


//Calculator Functions
function addOperand(operand){
    if(currentOperation === null){
        if(firstNumber === null){
            firstNumber = operand;
           displayValue = firstNumber;
        }
        else{
            firstNumber += operand;
            displayValue = firstNumber;
        }

    }else{
        if(secondNumber === null){
            secondNumber = operand;
            displayValue = secondNumber;
        }
        else{
            secondNumber += operand;
            displayValue = secondNumber;
        }
    }
    
}

function addOperator(operator){
    if(currentOperation === null){
        currentOperation = operator;
        topScreen.textContent = displayValue + operator
        botScreen.textContent = displayValue;
    } else if(currentOperation != null){
        results = Math.round(operate(firstNumber, currentOperation, secondNumber))
        currentOperation = operator
        firstNumber = results;
        secondNumber = null
        displayValue = results;
        results = null;

        topScreen.textContent = displayValue + operator
        botScreen.textContent = displayValue;
     
    }
   

}

function equals(){
    results = operate(firstNumber, currentOperation, secondNumber)
    displayValue = results;
    results = null;
    currentOperation = null;
    botScreen.textContent = displayValue;

}

function operate(firstNumber, operator, secondNumber){
    firstNumber = parseInt(firstNumber)
    secondNumber = parseInt(secondNumber)
    switch(operator){
        case '+':
            return firstNumber + secondNumber;
        case `-`:
            return firstNumber - secondNumber;
        case '*':
            return firstNumber * secondNumber;
        case '÷':
            return firstNumber / secondNumber;    
    }
}

function clearScreen(){
    firstNumber = null;
    secondNumber = null;
    currentOperation = null;
    displayValue = '0';
    topScreen.textContent = ''
    botScreen.textContent = displayValue;
}
