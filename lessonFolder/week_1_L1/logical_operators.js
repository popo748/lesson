//&& AND both must be true, || OR one must be true//
let num = 3;
if (num > 0 && num < 10) {
    console.log("Number is above 0 but below 10");
} else {
    console.log("Number is not in range");
}
if (num === 3 || num == 7) {
    console.log("number is either 3 or 7");
} else {
    console.log("Number doenst match with any value");
}
