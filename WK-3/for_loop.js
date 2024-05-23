const numbers = [23,45, 56, 78, 89]

// for (let i in numbers) {
//     console.log(numbers[i])
// }

// for (let i of numbers){
//     console.log(i)
// }



function maxValue (array) {
    let currentLargest = numbers [0]
    for (let i in numbers) {
        if (numbers[i] > currentLargest) {
            currentLargest = numbers[i]
        }
    }
    return currentLargest
}
console.log(maxValue(numbers))

function minValue (array) {
    let currentSmallest = numbers [0]
    for (let number of numbers) {
        if (number < currentSmallest) {
            currentSmallest = number
        }
    }
    return currentSmallest
}

console.log(minValue(numbers))