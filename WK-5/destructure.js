{
    let person = {
        'fname': "Kenny",
        'lname':"Noice",
        'adress': "567-001",
        'age':24,
        'school': {
            'schoolname':"Yuoen",
            'location':"Nairobi",
            'level':"Degree"
        }

    };
    //let {fname,lname, address, age, school, fullname=`${fname} ${lname}`} = person
    //console.log(fullname)
    // console.log(person)

    function getDetails({fname, age, school: {schoolname, location, level}}){
        console.log(`My name is ${fname}, my age is ${age}, and my schhol is ${schoolname}`)
    }

    getDetails(person)
}