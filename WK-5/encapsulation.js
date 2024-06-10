{
    class Employee {
        name;
        #salary;
        #phoneHumber
        department;

        constructor(name, salary, department, phoneNumber) {
            this.name = name;
            this.#salary = salary;
            this.#phoneHumber = phoneNumber
            this.department = department;
        }

        getSalary(){
            return this.#salary
        }
        getPhoneNumber (){
            return this.#phoneHumber
        }

        #displayFullDetails (){
            console.log(`Name: ${this.name}`)
        }
        getDisplay(){
            this.#displayFullDetails()
        }
    }



    let employeeOne = new Employee("Hohn", "67,000", "Finance")
    let employeeTwo = new Employee("Hellen", "77,000", "HR", "0700678000")
    console.log(employeeTwo.getSalary())
    console.log(employeeTwo.getPhoneNumber())

    employeeOne.getDisplay()
}
