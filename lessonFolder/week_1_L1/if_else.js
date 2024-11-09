// if esle is use to control the flow of the program//
//typecasting Number(prompt("Enter a number: ")) or else the prompt will think the data is string//
let number1, number2;
number1 = Number(prompt("Enter a number: "));
number2 = Number(prompt("Enter a second number: "));

if (number1 > number2) {
    console.log(number1 + " is bigger than " + number2);
} else if (number1 === number2) {
    console.log(number2 + " is equal to " + number1);
} else {
    console.log(number2 + " is bigger than " + number1);
}
