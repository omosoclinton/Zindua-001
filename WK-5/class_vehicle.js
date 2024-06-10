/*
Create a `Vehicle` class with the following properties:
- `make` (e.g., 'Toyota')
- `model` (e.g., 'Corolla')
- `year` (e.g., 2015)
Include a method `getDetails` that returns a string: "Make: Toyota, Model: Corolla, Year: 2015."
Then, create a `Car` class that inherits from `Vehicle` and adds a new property `fuelType` (e.g., 'Gasoline'). 
Override the `getDetails` method to include the fuel type.
*/

{
    class Vehicle {
        constructor(make, model, year) {
            this.make = make;
            this.model= model;
            this.year = year;
        }

        getDetails (){
            console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
        }
    }

    class Car extends Vehicle {
        constructor(make, model, year,fuelType){
            super(make, model, year);
            this.fuelType = fuelType
        }
        getDetails (){
            console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Fuel Type: ${this.fuelType}`);
        }
    }

    /*
    class CarMode extends Car {
        constructor(make, model, year,fuelType, carMode){
            super(make, model, year,fuelType);
            this.carMode = carMode;
        }
    }
    */

    let Mazda = new Car("Mazda", "CX-5", "2017", "Petrol")
    Mazda.getDetails()
}