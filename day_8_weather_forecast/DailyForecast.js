const template = document.createElement("template");
template.innerHTML = `
<div class="day">
    <div class="day-of-week"></div>
    <div class="date"></div>

    <div class="bar">
        <div class="weather"></div>
        <div class="temperature"></div>
        <div class="content">
            <div class="precipitation"></div>
            <div class="low"></div>
        </div>
    </div>
</div>`;

export class DailyForecast extends HTMLElement {
    constructor(day, date, weather, iconWidth, iconHeight, current, rain, low) {
        super();
        const content = template.content;

        const template_day = content.querySelector(".day-of-week");
        const template_date = content.querySelector(".date");
        const forecastWrapper = content.querySelector(".bar");
        const weatherImg = forecastWrapper.querySelector(".weather");
        const currentTemp = forecastWrapper.querySelector(".temperature");
        const precipitationChance =
            forecastWrapper.querySelector(".precipitation");
        const lowTemp = forecastWrapper.querySelector(".low");

        const dayOfWeekAttr = this.getAttribute("day") || day;
        const dateAttr = this.getAttribute("date") || date;
        const weatherAttr = this.getAttribute("weather") || weather;
        const iconWidthAttr = this.getAttribute("icon-width") || iconWidth;
        const iconHeightAttr = this.getAttribute("icon-height") || iconHeight;
        const currentAttr = this.getAttribute("current") || current;
        const rainAttr = this.getAttribute("rain") || rain;
        const lowAttr = this.getAttribute("low") || low;

        template_day.textContent = dayOfWeekAttr;
        template_date.textContent = dateAttr;
        forecastWrapper.classList.add(weatherAttr);
        weatherImg.innerHTML = `<svg role="img" width="${iconWidthAttr}" height="${iconHeightAttr}" viewBox="0 0 ${iconWidthAttr} ${iconHeightAttr}"><use xlink:href="#${weatherAttr}"></use></svg>`;
        currentTemp.innerHTML = `${currentAttr}<span class="degrees">&deg;</span>`;
        precipitationChance.innerHTML = `<svg role="img" class="icon"><use xlink:href="#precipitation"></use></svg>${rainAttr}%`;
        lowTemp.innerHTML = `<svg role="img" class="icon"><use xlink:href="#low"></use></svg>${lowAttr}&deg;`;

        this.append(content.cloneNode(true));
        forecastWrapper.classList.remove(weatherAttr);
    }
}
