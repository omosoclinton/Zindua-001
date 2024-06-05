{
    cars = [
        {color:'blue', model:'Audi', make:'Q4', cc:2000},
        {color:'red', model:'Toyota', make:'Probox', cc:1500},
        {color:'white', model:'BMW', make:'X7', cc:2500},
        {color:'black', model:'Mercedes', make:'E250', cc:2300}
    ]

    cars.forEach(({color, model, make,cc }) => {
        console.log(`This is a ${color} ${model} ${make} with ${cc}cc `)
    });
}

// John ${name} is ${age} his