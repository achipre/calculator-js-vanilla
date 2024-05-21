// Operation
const symbolMath = document.getElementById('operation')
// Input
const inputTop = document.getElementById('inputTop')
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
let operation;
buttonAC.addEventListener('click', () => {
  if (input.value !== "" && operation === '=' && inputTop.value !== "") {
    inputTop.value = ''
    operation = ''
    symbolMath.textContent = ''
    return input.value = ''
  }
  if (input.value !== '') {
    input.value = ''
  } else if (!input.value && symbolMath.textContent !== ''){
    symbolMath.textContent = ''
  } else {
    inputTop.value = ''
  }
})

// evento button number
buttonCero.addEventListener('click', () => {
  if (input.value.length >= 8) return
  if (input.value === "0") return
  if (input.value === "∞" || input.value === "Error") return input.value = 0
  if (input.value !== "" && operation === '=' && inputTop.value !== "") {
    inputTop.value = ''
    operation = ''
    symbolMath.textContent = ''
    return input.value = 0
  }
  input.value += 0
})
buttonOne.addEventListener('click', () => {
  if (input.value.length >= 8) return
  if (input.value === "0") return input.value = 1
  if (input.value === "∞" || input.value === "Error") return input.value = 1
  if (input.value !== "" && operation === '=' && inputTop.value !== "") {
    inputTop.value = ''
    operation = ''
    symbolMath.textContent = ''
    return input.value = 1
  }
  return input.value += 1
})
buttonTwo.addEventListener('click', () => {
  if (input.value.length >= 8) return
  if (input.value === "0") return input.value = 2
  if (input.value === "∞" || input.value === "Error") return input.value = 2
  if (input.value !== "" && operation === '=' && inputTop.value !== "") {
    inputTop.value = ''
    operation = ''
    symbolMath.textContent = ''
    return input.value = 2
  }
  return input.value += 2
})
buttonThree.addEventListener('click', () => {
  if (input.value.length >= 8) return
  if (input.value === "0") return input.value = 3
  if (input.value === "∞" || input.value === "Error") return input.value = 3
  if (input.value !== "" && operation === '=' && inputTop.value !== "") {
    inputTop.value = ''
    operation = ''
    symbolMath.textContent = ''
    return input.value = 3
  }
  return input.value += 3
})
buttonFour.addEventListener('click', () => {
  if (input.value.length >= 8) return
  if (input.value === "0") return input.value = 4
  if (input.value === "∞" || input.value === "Error") return input.value = 4
  if (input.value !== "" && operation === '=' && inputTop.value !== "") {
    inputTop.value = ''
    operation = ''
    symbolMath.textContent = ''
    return input.value = 4
  }
  return input.value += 4
})
buttonFive.addEventListener('click', () => {
  if (input.value.length >= 8) return
  if (input.value === "0") return input.value = 5
  if (input.value === "∞" || input.value === "Error") return input.value = 5
  if (input.value !== "" && operation === '=' && inputTop.value !== "") {
    inputTop.value = ''
    operation = ''
    symbolMath.textContent = ''
    return input.value = 5
  }
  return input.value += 5
})
buttonSix.addEventListener('click', () => {
  if (input.value.length >= 8) return
  if (input.value === "0") return input.value = 6
  if (input.value === "∞" || input.value === "Error") return input.value = 6
  if (input.value !== "" && operation === '=' && inputTop.value !== "") {
    inputTop.value = ''
    operation = ''
    symbolMath.textContent = ''
    return input.value = 6
  }
  return input.value += 6
})
buttonSeven.addEventListener('click', () => {
  if (input.value.length >= 8) return
  if (input.value === "0") return input.value = 7
  if (input.value === "∞" || input.value === "Error") return input.value = 7
  if (input.value !== "" && operation === '=' && inputTop.value !== "") {
    inputTop.value = ''
    operation = ''
    symbolMath.textContent = ''
    return input.value = 7
  }
  return input.value += 7
})
buttonEight.addEventListener('click', () => {
  if (input.value.length >= 8) return
  if (input.value === "0") return input.value = 8
  if (input.value === "∞" || input.value === "Error") return input.value = 8
  if (input.value !== "" && operation === '=' && inputTop.value !== "") {
    inputTop.value = ''
    operation = ''
    symbolMath.textContent = ''
    return input.value = 8
  }
  return input.value += 8
})
buttonNight.addEventListener('click', () => {
  if (input.value.length >= 8) return
  if (input.value === "0") return input.value = 9
  if (input.value === "∞" || input.value === "Error") return input.value = 9
  if (input.value !== "" && operation === '=' && inputTop.value !== "") {
    inputTop.value = ''
    operation = ''
    symbolMath.textContent = ''
    return input.value = 9
  }
  return input.value += 9
})

