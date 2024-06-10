{
    /*
    class - a blueprint/template
    objects - instances of a class, occurences
    inheritance - 

    */

    class Person {
        constructor (name, age) {
            this.name = name;
            this.age = age;
        }
    introduce(ageToAdd){
            console.log(`
            Hello my name is ${this.name} and I will be ${this.age  +ageToAdd} years in five years time.
            My Salary will be ${this.calculateSalary()}
            `)
        }
        calculateSalary (){
            if (this.age>40){
                return 50000
            }else if (this.age < 40) {
                return 40000
            }else{
                return 10000
            }
        }
    }

    let person1 = new Person("John", 69);
    let person2 = new Person("Jane", 29);

    person1.introduce(5)
    person2.introduce(5)


    console.log(person1.calculateSalary())
    console.log(person2.calculateSalary())
}
