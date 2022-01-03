import { config } from "./config.js";
import { DailyForecast } from "./DailyForecast.js";

customElements.define("daily-forecast", DailyForecast);

const daysOfWeekMap = {
    0: "SUN",
    1: "MON",
    2: "TUES",
    3: "WED",
    4: "THUR",
    5: "FRI",
    6: "SAT",
};

const iconNameToSizeMap = {
    cloudy: { width: 264, height: 166 },
    sunny: { width: 208, height: 213 },
    stormy: { width: 246, height: 187 },
    snowy: { width: 230, height: 196 },
    "partly-cloudy": { width: 230, height: 209 },
    rainy: { width: 160, height: 222 },
};

const wrapper = document.querySelector(".wrapper");
wrapper.append(
    new DailyForecast(
        daysOfWeekMap["2"],
        "22",
        "sunny",
        iconNameToSizeMap.sunny.width,
        iconNameToSizeMap.sunny.height,
        "64",
        "30",
        34
    )
);
