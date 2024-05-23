/*
A prime number has only 1 and itself as the multiples

*/

{
    function getPrimeNumber(n){
        if (n <= 1){
            return false;
        }else if (n == 2 || n == 3 || n == 5) {
            return true
        }else if (n%2 == 0 || n % 3 == 0 || n %5 == 0 ){
            return false;
        }else{
            return true;
        }
            
    }
    console.log(getPrimeNumber(17))
    
}