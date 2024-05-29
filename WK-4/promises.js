/*
promise
Pending -  waiting for promise to be fulfilled
Resolved - order is complete
Reject - customer did not complete order


let myPromise = new Promise(function (myResolve, myReject)
{
    // do stuff
    myResolve()
    myReject()
})

myPromise.then(
    function(value){//runs if success},
    function(error){// runs if success}
)

*/

let myPromise = new Promise(function(myResolver, myReject) {
    let x = 1;

    if(x == 0) {
        myResolver("OK")
    }else{
        myReject("Error")
    }
})

myPromise.then(
    function(value){console.log(value)},
    function(error){console.log(error)}
)

{
myPromise.then(/* the promise */).then(/* executes first*/)
}