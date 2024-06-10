{
    exampleArray = [8, "Peter", 7, "Allan"]
    cloneArray = [...exampleArray]

    console.log(cloneArray)
}

{
    const originalPerson = {
        name:"Solo",
        age:30,
        country:"Kenya",
        profession: {
            field:"IT",
            subField:"Machine Learning",
            salary:"200000"
        }
    }

    let newPerson = {...originalPerson, name:"Kama", gender:"M", county:"Kiambu", profession:{...originalPerson.profession, field:"CS" }}

    console.log(newPerson)

}