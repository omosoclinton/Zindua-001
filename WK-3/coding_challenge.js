{
    const myPar1 = document.getElementById("magic")
    storedText = myPar1.innerText

    function changeText() {
        myPar1.innerText = 'Hello World'
    }
    function changeTextBack() {
        myPar1.innerText = storedText
    }

}