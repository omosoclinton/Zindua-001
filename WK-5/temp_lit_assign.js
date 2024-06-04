{
    /* 
    if groceryArray = ['Veg1', 'Veg2]

    output should be - {'veg1':'$2', 'veg2':'$3'}

    return { ${groceryArray[i]}: ${quantity[i]}}
    
    */
    let groceryArray = ['Cabbage', 'Lettuce', 'Coriander', 'Capsicum']
    let i = 0

    let groceryQuantity = groceryArray.map((name) => {i++; return `${name} : ${i} `})

    console.log(groceryQuantity)
}