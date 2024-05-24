{
    // const myInput = document.getElementById('numb');
    // let user_value = myInput.value;

    // n is 1 or greater than 1
    // n is 10 or lesser

    function validateInput() {
        const myInput = document.getElementById('numb');
        let user_value = myInput.value;

        if(isNaN(user_value)){
            alert("Not a number")
        }else if (user_value < 0  || user_value > 10) {
            alert("Enter a number between 1 and 10")
        }else{
            alert("Correct")
        }
    }
    function changeToUpperCase(){
        let myInput = document.getElementById('numb')
        myInput.value = myInput.value.toUpperCase()
    }
}