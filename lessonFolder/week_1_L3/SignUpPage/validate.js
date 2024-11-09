let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let cPassword = document.getElementById("cPassword");
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    const errors = [];

    if (firstName.value.trim() === "") {
        errors.push("First name required");
    }

    if (lastName.value.trim() === "") {
        errors.push("Last name required");
    }

    if (email.value.trim() === "") {
        errors.push("Email required");
    }

    if (password.value.length < 4) {
        errors.push("Password must be atleast 4 characters");
    }

    if (cPassword.value.length < 4) {
        errors.push("Confirm Password must be atleast 4 characters");
    }

    if (errors.length > 0) {
        e.preventDefault();
        alert(errors.join("\n"));
    }
});
