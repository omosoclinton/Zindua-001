{
    // const myInput = document.getElementById('numb');
    // let user_value = myInput.value;

    function validateInput() {
        const myInput = document.getElementById('numb');
        let user_value = myInput.value;
        
        if(isNaN(user_value)){
            alert("wrong input")
        }else {
            alert("correct")
        }
    }
}