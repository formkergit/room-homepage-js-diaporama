const slideTexts = document.querySelectorAll(".txtDiscover");
const slideBackground = document.querySelector("#imgDiscover");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");

let slideIndex = 0;

const backgroundUrls = [
    "./assets/img/desktop-image-hero-1.jpg",
    "assets/img/desktop-image-hero-2.jpg",
    "assets/img/desktop-image-hero-3.jpg"
];

function showText(nb) {
    for (let i = 0; i < slideTexts.length; i++) {
        if (i === nb)
            slideTexts[i].style.display = "block";
        else
            slideTexts[i].style.display = "none";
    }

    slideBackground.style.backgroundImage = "url('" + backgroundUrls[nb] + "')";
}

showText(slideIndex);

console.log(slideTexts.length);

previous.addEventListener("click", () => {
    slideIndex++;
    if (slideIndex >= slideTexts.length)
        slideIndex = 0;
    showText(slideIndex);
});

next.addEventListener("click", () => {
    slideIndex--;
    if (slideIndex < 0)
        slideIndex = slideTexts.length - 1;
    showText(slideIndex);
})