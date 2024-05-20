{
    arrayOfStudents = 
[
{name: "Stephen", 
marks: [45, 78, 90, 32, 67]}, 
{name: "Maryanne", 
marks: [89, 78, 10, 67, 47]}, 
{name: "Kelvin", 
marks: [55, 88, 94, 52, 37]}, 
{name: "Claire", 
marks: [44, 68, 88, 62, 77]}
]
/*
1. get access into array -
Use a for loop 
2.get access of object using dot operator
3. Get average of marks section
*/
    function getAverage(array) {
        let student_results = [];
        for (i = 0; i < array.length; i++) {
            let sum = 0, ave;
            for (k = 0; k < array[i].marks.length; k++) {
                sum += array[i].marks[k]
            }
            ave = sum / array[i].marks.length
            let student_obj = {}
            student_obj[array[i].name] = ave
            student_results.push(student_obj )
        }
        console.log(student_results)
    
    }
    getAverage(arrayOfStudents)
}