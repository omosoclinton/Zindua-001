/*
Write a program to remove duplicates from the following array.
Console the array without duplicates, and console another array that only contains the duplicates
var arr = ["apple", "mango", "apple",
            "orange", "mango", "mango"];
*/

{
    let arr = ["apple", "mango", "apple", "orange", "mango", "mango"]

    function removeDuplicate (thisArr) {
        let newArr = []

        thisArr.forEach((element) => {
            if(!newArr.includes(element)) {
                newArr.push(element)
            }
        });
        return newArr
    }
    console.log(removeDuplicate(arr))

}
