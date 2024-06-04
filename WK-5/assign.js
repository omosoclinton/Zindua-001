/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/
{
    function getTarget (arr, target){
        for (let i = 0; i<arr.length; i++){
            console.log(i + 'innerloop')
            for (let j = i+1; j < arr.length; j++){
                console.log(j)
                if(arr[i] + arr[j] == target){
                   return [i, j]
                }
            }
        }
    }
    arr = [5,2,7,11,5,15];
    target = 22
    console.log(getTarget(arr,target ))
}

/*
{
    let arr = [5,3,2,7,11,5,15];
    function twoSum(arr, target) {
        for (let i = 0; i<arr.length; i++) {
            complement = target - arr[i]
            if (arr.includes(complement) && arr.indexOf(complement != i)) {
                return [i, arr.indexOf(complement)]
            }
        }
    }
    console.log(twoSum(arr, 10))
}
*/