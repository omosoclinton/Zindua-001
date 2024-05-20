{
    // a function that for div3 prints fizz
    // for div 3 and 6 prints fizzBuzz
    // for div 6 buzz
    /*
    0
    1
    2
    fizz
    4
    5
    fizzBuzz
    7
    8
    fizz
    10
    11
    fizzBuzz
    */

    function fizzBuzz (n) {
        for (i = 0; i <= n; i++) {
            if ((i%3 == 0) && (i%6 == 0)) {
                console.log("fizzBuzz")
            }else if(i%3 == 0) {
                console.log("fizz")
            }else if(i%6 == 0) {
                console.log("Buzz")
            }else{
                console.log(i)
            }
        }
       
    }
    fizzBuzz(16)
}