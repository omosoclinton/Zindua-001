{
    // Name: Dan, age: 14, averageMarks: 61
    students = [
        {
            name: "Dan",
            age: 14, 
            marks: {
                maths:50, 
                english: 70,
                sci: 77,
                ss: 50
            }
        },
        {
            name: "Jane", 
            age: 13, 
            marks: {
                maths: 54, 
                english: 75, 
                sci: 57, 
                ss: 60
            }
        }
   ]
   function getAverage(arr) {
    arr.forEach(({name, age, marks:{maths, english, sci, ss}}) => {
        average = (maths + english + sci +ss)/4
        console.log(`Name ${name}, age: ${age}, averageMarks: ${average}`)
        
    });
   }
   getAverage(students)

}