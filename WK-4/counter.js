/*
Create a counter: Have two buttons: reset and count buttons
When the count button is clicked, the number should increase by 1
When the reset button is clicked, the counter should start from 0

*/
let resetBtn = document.getElementById("reset")
let countBtn = document.getElementById("count")
let number = document.getElementById("number")

let count = 0

function countButton () {
    count++
    displayCount()
}

function resetButton () {
    count = 0
    displayCount()
}
function displayCount() {
    number.innerHTML = count
}

resetBtn.addEventListener('click', resetButton)
countBtn.addEventListener('click', countButton)