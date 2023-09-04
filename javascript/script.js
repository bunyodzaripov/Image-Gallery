"use strick";

let scrollContainer = document.querySelector(".gallery");
let backBtn = document.querySelector("#backbtn");
let nextBtn = document.querySelector("#nextbtn");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 900;
});
