//class name will always start with uppercase letter
//constructor to initiliza private attributes
//public attributes are accessible outsida the class
//private attributes are accesible within the class
//class is to create object, inside object it has data and behaviour
class Rectangle {
    constructor(h, w) {
        this._height = h;
        this._width = w;
    }
    // get the height value outside the class
    get height() {
        return this._height;
    }
    // use to update the private attributes outside the class
    set height(h) {
        if (!isNaN(h) && h > 0) {
            this._height = h;
        } else {
            this._height = 1;
        }
    }

    // get the width value outside the class
    get width() {
        return this._width;
    }
    // use to update the private attributes outside the class
    set width(w) {
        if (!isNaN(w) && w > 0) {
            this._width = w;
        } else {
            this._width = 1;
        }
    }

    calcArea() {
        return this._height * this._width;
    }

    toString() {
        let output = "Height: " + this._height + "\nWidth: " + this._width;
        return output;
    }
}
//instantiate class to create object, constructor will auto trigger
let rectangle1 = new Rectangle(10, 20);
let rectangle2 = new Rectangle(15, 30);

console.log(rectangle1.calcArea());
console.log(rectangle2.calcArea());

//will use getter setter based on the context of the code, when there is = then there will be setter method or else wil be getter
console.log("The height of rectangle 1: " + rectangle1.height);
console.log("The height of rectangle 2: " + rectangle2.height);

rectangle1.height = 5;
rectangle2.height = 10;
console.log("The new height of rectangle 1: " + rectangle1.height);
console.log("The new height of rectangle 2: " + rectangle2.height);

//will go to the set method if else to filter out the -3 and abc
rectangle2.height = -3;
console.log("The new height of rectangle 2: " + rectangle2.height);

rectangle2.height = "abc";
console.log("The new height of rectangle 2: " + rectangle2.height);

//will use get set based on the context of the code, when there is = then there will be set method or else wil be get
console.log("The width of rectangle 1: " + rectangle1.width);
console.log("The width of rectangle 2: " + rectangle2.width);

//Since there is toString it will follow the things you type in toString if you console.log the object
console.log("Rectangle 1 details: " + rectangle1);
console.log("Rectangle 2 details: " + rectangle2);
