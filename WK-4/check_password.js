{
    let button = document.getElementById("button")
    sampleNumbers ="0123456789"
    sampleSpecial ="#\/|*&%^$£!@"
    sampleChars="abcdefghijklmnopqrstuvwxyz"
    sampleCapsChars = "ABCDEFGHIJKLMNOPQRSTUVXYZ"

    function checkpassword(password, regular) {
        for(i =0;i<regular.length; i++){
            if(password.includes(regular[i])){
                return true
            }
        }
        return false
    }
     function changeBorderColorCorrect(){
        document.getElementById("password").style.borderColor = 'green'
     }
     function changeBorderColor(){
        document.getElementById("password").style.borderColor = 'red'
     }
    function validatePassword(){
        let password = document.getElementById("password").value
        if(checkpassword(password, sampleNumbers) && checkpassword(password, sampleSpecial)&& checkpassword(password,sampleCapsChars) && checkpassword(password,sampleChars) &&(password.length>8)){
            button.innerHTML = "<p>correct password<p/>"
            changeBorderColorCorrect()

        }else if(!checkpassword(password,sampleChars)){
            button.innerHTML = "<p>does not contain lower caps letters<p/>"
            changeBorderColor()                
        }else if(!checkpassword(password,sampleSpecial)){
            button.innerHTML = "<p>does not contain special chars<p/>"
            changeBorderColor()
        }else if(!checkpassword(password,sampleNumbers)){
            button.innerHTML = "<p>does not contain numbers<p/>"
            changeBorderColor()
        }else if(password.length < 8){
            button.innerHTML = "<p>add more chars<p/>"
            changeBorderColor()
        }else if (!checkpassword(password,sampleCapsChars)){
            button.innerHTML = "<p>does not contain capital letters<p/>"
            changeBorderColor()
        }else{
            button.innerHTML = "<p>incorrect<p/>"
            changeBorderColor()
        }
    }
    button.addEventListener('click', validatePassword)
}

/*{
    myBorder = document.getElementById("button").style.backgroundColor('red')
}*/