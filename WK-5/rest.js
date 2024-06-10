{
    const person = {
        name:"Hermez",
        age:67,
        location:"Spain",
        status:"married"
    }

    const {age, ...rest} = person;
    console.log(age, rest)
    


}


{
    let student = {
        name:"farida",
        course:"Math/Biz",
        maths:89,
        swa:90,
        eng:90,
        ss:89,
        sci:89

    }

    let {name, course, ...perfomance} = student
    

    let studentUpdate = {name, course, perfomance}
    console.log(studentUpdate)
}