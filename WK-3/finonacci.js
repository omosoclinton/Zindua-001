{
    /*Fibonacci series
    Fn=Fn-1 +Fn-2 , n>1
    
    */
   let fibArray = []

    function fibonacciSeq (n){
            if (n == 0) {
                return (0)
            } else if (n == 1) {
                return (1)
            } else {
                 return ((fibonacciSeq(n - 1) + fibonacciSeq(n - 2)))
            }
    }  
    n = 6
    for (let i= 0; i<n; i++) {
            fibArray.push(fibonacciSeq(i))
    }
    console.log(fibArray)
}