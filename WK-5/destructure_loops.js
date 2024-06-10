/*{
    students = [
        {
            nameOfStudent:"Aggiee",
            age:"18",
            school:"Loreto"
        },
        {
            nameOfStudent:"John",
            age:"19",
            school:"Mangu"
        },
        {
            nameOfStudent:"Chris",
            age:"16",
            school:"Jamhuri"
        },
        {
            nameOfStudent:"Kama",
            age:"17",
            school:"Kiandutu"
        },
    ]

    for ({nameOfStudent, age, school} of students){
        console.log(`My name is ${nameOfStudent}. I am ${age} old. I went to ${school}`)
    }
}
*/
{
    countries = [
        {
            nameOfCountry:"Kenya",
            population:"50 Million",
            continent: "Africa",
            language:"Swahili"
        },
        {
            nameOfCountry:"Mexico",
            population:"80 Million",
            continent: "North America",
            language:"Spanish"
        },
        {
            nameOfCountry:"New Zealand",
            population:"10 Million",
            continent: "Oceania",
            language:"Maori"
        },
        {
            nameOfCountry:"Brazil",
            population:"200 Million",
            continent: "South Africa",
            language:"Portuguese"
        },
        {
            nameOfCountry:"France",
            population:"78 Million",
            continent: "Yurup",
            language:"French"
        },
        {
            nameOfCountry:"India",
            population:"1.1 Billion",
            continent: "Asia",
            language:"Hindi"
        }
    ]

    let i = 0


    for ({nameOfCountry, population, continent, language} of countries){
        i++
        console.log(
            `
            ${i}. ${nameOfCountry} is located in ${continent}, with a population of ${population}, and most people speaking ${language}
            `
        )
    }
}