const highScore = document.querySelector(".high-score");
const currentScore = document.querySelector(".current-score");
const timer = document.querySelector(".seconds");
let localScore = 0;

if (localStorage.getItem("keyboard-score")) {
    localScore = +localStorage.getItem("keyboard-score");
    highScore.textContent = localScore;
}

const getNewRandomKey = () => {
    const keys = document.querySelectorAll(".key");
    const randomNumber = Math.floor(Math.random() * keys.length);
    return keys[randomNumber];
};

const game = (e) => {
    e.preventDefault();

    const targetKey = document.querySelector(".jiggle");
    if (e.key.toUpperCase() === targetKey.dataset.key) {
        const currentScoreValue = +currentScore.textContent + 1;
        const highScoreValue = +highScore.textContent;
        currentScore.textContent = currentScoreValue;
        if (currentScoreValue > highScoreValue) {
            highScore.textContent = currentScoreValue;
        }

        targetKey.classList.remove("jiggle");
        const newTargetKey = getNewRandomKey();
        newTargetKey.classList.add("jiggle");
    } else {
        targetKey.style.background = "red";
        setTimeout(() => {
            targetKey.removeAttribute("style");
        }, 1000);
    }
};

const startTimer = () => {
    const countdown = setInterval(() => {
        const timerVal = +timer.textContent - 1;
        timer.textContent = timerVal <= 9 ? `0${timerVal}` : timerVal;
        if (timerVal <= 0) {
            const highScoreValue = +highScore.textContent;

            if (highScoreValue > localScore) {
                localStorage.setItem("keyboard-score", highScoreValue);
            }
            clearInterval(countdown);
            document.removeEventListener("keydown", game);
            document.querySelector(".jiggle").classList.remove("jiggle");
        }
    }, 1000);
    document.removeEventListener("keydown", startTimer);
};

document.addEventListener("keydown", startTimer);
document.addEventListener("keydown", game);

getNewRandomKey().classList.add("jiggle");
