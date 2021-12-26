const slider = document.querySelector("#priceRange");
const dollars = document.querySelector(".dollars");

const convertValueToDollar = (amount) => {
    return (amount / 100).toFixed(2);
};

slider.addEventListener("input", (e) => {
    dollars.textContent = convertValueToDollar(+e.target.value);
});
