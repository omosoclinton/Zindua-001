/*
Write a program to remove duplicates from the following array.
Console the array without duplicates, and console another array that only contains the duplicates
var arr = ["apple", "mango", "apple",
            "orange", "mango", "mango"];
*/

{
    let arr = ["apple", "mango", "apple", "orange", "mango", "mango"]
    let arr1 = []
    let arr2 = []


    for (let i=0; i<arr.length; i++) {
        if (arr[i] == arr[i+1]){
            arr2.push(arr[i])
            i++
        }else{
            arr1[i] = arr[i]
        }
    }

    console.log(arr1)
    console.log(arr2)

}
