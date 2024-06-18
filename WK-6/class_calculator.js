{
    class Calculator{
        constructor(a,b){
            this.a = a;
            this.b = b
        }
        static getSum(a,b){
            return a+b
        }
        static getDifference(a,b){
            return a-b
        }
        static getProduct(a,b){
            return a*b
        }
        static getDivishen(a,b){
            return a/b
        }
    }
    console.log("The addition of 10 and 2 results to " +Calculator.getSum(10,2))
    console.log("The subtraction of 10 and 2 results to " + Calculator.getDifference(10,2))
    console.log("The multiplication of 10 and 2 results to " + Calculator.getProduct(10,2))
    console.log("The division of 10 and 2 results to " + Calculator.getDivishen(10,2))
}