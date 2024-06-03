{
    let myAddition = document.getElementById("addition")
    let mySubtraction = document.getElementById("subtraction")
    let myDivision = document.getElementById("division")
    let myMultiplication = document.getElementById("multiplication")
    let myResult = document.getElementById("result")



    
      function getAddition () {
        arr = getNums()
        let result = arr[0] - arr[1]
        displayResult(result)
        
    }
    function getSubtraction () {
        arr = getNums()
        let result = arr[0] - arr[1]
        displayResult(result)
    }
    function getDivision (){
        arr = getNums()
        let result = arr[0] / arr[1]
        displayResult(result)
    }
    function getMultiplication () {
        arr = getNums()
        let result = arr[0] * arr[1]
        displayResult(result)
    }

    function getNums (){
        let num1 = +document.getElementById('num1').value
        let num2 = +document.getElementById('num2').value
        return [num1, num2]
    }


    function displayResult (result) {
        myResult.innerHTML = result
    }

    myAddition.addEventListener('click', getAddition)
    mySubtraction.addEventListener('click', getSubtraction)
    myDivision.addEventListener('click', getDivision)
    myMultiplication.addEventListener('click', getMultiplication)

}