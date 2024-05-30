{
    function sumAsync (num1, num2, callback) {
        result = num1 + num2
        setTimeout(() => {
            callback(result)
        }, 4000)
    }

    sumAsync(2,3, (result)=> {
        console.log(result)
    })
}