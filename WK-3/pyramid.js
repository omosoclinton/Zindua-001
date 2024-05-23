function drawPyramid(height){
    for (let i = 1; i <= height; i++) {
        let row = ""
        for (let j = 0; j < height-i; j++) {
            row += " ";
        }
        for (let k = 1; k <= i; k++) {
            row += k + " ";
        } 
        console.log(row)
        
    }
}
    

drawPyramid(10)