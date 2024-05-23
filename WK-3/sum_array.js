{
    let sample_array = [[67,89,90], [67,69,98], [78,56,78]]

    function getSumOfElements(sample_array) {
        let sum = []
        for (let i = 0; i < sample_array.length; i++) {
            let array_sum = 0;
            for (j = 0; j < sample_array[i].length; j++) {
                array_sum += sample_array[i][j]
            }
            sum.push(array_sum)
        }
        console.log(sum)
    }
    getSumOfElements(sample_array)
}