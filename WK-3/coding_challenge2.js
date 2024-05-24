{
    const button1 = document.getElementById('buttonRed')
    const button2 = document.getElementById('buttonBlue')
    const button3 = document.getElementById('button3')
    function changeBodyRed(){
        document.body.style.backgroundColor = 'red'
        
    }
    function changeBodyBlue(){
        document.body.style.backgroundColor = 'blue'
        
    }
    button1.addEventListener('click', changeBodyRed)
    button2.addEventListener('click', changeBodyBlue)

    function stopRed(){
        button1.removeEventListener('click', changeBodyRed)
    }
    button3.addEventListener('click', stopRed)

}