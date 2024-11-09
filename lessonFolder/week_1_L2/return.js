//return the value back to the function and after that it will terminate the function and any changes will not work,
//it will return the the value where the fucntion is being called
//return value to store in the function, and you want that function to produce the according result when it is being used
function addition(num1, num2) {
    let result = num1 + num2;
    return result;
}

let additionResult = addition(5, 9);
console.log("The addition result is " + additionResult);
//{} enclosed function bodies, {} also for declared object, {} also for block of code
