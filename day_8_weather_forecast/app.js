//* Local Visual Crossing Weather API KEY
import { config } from "./config.js";
import { DailyForecast } from "./DailyForecast.js";

customElements.define("daily-forecast", DailyForecast);

const wrapper = document.querySelector(".wrapper");

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
    "clear-day": { width: 208, height: 213 },
    storm: { width: 246, height: 187 },
    snow: { width: 230, height: 196 },
    "partly-cloudy-day": { width: 230, height: 209 },
    rain: { width: 160, height: 222 },
};

const WEATHERURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/wichita%2Cks%2C67207/next7days?unitGroup=us&include=days&key=${config.WEATHER_KEY}&contentType=json`;

const getWeatherData = async () => {
    try {
        const response = await fetch(WEATHERURL);
        const data = await response.json();
        data.days.forEach((day, idx) => {
            if (idx !== 0) {
                // Format (YYYY-MM-DD)
                const splitDate = day.datetime.split("-");
                const date = new Date(
                    splitDate[0],
                    +splitDate[1] - 1,
                    splitDate[2]
                );

                const dayOfWeek = daysOfWeekMap[date.getDay()];
                const dayOfMonth =
                    +date.getDate() <= 9
                        ? `0${date.getDate()}`
                        : date.getDate();
                const weatherIcon = iconNameToSizeMap[day.icon];
                const tempHigh = day.tempmax.toFixed(0);
                const precipitation =
                    day.precipprob === null
                        ? "0"
                        : +day.precipprob < 10
                        ? `0${day.precipprob.toFixed(0)}`
                        : day.precipprob.toFixed(0);
                const tempLow = day.tempmin.toFixed(0);

                wrapper.append(
                    new DailyForecast(
                        dayOfWeek,
                        dayOfMonth,
                        day.icon,
                        weatherIcon.width,
                        weatherIcon.height,
                        tempHigh,
                        precipitation,
                        tempLow
                    )
                );
            }
        });
    } catch (err) {
        console.error(err);
    }
};

getWeatherData();
