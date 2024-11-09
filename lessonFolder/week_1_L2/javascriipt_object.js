let student = {
    firstName: "Susan",
    lastName: "Lee",
    age: 19,
};
//if using[] then need enclosed it with"", for example if it is last Name instead of lastName
console.log(student.firstName);
console.log(student["lastName"]);

student.age = 20;
console.log(student.age);
