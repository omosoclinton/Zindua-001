{

    
    const domBody = document.getElementById("body")
    domBody.style.backgroundColor = "blue"
    // const domButton = document.querySelectorAll("p#buttons")
    // domButton.style.fontFamily = 'serif'
    
    /*

    const domElement = document.getElementsByTagName("p")
    console.log(domElement)
    const domClass = document.getElementsByClassName("button")
    console.log(domClass)
    */

    let btn = document.getElementById('btnRate')
    let output = document.getElementById('output')

    btn.addEventListener('click', () => {
        let rates = document.getElementsByName('rate')
        rates.forEach ((rate) => {
            if (rate.checked) {
                output.innerText = `You selected: ${rate.value}`
            }

        })
    })


    // const domElementsByQuery = document.querySelectorAll("input.button")
    // console.log(domElementsByQuery)
    
    

    const domPar = document.getElementById("par1");
    // console.log(domPar)
    domPar.style.color = "gold"
    domPar.style.fontSize = "1.5em"
    domPar.style.fontFamily = "sans-serif"
    domPar.innerHTML = '<h4>Ratings<h4>'

    const domImage = document.getElementById('my-image')
    // domImage.src =""
}