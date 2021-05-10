let number1 = 0
let number2 = 0
let counter = 0
let answer = 0

document.getElementById('button').addEventListener('click', multiply)

function multiply () {
  number1 = document.getElementById('number-1').value
  number2 = document.getElementById('number-2').value
  number1 = parseInt(number1)
  number2 = parseInt(number2)


for (let counter = 0; counter < number1; counter++) {
  answer = answer + number2
}
document.getElementById('answer').innerHTML = answer
}