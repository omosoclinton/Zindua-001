{
    let myAddition = document.getElementById("addition")
    let mySubtraction = document.getElementById("subtraction")
    let myDivision = document.getElementById("division")
    let myMultiplication = document.getElementById("multiplication")
    let myResult = document.getElementById("result")


    
      function getAddition () {
        let num1 = document.getElementById('num1').value
        let num2 = document.getElementById('num2').value
              console.log(num1 + num2)
        // let result = num1 + num2
        // console.log(result)
        // displayResult(result)
        
    }
    function getSubtraction (num1, num2) {
        let num1 = document.getElementById('num1').value
        let num2 = document.getElementById('num2').value
        let result = num1 - num2
        displayResult(result)
    }
    function getDivision (num1, num2){
        let num1 = document.getElementById('num1').value
        let num2 = document.getElementById('num2').value
        let result = num1 / num2
        displayResult(result)
    }
    function getMultiplication (num1, num2) {
        let num1 = document.getElementById('num1').value
        let num2 = document.getElementById('num2').value
        let result = num1 * num2
        displayResult(result)
    }

    function displayResult (result) {
        let num1 = document.getElementById('num1').value
        let num2 = document.getElementById('num2').value
        myResult.innerHtml = result
    }

    myAddition.addEventListener('click', getAddition)
    mySubtraction.addEventListener('click', getSubtraction)
    myDivision.addEventListener('click', getDivision)
    myMultiplication.addEventListener('click', getMultiplication)

}