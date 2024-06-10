{
    const student = {
        name:"Dan",
        age: 23,
        major:"Computer Science",
        gpa:"3.8",
        homeDetails: {
            homecounty:"Kisumu",
            mother:"Joan",
            father:"Dedan",
            siblings:3
        },
        school: {
        nameOfSchool:"Mangu",
        numberOfStudents:1500,
        county:"Kiambu",
        level:"National",
        performance:{
            average:10.2,
            "A":4,
            "B":78,
            "C":120,
            "D":80
        }
    }
    }
    // let {name:studentName, age:studetAge, major:studentMajor} = student
    // console.log("This is " + studentName, studetAge, studentMajor)

    function introduce({name, age, major,homeDetails:{homecounty}, school:{nameOfSchool, county, performance:{average}}}) {
        console.log(
            `
            My name is ${name}. And I am ${age} years old.
            My home county is ${homecounty} 
            I am a ${major} major. 
            I went to ${nameOfSchool}, which is in ${county} County.
            During my year we had an average MS of ${average}.
            `
        )
    }
    introduce(student)
}





/*
{

    const school = {
        nameOfSchool:"Mangu",
        numberOfStudents:1500,
        county:"Kiambu",
        level:"National",
        performance:{
            average:10.2,
            "A":4,
            "B":78,
            "C":120,
            "D":80
        }
    }

    let {nameOfSchool, numberOfStudents, county, level, performance:{ average, A, B,C,D}} = school

    console.log (nameOfSchool, average, A)
    
}

*/