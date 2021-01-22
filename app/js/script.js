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

btnHamburger.addEventListener("click", function () {
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
    setTimeout(function () {
      logo.classList.remove("hide-mobile");
      headerLinks.classList.add("hide-mobile");
      headerLinks.classList.remove("fade-out");
    }, 100);
  }
});

function showNextSlide() {
  slides[count].classList.remove("active");

  if (count < totalSlides - 1) {
    count++;
  } else {
    count = 0;
  }
  slides[count].classList.add("active");
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
  if (e.keyCode == "37") {
    showPrevSlide();
  } else if (e.keyCode == "39") {
    showNextSlide();
  }
}

btnNext.addEventListener("click", showNextSlide);
btnPrev.addEventListener("click", showPrevSlide);