// buton '.'
buttonPoint.addEventListener('click', () => {
  const point = '.'.toString()
  const inputV = input.value.toString()
  if (input.value.length >= 8) return
  if (inputV.includes('.')) return
  if (inputV === "0" || inputV === "") return input.value = "0" + point
  return input.value = inputV + point
})
// buton '+/-'
buttonPlusMinus.addEventListener('click', () => {
  const plusminus = '-'
  const inputV = input.value
  if (inputV === "0" || inputV === "") return input.value =  plusminus + "0"
  if (input.value.length >= 9) return
  if (inputV.includes('-')) {
    const newInputtoArr = inputV.split('')
    const newInput = [...newInputtoArr.slice(1)].toString()
    console.log(newInput);

    return input.value = newInput
  } else {
    console.log('ingresar');
    return input.value = plusminus + inputV
  }
})

// button  '+'
buttonPlus.addEventListener('click', () => {
  // simbol operation
  if (symbolMath.textContent !== '+') {
    operation = '+'
    symbolMath.textContent = '+'
  }
  if (!input.value) return
  if (!inputTop.value) {
    inputTop.value = input.value 
  } else {
    inputTop.value = parseInt(inputTop.value) + parseInt(input.value)
  }
  return input.value = ''
})
buttonMinus.addEventListener('click', () => {
  operation = '-'
  symbolMath.textContent = '-'

  if (!inputTop.value) {
    inputTop.value = input.value 
  } else  {
    inputTop.value = parseInt(inputTop.value) - parseInt(input.value)
  }
  return input.value = ''
})
buttonMultiply.addEventListener('click', () => {
  operation = '*'
  symbolMath.textContent = '×'

  if (!inputTop.value) {
    inputTop.value = input.value 
  } else {
    inputTop.value = parseInt(inputTop.value) * parseInt(input.value)
  }
  return input.value = ''
})
buttonDivision.addEventListener('click', () => {
  operation = '/'
  symbolMath.textContent = '÷'

  if (!inputTop.value) {
    inputTop.value = input.value 
  } else {
    inputTop.value = parseInt(inputTop.value) / parseInt(input.value)
  }
  return input.value = ''
})

// button  '='
buttonEqual.addEventListener('click', () => {
  if (!inputTop.value) return
  symbolMath.textContent = '='
  if (operation === '+') {
    if (input.value === '') {
      input.value = '0'
    }
    const ValueFinal = input.value = parseFloat(inputTop.value) + parseFloat(input.value)
    operation = '='
    return parseFloat(ValueFinal)
  }
  if (operation === '-') {
    return input.value = parseFloat(inputTop.value) - parseFloat(input.value)
  }
  if (operation === '*') {
    return input.value = parseFloat(inputTop.value) * parseFloat(input.value)
  }
  if (operation === '/') {
    if (inputTop.value === '0' && input.value === '0') {
      return input.value = 'Error'
    }
    if (inputTop.value !== '0' && input.value === '0') {
      return input.value = '∞'
    }
    return input.value = parseInt(inputTop.value) / parseInt(input.value)
  }
  
})