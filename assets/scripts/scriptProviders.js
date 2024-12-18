// add event on element inspired from: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
}


// scroll effect inspired from: https://www.shecodes.io/athena/7981-how-to-create-scroll-animations-on-a-website
const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].getBoundingClientRect().top < window.innerHeight / 1.5) {
            sections[i].classList.add("active");
        } else {
            sections[i].classList.remove("active");
        }
    }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("hidden");
    if (window.innerWidth <= 768) {
        navbar.classList.toggle("mobile-open");
    }
});

// hiding menu on mobile inspired by: https://stackoverflow.com/questions/31223341/detecting-scroll-direction
window.addEventListener('scroll', function() {
    if (window.innerWidth <= 768) {
        if (window.scrollY === 0) {
            menuToggle.style.display = 'block';
        } else {
            menuToggle.style.display = 'none';
        }
    }
});