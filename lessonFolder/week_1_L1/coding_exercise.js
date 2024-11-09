//once let a variable already no need to put let anymore in front of the varibales//
let massKelvin, heighKelvin, massAlbert, heightAlbert, bmi;
massKelvin = 78;
heighKelvin = 1.69;
massAlbert = 92;
heightAlbert = 1.95;
//The first line no need and put let in line2,3,4,5//

bmiKelvin = massKelvin / (heighKelvin * heighKelvin);
bmiAlbert = massAlbert / (heightAlbert * heightAlbert);
//can use **2 for height//

console.log(bmiKelvin.toFixed(2));
console.log(bmiAlbert.toFixed(2));

//template literals is when we use the ` at the start and end of the line we want to print, why we use this
//is beacuse it can use ${variable_name} in the string and print the result out//
if (bmiKelvin > bmiAlbert) {
    console.log(
        `Kelvin BMI (${bmiKelvin.toFixed(
            2
        )}) is higher than Albert (${bmiAlbert.toFixed(2)})`
    );
} else {
    console.log(
        `Albert BMI (${bmiKelvin.toFixed(
            2
        )}) is higher than Albert (${bmiAlbert.toFixed(2)})`
    );
}
