let number = 0;
let total = 0;
//Math.floor is to cut out the decimal point//
//use when you want to repeat the process until it meet a certain condition and stopped//
//while loop will repeates until it meets the requirement only will proceed next step//
while (number < 8) {
    number = Math.floor(Math.random() * 10 + 1);
    console.log(number);
    total += number;
}

console.log("The sum of number is " + total);
