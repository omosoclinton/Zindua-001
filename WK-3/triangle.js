function drawPyramid(height){
    for (let i = 1; i <= height; i++) {
        let row = ""
        for (let j = 1; j <= i; j++)
            row += j;
        console.log(row)
    }
}
    

drawPyramid(10)