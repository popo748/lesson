//1
/*
let arr = [3, 7, 2, 9, 1, 5];
function findMaX(arr) {
    return Math.max(...arr);
}
findMaX(arr);
console.log("The maximum element in the array is " + findMaX(arr));


let arr = [3, 7, 2, 9, 1, 5];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log(max);

/*
//2
let arr1 = [10, 25, 35, 40, 55];
function findAvg(arr1) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    return sum / arr1.length;
}
console.log(findAvg(arr1));

//3
let areaTrap = (a, b, h) => ((a + b) / 2) * h;
let calcResult = areaTrap(3, 5, 4);
console.log(calcResult);

/*
//4
class BankAccount {
    constructor(b) {
        this._balance = b;
    }

    deposit(d) {
        this._balance = this._balance + d;
        return this._balance;
    }
    withdraw(w) {
        this._balance = this._balance - w;
        return this._balance;
    }

    showBalance() {
        return this._balance;
    }
}
let acc = new BankAccount(100);

console.log(acc.showBalance());
console.log(acc.deposit(50));
console.log(acc.withdraw(30));
console.log(acc.showBalance());

/*
//5
class Calculator {
    constructor(n) {
        this._number = n;
    }

    add(a, b) {
        this._number = a + b;
        return this._number;
    }

    subtract(a, b) {
        this._number = a - b;
        return this._number;
    }

    multiply(a, b) {
        this._number = a * b;
        return this._number;
    }

    divide(a, b) {
        this._number = a / b;
        return this._number;
    }
}
let cal = new Calculator(0);

console.log(cal.add(100, 100));
console.log(cal.divide(20, 2));
console.log(cal.multiply(20, 2));
*/
//6
class Product {
    constructor(name, price) {
        this._productName = name;
        this._productPrice = price;
    }

    applyDiscount(d) {
        this._productPrice = this._productPrice * (1 - d);
        return this._productPrice;
    }
}
let laptop = new Product("laptop", 1000);
console.log(laptop.applyDiscount(0.3));
