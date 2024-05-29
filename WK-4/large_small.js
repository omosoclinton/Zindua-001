{ /*
    
    //find the largest number 
    //Find the smallest number 

    let arr = [56, 78, 12, 45, 67, 80]

    function getDifference(arr){
        let currentLargest = arr[0]
        let currentSmallest = arr[0]


        for (let i=0; i< arr.length; i++){
            if (arr[i] > currentLargest) {
                currentLargest = arr[i]
            }
            if (arr[i] < currentSmallest) {
                currentSmallest = arr[i]
            }
        }

        return currentLargest - currentSmallest


    }
    n = getDifference(arr)
    console.log(n)

*/} 



{
    let arr = [56, 78, 12, 45, 67, 80]
    let arr2 = []

    function getMaxValue(arr) {
        let currentLargest;
        currentLargest = arr[0]
        for (let i=0; i< arr.length; i++){
            if (arr[i] > currentLargest) {
                currentLargest = arr[i]
            }
        }
        return currentLargest

    }
    function getMinValue(arr) {
        let currentSmallest = arr[0]
        for (let i=0; i< arr.length; i++){
            if (arr[i] < currentSmallest) {
                currentSmallest = arr[i]
            }
        }
        return currentSmallest
    }

    function getDifference(arr) {

        if (arr.length == 0){
            console.log("empty array")
            return false
        }
            max = getMaxValue(arr)
            min = getMinValue(arr)
            return max - min
    }

    console.log(getDifference(arr))
} 