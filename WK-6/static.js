{
    class Student{
        #age;
        constructor(name, age, average){
            this.name = name;
            this.#age = age;
            this.average = average
        }
        getGrade(){
            if(this.average > 50){
                return 'Pass'
            }else{
                return 'fail'
            }
        }

        get getStudentAge(){
            return this.#age
        }

        get getName(){
            return this.name
        }
        get getAge(){
            return this.#age
        }

        set setAge(newAge){
            this.#age = newAge
        }
        set setName(newName){
            this.name = newName
        }
        static getSchoolDetails (){
            console.log("This is Mihango Pri School")
        }
    }
    Student.getSchoolDetails()
    let newStudent = new Student("Noah", 20, 45)
    newStudent.setAge = 45
    newStudent.setName = "John"
    console.log(newStudent.getAge, newStudent.getName)

}