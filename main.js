// Input
const input = document.getElementById('inputValue')
// Button
const buttonAC = document.getElementById('AC')
const buttonPlusMinus = document.getElementById('plusminus')
const buttonPorcentage = document.getElementById('porcentage')
const buttonDivision = document.getElementById('division')
const buttonMultiply = document.getElementById('multiply')
const buttonMinus = document.getElementById('munis')
const buttonPlus = document.getElementById('plus')
const buttonEqual = document.getElementById('equal')
const buttonPoint = document.getElementById('point')
const buttonCero = document.getElementById('cero')
const buttonOne = document.getElementById('one')
const buttonTwo = document.getElementById('two')
const buttonThree = document.getElementById('three')
const buttonFour = document.getElementById('four')
const buttonFive = document.getElementById('five')
const buttonSix = document.getElementById('six')
const buttonSeven = document.getElementById('seven')
const buttonEight = document.getElementById('eight')
const buttonNight = document.getElementById('nine')





// evento button AC
buttonAC.addEventListener('click', () => {
  input.value = ''
})

// evento button number
buttonCero.addEventListener('click', () => {
  if (input.value === "0") return
  input.value += 0
})
buttonOne.addEventListener('click', () => {
  if (input.value === "0") return input.value = 1
  return input.value += 1
})
buttonTwo.addEventListener('click', () => {
    if (input.value === "0") return input.value = 2

  return input.value += 2
})
buttonThree.addEventListener('click', () => {
    if (input.value === "0") return input.value = 3

  return input.value += 3
})
buttonFour.addEventListener('click', () => {
    if (input.value === "0") return input.value = 4

  return input.value += 4
})
buttonFive.addEventListener('click', () => {
    if (input.value === "0") return input.value = 5

  return input.value += 5
})
buttonSix.addEventListener('click', () => {
    if (input.value === "0") return input.value = 6

  return input.value += 6
})
buttonSeven.addEventListener('click', () => {
    if (input.value === "0") return input.value = 7

  return input.value += 7
})
buttonEight.addEventListener('click', () => {
    if (input.value === "0") return input.value = 8

  return input.value += 8
})
buttonNight.addEventListener('click', () => {
    if (input.value === "0") return input.value = 9

  return input.value += 9
})