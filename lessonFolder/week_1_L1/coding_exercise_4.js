//let bill = Number(prompt("Enter bills: "));
//if (bill > 50 && bill < 300) {
//    console.log(`The tips is (${bill * 0.15})`);
//} else {
//console.log(`The tips is (${bill * 0.2})`);
//}

//no need to put let when there is the same variablename with diff value//
//This is tenary operator
//Condition ? true output: false output//
let bill = 275;
let tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
    `The bill is ${bill}, the tip is ${tip}, and the total vaue is ${
        bill + tip
    }`
);

bill = 40;
tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
    `The bill is ${bill}, the tip is ${tip}, and the total vaue is ${
        bill + tip
    }`
);

bill = 430;
tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
    `The bill is ${bill}, the tip is ${tip}, and the total vaue is ${
        bill + tip
    }`
);
