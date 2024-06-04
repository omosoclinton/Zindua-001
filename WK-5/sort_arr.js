/* Write a JS script to sort the following array items */
{
    //let arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
    function getTarget (arr){
        for (let i = 0; i<arr.length; i++){
            for (let j = i+1; j < arr.length; j++){
                if(arr[i] > arr[j]){
                    let temp = arr[i]
                    arr[i] = arr[j]
                    arr[j] = temp
                }
            }
        }
        return arr
    }
    let arr = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
    console.log(getTarget(arr))

}
