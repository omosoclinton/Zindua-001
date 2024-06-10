/*
Create a `Student` class with the following properties:
- `name` (e.g., 'Jane Doe')
- `studentID` (e.g., 'A12345')
- `grades` (an array of numbers, e.g., [85, 92, 78])
Include methods: 
> `addGrade(grade)` to add a grade to the `grades` array, and 
> `getAverageGrade` to calculate and return the average of the grades.

const student1 = new Student('Jane Doe', 'A12345', [85, 92, 78]);
student1.addGrade(88);
console.log(student1.getAverageGrade());  // Output: 85.75
*/

{
    class Student{
        grades = [];
        constructor(name, studentID, grades){
            this.name = name;
            this.studentID = studentID;
            this.grades = grades;
        }
        addGrade(grade){
            return this.grades.push(grade)
        }
        getAverageGrade(){
            let total = 0;
            this.grades.forEach((element) => {
                total = total + element                
            });
            return total/this.grades.length
        }

        getStudentDetails(){
            console.log(`Student Name: ${this.name}, Student ID: ${this.studentID}, Average Marks: ${this.getAverageGrade()}`)
        }

    }
    let newStudent = new Student("Harry Kaane", "A00034", [89,90,90,87,90]);
    let newStudent2 = new Student("William", "A00023", [23,34,35])
    newStudent.getStudentDetails()
    newStudent2.getStudentDetails()
}