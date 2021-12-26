const template = document.createElement("template");
template.innerHTML = `
<style>
@import url("./styles.css")
</style>
<li>
    <label>
        <input type="checkbox" />
        <span></span>
    </label>
</li>
`;

export class PodcastEpisode extends HTMLElement {
    constructor(id, name) {
        super();

        const templateContent = template.content;
        const label = templateContent.querySelector("label");
        const input = templateContent.querySelector("input");
        const span = templateContent.querySelector("span");

        label.for = id;
        input.name = id;
        input.id = id;
        span.textContent = name;

        this.append(templateContent.cloneNode(true));
    }
}
