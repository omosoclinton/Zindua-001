{
    /*
     create a class called car
     >color
     >model
     >mileage
     >weight
     >price
     */

     class Car {
        constructor(color, model, mileage, weight, price) {
            this.color = color;
            this.model = model;
            this.mileage = mileage;
            this.weight = weight;
            this.price = price;
        }
        introduceCar(){
            console.log(`This is ${this.model}. The price is ${this.price}`)
        }
     }

     Mazda = new Car("Red", "CX-5", "44,000kms", "700KG", "800,000 Ksh");
     Mercedes = new Car("Black", "E250", "67,000kms", "1T", "2.5M Ksh");

     Mazda.introduceCar()

     console.log(Mazda.color+ " - " +Mazda.model)
     console.log(Mercedes.color + " - " + Mercedes.model)
}