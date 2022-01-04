const passcodeInputs = document.querySelectorAll("input");
const verifyBtn = document.querySelector("#verify");

const verifyInput = (value) => {
    if (value.length === 1) return !isNaN(value) && value.length !== 0;
    return !isNaN(value) && value.length === 4;
};

passcodeInputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
        if (!verifyInput(input.value)) {
            input.value = "";
            return;
        }
        if (input.nextElementSibling) {
            input.nextElementSibling.focus();
        } else {
            console.log("Success");
        }
    });

    input.addEventListener("paste", (e) => {
        e.preventDefault();

        const data = e.clipboardData || window.clipboardData;
        const pastedData = data.getData("text");

        if (!verifyInput(pastedData)) return;

        const codeArr = pastedData.split("");
        passcodeInputs.forEach((input, idx) => {
            input.value = codeArr[idx];
        });
        passcodeInputs[passcodeInputs.length - 1].focus();
    });
});
