const keys = document.querySelectorAll("a");

keys.forEach((key, index) => {
    key.addEventListener("click", () => {
        new Audio(`./audio/key-${index + 1}.mp3`).play();
    });
});
