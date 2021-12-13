const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const settingsBtn = document.querySelector(".settings");
const minutes = document.querySelector(".minutes input");
const seconds = document.querySelector(".seconds input");
const ring = document.querySelector(".ring");

let timer;

const swapBtns = (oldBtn, newBtn) => {
    oldBtn.style.display = "none";
    newBtn.style.display = "initial";
};

startBtn.addEventListener("click", () => {
    if (isNaN(minutes.value) || +minutes.value < 0) {
        alert("Please enter minutes greater than 0!");
        minutes.select();
        minutes.focus();
        return;
    }
    if (isNaN(seconds.value) || +seconds.value > 59 || +seconds.value < 0) {
        alert("Please enter seconds between 0-59!");
        seconds.select();
        seconds.focus();
        return;
    }

    swapBtns(startBtn, stopBtn);
    ring.classList.remove("ending");
    minutes.disabled = true;
    seconds.disabled = true;

    timer = setInterval(() => {
        if (+seconds.value === 0) {
            if (+minutes.value === 0) {
                clearInterval(timer);
                ring.classList.add("ending");
                swapBtns(stopBtn, startBtn);
                alert("Time is up!");
                return;
            }

            seconds.value = "59";
            const newMinutes = +minutes.value - 1;
            minutes.value = newMinutes >= 10 ? newMinutes : "0" + newMinutes;
        } else {
            const newSeconds = +seconds.value - 1;
            seconds.value = newSeconds >= 10 ? newSeconds : "0" + newSeconds;
        }
    }, 1000);
});

stopBtn.addEventListener("click", () => {
    swapBtns(stopBtn, startBtn);

    clearInterval(timer);
});

settingsBtn.addEventListener("click", () => {
    swapBtns(stopBtn, startBtn);
    if (!ring.classList.contains("ending")) ring.classList.add("ending");

    minutes.disabled = false;
    seconds.disabled = false;
    minutes.focus();
    minutes.select();

    clearInterval(timer);
});
