//arrow=anonymous we can assign a variable, function
//the diff btween anonymous and arrow is that without the word function
//greet() to call the function
//arrow function for return single value
let greet = () => "Good Morning";
let message = greet();
console.log(message);

let addition = (num1, num2) => num1 + num2;
let calcResult = addition(5, 6);
console.log(calcResult);

//tenary operator
//() is put so that it becomes a function for checkEven even thought didnt put () directly next to it
let num = 12;
let checkEven =
    num % 2 === 0 ? () => console.log("Even") : () => console.log("Odd");

checkEven();
// no need console.log the checkEven since has the print output already in tenary operator
