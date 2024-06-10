/*{
    let arr = [1,3,5,6];
    let target = 5;

    function getInsertPosition(arr, target){
        // something
        for (let i = 0; i<arr.length; i++) {
            if (arr[i] == target){
                return i
            }
            if (arr[i] > target) {
                return i
            }else if (i == arr.length -1) {
                return i+1
            }
        }

    }    

    console.log(getInsertPosition(arr, target))
}
*/
{
    const numbers =[1,3,5,6, 12]
    let target=13
    function getindex(numbers,target){
        let index=numbers.indexOf(target)
        if(numbers.includes(target)){
            return index
        }
        else{
           let newarray=[...numbers,target]
           newarray.sort((a, b) => a - b);
           return newarray.indexOf(target)
    }
}
console.log(getindex(numbers,target));
}

{
    
}