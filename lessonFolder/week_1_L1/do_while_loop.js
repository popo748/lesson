// want to make sure it atleast run one time without any condition//
// diff from while loop where let number = 0; since the do part will declare number to it only proceed to while loop//
let number;
let total = 0;

do {
    number = Math.floor(Math.random() * 10 + 1);
    console.log(number);
    total += number;
} while (number < 8);

console.log("The sum od number is " + total);
