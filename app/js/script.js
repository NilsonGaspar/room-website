const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const headerLinks = document.querySelector(".header__links");
const slides = document.querySelectorAll(".hero__slide");
const btnPrev = document.querySelector("#btnPrev");
const btnNext = document.querySelector("#btnNext");
const logo = document.querySelector(".header__logo");
const overlay = document.querySelector(".overlay");

const totalSlides = slides.length;
let count = 0;
let btnWrapper = document.createElement("div");

function handleEffects() {
  if (!header.classList.contains("open")) {
    // Open
    header.classList.add("open");
    headerLinks.classList.remove("hide-mobile");
    headerLinks.classList.add("fade-in");
    headerLinks.classList.remove("fade-out");
    logo.classList.add("hide-mobile");
  } else {
    // Close
    header.classList.remove("open");
    logo.classList.add("fade-in");
    headerLinks.classList.remove("fade-in");
    headerLinks.classList.add("fade-out");
    overlay.classList.add("fade-out");
    header.classList.add("closed");
    setTimeout(function () {
      logo.classList.remove("hide-mobile");
      headerLinks.classList.add("hide-mobile");
      headerLinks.classList.remove("fade-out");
    }, 100);
  }
}

btnHamburger.addEventListener("click", handleEffects);
overlay.addEventListener("click", handleEffects);

function showNextSlide() {
  slides[count].classList.remove("active");
  slides[count].classList.remove("fade-out");

  if (count < totalSlides - 1) {
    count++;
  } else {
    count = 0;
  }
  slides[count].classList.add("active");
  slides[count].classList.add("fade-in");
}

function showPrevSlide() {
  slides[count].classList.remove("active");

  if (count > 0) {
    count--;
  } else {
    count = totalSlides - 1;
  }
  slides[count].classList.add("active");
}

function keyPress(e) {
  e = e || window.event;
  if (e.onkeydown == "37") {
    showPrevSlide();
  } else if (e.onkeydown == "39") {
    showNextSlide();
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (key == "ArrowLeft") {
    showPrevSlide();
  } else if (key == "ArrowRight") {
    showNextSlide();
  }
});

function resetHeader() {
  if (window.innerWidth >= 1024) {
    header.classList.remove("open");
  }
}

btnNext.addEventListener("click", showNextSlide);
btnPrev.addEventListener("click", showPrevSlide);
window.onresize = resetHeader;
