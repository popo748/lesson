//2
let str = "Welcome to AI Academy";
let count = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === "e") {
        count++;
    }
}

console.log(count);

//3
let diameter = 15;
let radius = diameter / 2;
let areaOfCircle = Math.PI * radius ** 2;
let roundedArea = Math.round(areaOfCircle * 100) / 100;

console.log(`Given the diameter ${diameter} the area is ${roundedArea}`);

//4
let firstNumber = Number(prompt("Enter first number: "));
let secondNumber = Number(prompt("Enter second number"));
let result =
    firstNumber == secondNumber ? "Similar number" : "Different Number";
console.log(result);

//5
let discount;
let netPrice;
let price = Number(prompt("Enter the price: "));
if (price >= 200) {
    discount = (price * 0.15).toFixed(2);
} else if (price >= 100 && price < 200) {
    discount = (price * 0.05).toFixed(2);
} else {
    discount = 0;
}
netPrice = price - discount;

console.log(`The price ${price}
The discount ${discount}
The netPrice ${netPrice}`);

//6
//We use switch (true) instead of switch(mark) because we are checking a range of values
let mark = Number(prompt("Enter mark: "));
let grade;

switch (true) {
    case mark >= 90 && mark <= 100:
        grade = "A";
        console.log(grade);
        break;
    case mark >= 80 && mark <= 89:
        grade = "B";
        console.log(grade);
        break;
    case mark >= 70 && mark <= 79:
        grade = "C";
        console.log(grade);
        break;
    case mark >= 60 && mark <= 69:
        grade = "D";
        console.log(grade);
        break;
    case mark >= 0 && mark <= 59:
        grade = "F";
        console.log(grade);
        break;
    default:
        grade = "Invalid Score";
        console.log(grade);
}
