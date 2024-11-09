//Rest Destructuring Array
let numbers = [4, 5, 6, 7, 8];

let [first, second, ...rest] = numbers;

console.log(first);
console.log(second);
console.log(rest);

//Spread concatenate Array, both spread and rest also need...
let arr1 = [1, 2];
let arr2 = [3, 4];
let combinedArr = [...arr1, ...arr2];
console.log(combinedArr);

//another example for spread to merge object properties, "" or '' also can for string name
let person = {
    name: "Alice",
    age: 30,
};

let newPerson = {
    ...person,
    city: "Kuala Lumpur",
    occupation: "Web Developer",
};

console.log(newPerson);
