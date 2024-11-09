//use it when the number of repeatation is known//
let myArray = [4, 5, 6, 10, 12];
let total = 0;
//no need bracket for myArray.length since it is not a function but a property//
for (let i = 0; i < myArray.length; i++) {
    total += myArray[i];
}

console.log(total);
