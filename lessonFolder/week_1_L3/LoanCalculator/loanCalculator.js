const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const loanAmount = document.getElementById("loanAmount").value;
    const interestRate = document.getElementById("interestRate").value;
    const years = document.getElementById("years").value;
    const months = document.getElementById("months").value;
    const payback = document.getElementById("payBack").value;

    let paymentAmountRef = document.getElementById("result");

    // Calculate annual Interest Rate: (Refer to periodic interest rate: 'i')
    let annualIR = Number(interestRate) / 12 / 100;

    // Calculate number of payment: (Refer to number of payment: 'n')
    let totalMonth = Number(months) + Number(years * 12);

    // Optional for display purpose:
    let statement = "";
    if (payback === "everyMonth") {
        statement = "Payment per month: ";
    }

    // Calculate the payment:
    if (totalMonth === 0) {
        paymentAmountRef.value = "Missing loan term value.";
    } else {
        paymentAmountRef.value =
            statement +
            "$" +
            (
                Number(loanAmount) *
                ((annualIR * (1 + annualIR) ** totalMonth) /
                    ((1 + annualIR) ** totalMonth - 1))
            ).toFixed(2);
    }
});
