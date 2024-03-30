// javascript code for certain parts of the website
// credits to the following source: https: //codepen.io/magraytariq/pen/QWOrBQE


const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const items = document.querySelectorAll('.accordion button');

/* this block of code is specifically for the tutoring services page sections*/
function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        // answer is hidden by default so set attribute to false
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        // show answer (by clicking on question) so set attribute to true 
        this.setAttribute('aria-expanded', 'true');
    }
}

// listen for when user clicks on any of the question accordion blocks, which triggers the answer to open up and display
items.forEach((item) => item.addEventListener('click', toggleAccordion));


// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

/* this block of code is for the nav bar on each page that will shrink to a hamburger menu when the window 
is small enough*/
navToggle.addEventListener("click", function () {
    // when navbar (hamburger menu form) is clicked on, then show all the links that lead to other pages of the site.
    links.classList.toggle("show-links");
});



