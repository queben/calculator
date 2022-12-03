const buttons = document.querySelector('.buttons')
const buttonElements = [
    'C', '+/-', '%', '=', '7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', 'x', 'Del', '0', '.', '/'
]

buttonElements.forEach(buttonEl => {
    const button = document.createElement('div')
    console.log(button)
    button.textContent = buttonEl
    button.classList.add('button')
    button.classList.add(buttonEl)
    buttons.appendChild(button)
})