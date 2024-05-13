{
    button = document.getElementById("button-demo")
    function clickButton(){
        if(button.innerText == "Turn Red!"){
            document.body.style.backgroundColor = 'red'
            document.body.style.color = 'black'
            button.innerText = 'Turn Blue!'
        }else{
            document.body.style.backgroundColor = 'blue'
            document.body.style.color = 'white'
            button.innerText = 'Turn Red!'
        }
    }
}