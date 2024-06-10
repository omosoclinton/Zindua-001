/*    {const originalPerson = {
        name: "solo",
        age:20,
        country:"kenya"
    }

    const profession = {
        field:"IT",
        subfield:"AI",
        salary:"200000"
    }

    let mergedPerson = {...originalPerson, ...profession}

    console.log(mergedPerson)
}
*/
{
    let country = {
        nameOfCountry:"India",
        population:"1.1 Billion",
        continent: "Asia",
        more: {
            climate:"Hot and wet",
            level:"Third-world"
        }
    }

    // Change name to canada, population to 50m, continent, North America,

    let newCountry = {...country, nameOfCountry:"Canada", language:"French", population:"50M", continent:"North America", more:{...country.more, climate:"Cold", level:"Developed"}}

    console.log(newCountry)

}