{
    function calculator (a, b, summer, multipyer, divider, sub, displayer){
        sum = summer(a,b)
        product = multipyer(a,b)
        div = divider(a,b)
        diff = sub(a,b)

        displayer(sum, product, div, diff)
    }

    function getSum (x, y){
        return x + y
    }

    function getProduct(x, y) {
        return x * y
    }

    function getDivision(x, y){
        return x/y
    }
    function getDifference (x,y){
        return x-y
    }

    function displayResults(sum, product, div, diff){
        console.log("The sum is: "+ sum)
        console.log("The product is: " + product)
        console.log("The division is: " + div)
        console.log("The difference is: "+ diff)
    }

    //calculator (a, b, summer, multipyer, divider, sub, displayer)


    calculator(10, 5, getSum, getProduct, getDivision, getDifference, displayResults )
}