//FURTHER IMPROVEMENT

//1. Create a conditional for if the equals button is called, then another operation
//   immediately after. (e.g. 2 + 3 = 5, + 2 = 7)


let num1
let num2
let operator

function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2 
}

function divide(num1,num2) {
    return (num2 === 0) ? 'oops' : num1 / num2 
}

function percent(num1) {
    display.textContent = `${num1 * 100}%`
}

function operate() {
   
    switch (operator) {
        case '+' :
            num2 = +display.textContent.substring(display.textContent.indexOf('+') + 2)
            display.textContent = add(num1, num2)
            operator = ''
            break;
        case '-' :
            num2 = +display.textContent.substring(display.textContent.indexOf('-') + 2)
            display.textContent = subtract(num1, num2);
            operator = ''
            break;
        case '*' :
            num2 = +display.textContent.substring(display.textContent.indexOf('*') + 2)
            display.textContent = multiply(num1, num2);
            operator = ''
            break;
        case '/' :
            num2 = +display.textContent.substring(display.textContent.indexOf('/') + 2)
            display.textContent = divide(num1,num2);
            operator = ''
            break;
        default: 
            break;
    }
    //1. switch(operator) for the different functions
    //2. Each case is the different kinds of operators
}

const display = document.querySelector('#display')

const deleteButton = document.querySelector('#delete')
deleteButton.addEventListener('click', (e) => alert('Work in progress!'))

const clearButton = document.querySelector('#clear')
clear.addEventListener('click', (e) => {
    display.textContent = '0'
    operator = ''
})

const signChange = document.querySelector('#sign-change')
signChange.addEventListener('click', (e) => {
    display.textContent = -(display.textContent)
})

const percentageButton = document.querySelector('#percentage')
percentage.addEventListener('click', (e) => display.textContent = `${display.textContent * 100}%`)

const seven = document.querySelector('#seven')
seven.addEventListener('click', (e) => {
    display.textContent === '0' || display.textContent.includes('%') ? display.textContent = 7 : display.textContent += 7
})

const eight = document.querySelector('#eight')
eight.addEventListener('click', (e) => {
    display.textContent === '0' ? display.textContent = 8 : display.textContent += 8
})

const nine = document.querySelector('#nine')
nine.addEventListener('click', (e) => {
    display.textContent === '0' ? display.textContent = 9 : display.textContent += 9
})

const divideButton = document.querySelector('#divide')
divideButton.addEventListener('click', (e) => {
    
    operator ? operate() : {}

    num1 = +display.textContent
    operator = '/'
    display.textContent += ' / '

})

const four = document.querySelector('#four')
four.addEventListener('click', (e) => {
    display.textContent === '0' ? display.textContent = 4 : display.textContent += 4
})

const five = document.querySelector('#five')
five.addEventListener('click', (e) => {
    display.textContent === '0' ? display.textContent = 5 : display.textContent += 5
})

const six = document.querySelector('#six')
six.addEventListener('click', (e) => {
    display.textContent === '0' ? display.textContent = 6 : display.textContent += 6
})

const multiplyButton = document.querySelector('#multiply')
multiplyButton.addEventListener('click', (e) => {

    operator ? operate() : {}

    num1 = +display.textContent
    operator = '*'
    display.textContent += ' * '
})


const one = document.querySelector('#one')
one.addEventListener('click', (e) => {
    display.textContent === '0' ? display.textContent = 1 : display.textContent += 1
})

const two = document.querySelector('#two')
two.addEventListener('click', (e) => {
    display.textContent === '0' ? display.textContent = 2 : display.textContent += 2
})

const three = document.querySelector('#three')
three.addEventListener('click', (e) => {
    display.textContent === '0' ? display.textContent = 3 : display.textContent += 3
})

const subtractButton = document.querySelector('#subtract')
subtractButton.addEventListener('click', (e) => {

    operator ? operate() : {}

    num1 = +display.textContent
    operator = '-'
    display.textContent += ' - '
})

const decimal = document.querySelector('#decimal')
decimal.addEventListener('click', (e) => [
    display.textContent += '.'
])

const zero = document.querySelector('#zero')
zero.addEventListener('click', (e) => {
    display.textContent === '0' ? display.textContent = 0 : display.textContent += 0
})

const equals = document.querySelector('#equals')
equals.addEventListener('click', (e) => {
   display.textContent.substring(display.textContent.indexOf(' ') + 2) === ' ' ? {} : operate()
}
)

const addButton = document.querySelector('#add')
addButton.addEventListener('click', (e) => {

operator ? operate() : {}

    num1 = +display.textContent
    operator = '+'
    display.textContent += ' + '
})