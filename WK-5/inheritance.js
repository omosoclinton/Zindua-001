{
    class Animal {
        constructor (type, modeOfMovement){
            this.type = type;
            this.modeOfMovement = modeOfMovement
        }

        produceSound (){
            console.log("Animal makes sound")
        }
    }

    class Dog extends Animal {
        constructor(type, modeOfMovement, breed){
            super(type, modeOfMovement);
            this.breed = breed;
        }
        // overridding
        produceSound(){
            console.log("Barking")
        }

        showDog(){
            console.log(`I am a ${this.breed} dog. I am a ${this.color} that ${this.modeOfMovement}`)
        }
    
    }
    class Husky extends Dog {
        constructor(type, modeOfMovement, breed, color){
            super(type, modeOfMovement, breed);
            this.color = color
        }

        showDog(age){
            console.log(`I am Husky. I am ${this.color}. I am ${age} years`)
        }
    }

    newHusky = new Husky("mammal","walking", "husky", "white")
    newHusky.showDog(7)
    class Cat extends Animal {
        constructor(type, modeOfMovement, breed, furColor){
            super(type, modeOfMovement);
            this.breed = breed;
            this.furColor = furColor
        }
        // overridding
        produceSound(){
            console.log("Meow")
        }
        showCat(){
            console.log(`This is ${this.breed} cat that moves by ${this.modeOfMovement}, with ${this.furColor} fur`)
        }
    }

    let newCat = new Cat("Mammal", "Walking", "Persian", "Black")
    let newCat1 = new Cat("Mammal", "Walking", "Siamese", "White")
    newCat.showCat()
    newCat1.showCat()


}