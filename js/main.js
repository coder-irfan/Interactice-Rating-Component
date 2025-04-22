const mainContainer = document.querySelector(".main1");
const thanksContainer = document.querySelector(".main2");
const submitButton = document.getElementById("submit");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".main1__btn");
submitButton.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden");
    mainContainer.style.display = "none";
});

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        console.log(rate.innerHTML);
        rating.innerHTML = rate.innerHTML;
    })
});