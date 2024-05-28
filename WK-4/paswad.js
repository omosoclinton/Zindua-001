/*
 ** password checker **
> Use an input element and a button
> Check if the input is 8 characters long
> Contain special characters
> Contain numbers
*/

// we have to get input from the form
//First check if pwd is 8 characters long

function getUserInput() {

    /* we get user password */
    const userInput = document.getElementById('password');
    let userStringPwd = userInput.value;
    let userArrayPwd = userStringPwd.split('')

    /* we check if password is 8 characters long*/
    if (userArrayPwd.length != 8) {
        alert('Input a 8-character pwd')
    /* Check for number*/ /* awe12 */
    }else if (userArrayPwd.length == 8){
        for (let i=0; i<userArrayPwd.length; i++){
            if (!isNaN(userArrayPwd[i])){
                /* We now check for special characters */
            }else {
                console.log("Password must contain number")
            }
        }
    }
}