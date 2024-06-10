{
    /*
    Task:  Create a `Rectangle` class with the following properties:
    - `width` (e.g., 5)
    - `height` (e.g., 10)
    Include methods `getArea` and `getPerimeter` that return the area and perimeter of the rectangle, respectively.
    */

    class Rectangle {
        constructor(width, height) {
            this.width = width;
            this.height = height
        }

        getArea(){
            return this.width * this.height
        }
        getPerimeter(){
            return 2*this.width + 2*this.height
        }

        showRectProperties (){
            console.log(`The area is ${this.getArea()}. And the perimeter is ${this.getPerimeter()}`)
        }

    }

    rect1 = new Rectangle(6,10)
    rect1.showRectProperties()
}