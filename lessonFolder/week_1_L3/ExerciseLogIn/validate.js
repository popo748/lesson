//it has to match with the id we create in HLML
//DOM document object model
//form = document.querySelector("form"), it will select the HTML from section and assign it to form variable, then it can be used after that
//email = document.getElementById("email"), it will refer HTML and assign the uniqie id like the example now email to a variable
let email = document.getElementById("email");
let password = document.getElementById("password");
let form = document.querySelector("form");

//whenclick sumbit then will happenthe event
form.addEventListener("submit", (e) => {
    const errors = [];

    // get the email value and trim to remove the white space, push error message to error array
    if (email.value.trim() === "") {
        errors.push("Username required");
    }

    if (password.value.length < 4) {
        errors.push("Password must be atleast 4 characters");
    }

    //the length of error array should be zero, e is event object, it will prevent the submission event
    //.join concatenate the atring in array in a single string
    if (errors.length > 0) {
        e.preventDefault();
        alert(errors.join("\n"));
    }
});
