{
    let arr = [
        [56,78,90,34], 
        [5, " Dan",90, "Helix"], 
        ["Apple", "Nokia", 10]
    ]
    function flattenArray(arr) {
        let new_arr = []

        for (i=0; i < arr.length; i++) {
            for (j=0; j<arr[i].length; j++){
                new_arr.push(arr[i][j])
            }
        }
        return new_arr
    }
    console.log(flattenArray(arr))

}