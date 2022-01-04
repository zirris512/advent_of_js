import { content } from "./data.js";

const thumbnails = document.querySelectorAll("li");
const featuredImg = document.querySelector(".feature");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

const removeChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

const changeFeaturedImg = (img, caption) => {
    const newImg = document.createElement("img");
    const newImgCaption = document.createElement("div");
    newImg.src = `./images/${img}`;
    newImg.alt = "Feature";
    newImgCaption.textContent = caption;
    newImgCaption.classList.add("caption");

    removeChildNodes(featuredImg);
    featuredImg.append(newImg, newImgCaption);
};

const findSelected = () =>
    [...thumbnails].find((el) => el.classList.contains("selected"));

thumbnails.forEach((img) => {
    img.addEventListener("click", () => {
        findSelected().classList.remove("selected");
        img.classList.add("selected");

        const selectedFeature = content.find((val) =>
            img.querySelector("img").src.includes(val.image)
        );
        changeFeaturedImg(selectedFeature.image, selectedFeature.caption);
    });
});

rightBtn.addEventListener("click", () => {
    const currentSelectedImg = [...thumbnails].find((el) =>
        el.classList.contains("selected")
    );
    let selectedImgIdx = [...thumbnails].indexOf(currentSelectedImg) + 1;

    if (selectedImgIdx >= thumbnails.length) selectedImgIdx = 0;

    const newSelectedImg = thumbnails[selectedImgIdx];
    const newFeaturedImg = content.find((val) =>
        newSelectedImg.querySelector("img").src.includes(val.image)
    );
    currentSelectedImg.classList.remove("selected");
    newSelectedImg.classList.add("selected");
    newSelectedImg.scrollIntoView();

    changeFeaturedImg(newFeaturedImg.image, newFeaturedImg.caption);
});

leftBtn.addEventListener("click", () => {
    const currentSelectedImg = [...thumbnails].find((el) =>
        el.classList.contains("selected")
    );
    let selectedImgIdx = [...thumbnails].indexOf(currentSelectedImg) - 1;

    if (selectedImgIdx < 0) selectedImgIdx = thumbnails.length - 1;

    const newSelectedImg = thumbnails[selectedImgIdx];
    const newFeaturedImg = content.find((val) =>
        newSelectedImg.querySelector("img").src.includes(val.image)
    );
    currentSelectedImg.classList.remove("selected");
    newSelectedImg.classList.add("selected");
    newSelectedImg.scrollIntoView();

    changeFeaturedImg(newFeaturedImg.image, newFeaturedImg.caption);
});
