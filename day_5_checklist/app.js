import { episodes } from "./data.js";
import { PodcastEpisode } from "./PodcastEpisode.js";

customElements.define("podcast-episode", PodcastEpisode);

const episodeList = document.querySelector(".episodes");

episodes.forEach((episode) => {
    episodeList.append(
        new PodcastEpisode(
            `episode-${episode.id}`,
            `${episode.id} || ${episode.name}`
        )
    );
});

const checkboxes = document.querySelectorAll(
    "podcast-episode input[type='checkbox']"
);
let previousChecked;

checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("click", (e) => {
        document.getSelection().removeAllRanges();
        if (!isNaN(previousChecked) && e.shiftKey) {
            for (
                let i = Math.min(index, previousChecked) + 1;
                i < Math.max(index, previousChecked);
                i++
            ) {
                checkboxes[i].checked = true;
            }
        }
        previousChecked = index;
    });
});
