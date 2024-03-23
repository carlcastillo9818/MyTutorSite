// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const items = document.querySelectorAll('.accordion button');

/* this block of code is specifically for the tutoring services page sections*/
function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
        console.log("hi");

    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));

/* this block of code is for the nav bar on each page that will shrink to a hamburger menu when the window is small enough*/
navToggle.addEventListener("click", function () {
    // console.log(links.classList);
    // console.log(links.classList.contains("random"));
    // console.log(links.classList.contains("links"));
    // if (links.classList.contains("show-links")) {
    //   links.classList.remove("show-links");
    // } else {
    //   links.classList.add("show-links");
    // }
    links.classList.toggle("show-links");
});



