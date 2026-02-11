const buttonPlus = document.querySelector('[data-action="plus"]')
const buttonMinus = document.querySelector('[data-action="minus"]')
const buttonDivide = document.querySelector('[data-action="divide"]')
const buttonMultiply = document.querySelector('[data-action="multiply"]')
const inputFirst = document.querySelector('[data-action="firstNumber"]')
const inputSecond = document.querySelector('[data-action="secondNumber"]')
const screen = document.querySelector('[data-action="result"]')
const submit = document.querySelector('[data-submit="submit"]')

let result = 0

buttonPlus.addEventListener("click", (event) =>{
const a = Number(inputFirst.value)
const b = Number(inputSecond.value)
result = a + b
console.log(result);
})

buttonMinus.addEventListener("click", (event) =>{
const a = Number(inputFirst.value)
const b = Number(inputSecond.value)
result = a - b
})

buttonDivide.addEventListener("click", (event) =>{
const a = Number(inputFirst.value)
const b = Number(inputSecond.value)
if(b !== 0){
    result = a / b
}
else{
    result = "Помилка"
}
})

buttonMultiply.addEventListener("click", (event) =>{
const a = Number(inputFirst.value)
const b = Number(inputSecond.value)
result = a * b
})

submit.addEventListener("click", (event) =>{
    screen.value = result
})