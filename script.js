const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.keys')
const display = document.querySelector('.display')


keys.addEventListener('click', (e)=> {
  const key = e.target
  const previousKeyType = calculator.dataset.previousKeyType
  const action = key.dataset.action
  const displayNum = display.innerText
  // checking the operators
  if (action === 'divide' ||
   action === 'add' ||
    action === 'multiply' ||
     action === 'subtract') {
    key.classList.add('is-depressed')
    calculator.dataset.previousKeyType = 'operator'
    calculator.dataset.operator = action
    calculator.dataset.firstvalue = displayNum
    }
    // checking if the display number is zero and replacing number
  if (!action) {
     if (displayNum === '0' || previousKeyType === 'operator') {
      console.log(`displayNum ${displayNum} previousKeyType ${previousKeyType}`)
      display.innerText = key.innerText
    } else {
      display.innerText = displayNum + key.innerText
    }

  }



  // checking if the action is a decimal and appending a decimal
  if (action === 'decimal') {
    display.innerText += "."
  }
  // chekcing is the action is a calculate "=" and
  if (action === 'calculate') {
    const firstValue = calculator.dataset.firstvalue
    const operator = calculator.dataset.operator
    const secondValue = display.innerText
    calculateIt(firstValue,operator,secondValue)

  }
  // checking action is a clear button
   if (action === 'clear') {
    calculator.dataset.firstvalue = "";
    calculator.dataset.operator = "";
    display.innerText = 0;
  }
})

function calculateIt(first,operator,second) {
  let result;
  if (operator === 'add') {
     result = parseInt(first) + parseInt(second)
  }
  else if (operator === 'subtract') {
     result = parseInt(first) - parseInt(second)
  }
  else if (operator === 'divide') {
    result = parseInt(first) / parseInt(second)
  }
  else if (operator === 'multiply') {
    result = parseInt(first) * parseInt(second)
  }
  console.log(first)
  console.log(operator)
  console.log(second)
  console.log(result)
}

