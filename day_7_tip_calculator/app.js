const billAmountInput = document.querySelector("#bill-amount");
const guestsInput = document.querySelector("#number-of-people");
const tipPercentInputs = [...document.querySelectorAll("input[type='radio']")];

const totalEl = document.querySelector("#total-per-person");
const tipAmountEl = document.querySelector("#tip-amount");
const calculateBtn = document.querySelector("#calculate");

const calculateTotalPerPerson = (bill, guests, tip) => {
    return (bill + tip) / guests;
};

const calculateTip = (bill, tip) => {
    return bill * tip;
};

calculateBtn.addEventListener("click", () => {
    const decimalPercentage =
        +tipPercentInputs.find((val) => val.checked).value.slice(0, -1) / 100;
    const numberOfGuests = +guestsInput.value;
    const billAmount = +billAmountInput.value;
    const tipAmount = calculateTip(billAmount, decimalPercentage);
    const total = calculateTotalPerPerson(
        billAmount,
        numberOfGuests,
        tipAmount
    );
    tipAmountEl.textContent = tipAmount.toFixed(2);
    totalEl.textContent = total.toFixed(2);
});
