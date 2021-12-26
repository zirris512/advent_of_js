// import { episodes } from "./data.js";

const checkboxes = document.querySelectorAll("input[type='checkbox']");
let previousChecked;

checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("click", (e) => {
        document.getSelection().removeAllRanges();
        if (!isNaN(previousChecked) && e.shiftKey) {
            for (
                let i = Math.min(index, previousChecked);
                i < Math.max(index, previousChecked);
                i++
            ) {
                checkboxes[i].checked = true;
            }
        } else {
            previousChecked = index;
        }
    });
});
