//no function name, function can be treat as value assign to a variable, treat variable name as function name.
//from my understanfng is turning a variable to a function
let addition = function (num1, num2) {
    return num1 + num2;
};
let word = function () {
    return "Goof Afternoon";
};
let greet = word();
console.log("The addition result is " + addition(8, 9));
console.log("Heyyy " + greet);
