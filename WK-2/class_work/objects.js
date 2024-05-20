// {
//     console.log("Objects")

//     const car1 = {
//         type: "Nissan",
//         color: "Red",
//         model: "Y700"
//     }
//     const car2 = {
//         type: "Toyota",
//         color: "white",
//         model: "NX700"
//     }
//     console.log(car1.type)
// }

{
    const person1 = {
        firstName: "Barack",
        lastName: "Obama",
        height: "6ft",
        yob: 1961,
        fullName: function() {
            return this.firstName + " " + this.lastName
        },
        age: function(currentYear){
            return (currentYear-this.yob)
        }
    }
    const person2 = {
        firstName: "Donald",
        lastName: "Trump",
        height: "6 ft",
        yob: 1946,
        fullName: function() {
            return this.firstName + " " + this.lastName

        },
        age: function(currentYear){
            return (currentYear-this.yob)
        }
    }
    console.log(person1.fullName())
    console.log(person1.age(2024))
    console.log(person2.fullName())
    console.log(person2.age(2024))
    
}