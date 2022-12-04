const buttons = document.querySelector('.buttons')
const buttonElements = [
    'C', '+/-', '%', '=', '7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', 'x', 'Del', '0', '.', '/'
]
let numArr = []
let operation
let num1
let num2 = undefined

const displayValue = document.querySelector('.displayValue')

buttonElements.forEach(buttonEl => {
    const button = document.createElement('button')
    console.log(button)
    button.textContent = buttonEl
    button.classList.add('button')
    
    if(isNaN(buttonEl)) {
        button.classList.add('operator')
        button.addEventListener('click', storeOperator)
    } else {
        button.classList.add(buttonEl)
        button.addEventListener('click', createNum)
    }

    if(buttonEl === 'Del') 
    button.classList.add('Del')

    buttons.appendChild(button)
})

function storeOperator() {
    if(num2 === undefined) {
        numArr.length = 0
        num2 = num1
        operation = this.textContent
        displayValue.textContent = '0'
    } else {
        num2 = operate(operation)
        displayValue.textContent = num2
        numArr.length = 0
        operation = this.textContent
    }
}

function createNum(buttonNum) {
    numArr.push(this.textContent)
    displayValue.textContent = numArr.reduce((allNums, num) => {
        return allNums + num
    }, "")

    num1 = Number(displayValue.textContent)
}

function operate(operator) {

    switch(operator) {
        case '+':
            return num2 + num1;
        case 'x':
            return num2 * num1;
        case '/':
            return num2 / num1;
        case '-':
            return num2 - num1;
        case '%':
            return num2 % num1;
    }
}