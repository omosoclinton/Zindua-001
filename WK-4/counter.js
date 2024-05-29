/*
Create a counter: Have two buttons: reset and count buttons
When the count button is clicked, the number should increase by 1
When the reset button is clicked, the counter should start from 0

*/
let resetBtn = document.getElementById("reset")
let countBtn = document.getElementById("count")
let number = document.getElementById("number")
stored_number = number.innerText
console.log(typeof(stored_number))

function countButton () {
    
    number.innerText = 1
}

function resetButton () {
    number.innerText = 0
}

resetBtn.addEventListener('click', resetButton)
countBtn.addEventListener('click', countButton)