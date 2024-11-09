//use let to declare variable//
//console.log to show output//
let width, length, area;
width = 10;
length = 2078;
area = width * length;
console.log(area);

//typeof to show datatype, for data validation//
let myNum = 10;
let myStr = "HelloWorld";
//true is boolean value not a word//
let flag = true;

console.log(typeof myNum);
console.log(typeof myStr);
console.log(typeof flag);

//Use uppercase letter to show constant variable//
//** is to use the power of/
const PI = 3.141592;
let radius = 10;
let areaOfCircle = PI * radius ** 2;
console.log(areaOfCircle);

//Comparison Operators//
let number1 = 3;
let number2 = 5;
console.log(number1 === number2);
console.log(number1 !== number2);
console.log(number1 > number2);
console.log(number1 <= number2);

//=== to check datatype and value, == to check value not consider data type//
let number3 = 3;
let number4 = "3";
console.log(number3 === number4);
console.log(number3 == number4);
//=== can be seen in js, not in python and java//
