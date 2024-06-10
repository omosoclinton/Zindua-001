
const person = {
    name: 'Stephen',
    age: '99+',
    profession: 'Centurion',
    birthPlace: {
        continent:'Mama Africa',
        country: 'Kenya',
        location:'Mombasa',
        language:'Swahili',
        skills:'Bow and Arrow'
    }
}
 let newPerson = {
    ...person, 
    name:'Alexander The Great', 
    age:'150+',
    birthPlace: {
        ...person.birthPlace, 
        continent:'Europe', 
        country:'Italy', 
        location:'Roma',
        language:'Italian', 
        skills:{
            ...person.birthPlace,
            skills:{
                officialSkills:'Politics and Showmanship', 
                unOfficialSkills:'Partying like there is no tomorrow'
            },
            bestAt:'Demonstrating Leadership'
        }
    }, 
    bestKnownFor:'Conquering a third of the world'
}
 console.log(person)
 console.log(newPerson)