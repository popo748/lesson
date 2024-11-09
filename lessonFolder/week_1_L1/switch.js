//we use switch (day) instead of switch (true) because we are checking the exact value of day//
let day = Number(prompt("Entera day(1-7): "));

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
    case 7:
        console.log("weekend");
        break;
    default:
        console.log("Invalid day");
        break;
}
//Tenary Operator//
//start with condition check ? then if true then print pass, if false then print  fail//
let mark = Number(prompt("Enter a number(1-100): "));
let message = mark >= 60 ? "pass" : "fail";
console.log(message);
