const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('fi ve')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const seight = document.getElementById('eight')
const nine = document.getElementById('nine')
const zero = document.getElementById('zero')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const divide = document.getElementById('divide')
const multiple = document.getElementById('multiple')
const enter = document.getElementById('enter')
const display = document.getElementById('display')
const number = document.getElementById('number')
const lcd = document.getElementById('lcd')


digits.addEventListener('click',(e)=> {
  // const re = preventDefault()
const numberEntered = parseInt(e.target.innerHTML)
lcd.innerHTML = numberEntered
})


