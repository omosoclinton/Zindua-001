/*{
    function doSomething (x, y, z, displayer) {
        sum = x + y + z
        displayer(sum)
    }

    function myDisplayer(whatToDisplay) {
        console.log(whatToDisplay)
    }
    function fancyDisplayer(whatToDisplay) {
        console.log("The Sum is:" + whatToDisplay)
    }
    doSomething(1,2,3, myDisplayer )
    doSomething(10,20,30, fancyDisplayer)
}
*/

{
    /*
    array of students
    each student has 5 subjects
    total, average, display of resukts

    */

    students = [
        {
            name: "John",
            marks: [45,67,45,89,80]
        },
        {
            name: "Mark",
            marks: [75,87,95,59,60]
        },
        {
            name: "John",
            marks: [85,97,75,69,50]
        }

    ]

    function getSum(arr){
        sum = 0
        for(let i = 0; i<arr.length; i++){
            sum+=arr[i]
        }
        return sum
    }
    function getAverage(arr, mySummer){
        total = mySummer(arr)
        return total/arr.length
    }

    function getStudentsResults(student_array, myAverager){
        for(let k=0; k<student_array.length; k++){
            console.log(student_array[k].name, myAverager(student_array[k].marks, getSum))
        }

    }

    console.log(getStudentsResults(students, getAverage))
}