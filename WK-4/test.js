{
    let string1 = "ke2nya1";
    const string1_array = string1.split('')
    console.log(string1_array)
    console.log(isNaN('a'))

    for( let i=0; i<string1_array.length; i++) {
        if (!isNaN(string1_array[i])){
            /* for loop to look for special chars */
            console.log("Password has Number")
            break;
        }else{
            console.log("Password must contain number")
        }
    }
    for( let i=0; i<string1_array.length; i++) {

    }


    for (let i=0; i<userArrayPwd.length; i++){
        if (!isNaN(userArrayPwd[i])){
            break;
        }else if ()  {
            console.log("Password must contain number")
        }

}