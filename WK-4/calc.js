{
    let myAddition = document.getElementById("addition")
    let mySubtraction = document.getElementById("subtraction")
    let myDivision = document.getElementById("division")
    let myMultiplication = document.getElementById("multiplication")
    let myResult = document.getElementById("result")


    
      function getAddition () {
        let num1 = +document.getElementById('num1').value
        let num2 = +document.getElementById('num2').value
        result = num1 + num2
        displayResult(result)
        
    }
    function getSubtraction () {
        let num1 = document.getElementById('num1').value
        let num2 = document.getElementById('num2').value
        let result = num1 - num2
        displayResult(result)
    }
    function getDivision (){
        let num1 = document.getElementById('num1').value
        let num2 = document.getElementById('num2').value
        let result = num1 / num2
        displayResult(result)
    }
    function getMultiplication () {
        let num1 = document.getElementById('num1').value
        let num2 = document.getElementById('num2').value
        let result = num1 * num2
        displayResult(result)
    }

    function displayResult (result) {
        myResult.innerHTML = result
    }

    myAddition.addEventListener('click', getAddition)
    mySubtraction.addEventListener('click', getSubtraction)
    myDivision.addEventListener('click', getDivision)
    myMultiplication.addEventListener('click', getMultiplication)

}