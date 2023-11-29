let displayValue = '0'
let firstNumber = null;
let currentOperation = null;
let secondNumber = null;
let results = null;
let decimalCount = 1;
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
        }else if(button.id === '.'){
            decimal()
        }else if(button.id === 'clearbtn'){
            clearScreen()
        }   else if(button.id === 'deletebtn'){
            deleteNumber()
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
            topScreen.textContent = displayValue + " " + operator
            botScreen.textContent = displayValue;
        } else if(currentOperation != null){
            results = round(operate(firstNumber, currentOperation, secondNumber))
            currentOperation = operator;
            firstNumber = results;
            secondNumber = null
            displayValue = results;
            results = null;
            topScreen.textContent = displayValue + " " + operator
            botScreen.textContent = displayValue;
        
        }

}


function operate(firstNumber, operator, secondNumber){
    firstNumber = Number(firstNumber)
    secondNumber = Number(secondNumber)
    switch(operator){
        case '+':
            return firstNumber + secondNumber;
        case `-`:
            return firstNumber - secondNumber;
        case '*':
            return firstNumber * secondNumber;
        case '÷':
            if(firstNumber === 0 && secondNumber === 0){
                return "no no no :)"
            }else
            return firstNumber / secondNumber;   
    }
}

function round(number) {
    return Math.round(number * 100) / 100
  }
 
  
function decimal(){
    if(botScreen.textContent.includes('.') === false){
        if(currentOperation === null){
            firstNumber = firstNumber + "."
            displayValue = displayValue + "."
            botScreen.textContent = displayValue;
        }else if (currentOperation != null){
           secondNumber = secondNumber + "."
           displayValue = displayValue + "."
           botScreen.textContent = displayValue;
        }   
    }

}

function equals(){
    if(firstNumber === null && secondNumber === null || firstNumber != null && secondNumber === null){
        displayValue = displayValue
    }else{
    results = round(operate(firstNumber, currentOperation, secondNumber))
    displayValue = results;
    results = null;
    currentOperation = null;
    botScreen.textContent = displayValue;
    }
                
                }
function clearScreen(){
    firstNumber = null;
    secondNumber = null;
    currentOperation = null;
    displayValue = '0';
    decimalCount = 1;
    topScreen.textContent = ''
    botScreen.textContent = displayValue;
}

function deleteNumber(){

    displayValue = displayValue.toString().slice(0, -1)
    botScreen.textContent = displayValue;
    if(displayValue === ""){
        displayValue = "0";
        botScreen.textContent = displayValue;
    }
    if(currentOperation === null){
        firstNumber = firstNumber.toString().slice(0, -1)
    }else if (currentOperation != null){ 
       secondNumber = secondNumber.toString().slice(0, -1)
    }
    
}

