{
    const sample_array = [[67,89,90], [67,69,98], [78,56,78]]

    function getSumOfElements(arr) {
        array_sum = []
        arr.forEach((innerArr) => {
            let sum = 0
            innerArr.forEach((value) => {
                sum += value
            })
            array_sum.push(sum)
        })
        return array_sum

    }
    console.log(getSumOfElements(sample_array))
}