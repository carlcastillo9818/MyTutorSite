const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const items = document.querySelectorAll('.accordion button');

const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');


// javascript code for the accordion that shows various navigation links to different pages of the website.
// credits to the following source: https: //codepen.io/magraytariq/pen/QWOrBQE
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


/* 
The JS code below  is responsible for enabling the carousel of items (project descriptions and videos) to function through two
buttons and swiping left and right through each project while on the homepage of the website. I used MS copilot to help me generate some of the code
then I made my own changes to it.
*/
console.log(carouselItems);
console.log(carouselItems.length); // Should be 2

let currentIndex = 0;

function updateSlide() {
    const itemWidth = carouselItems[0].offsetWidth;  // Get correct width
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    //console.log(`carousel transform val: ${carousel.style.transform}`);

}

nextBtn.addEventListener('click', () => {
    //console.log("clicked on next button");
    currentIndex = (currentIndex + 1) % carouselItems.length;
    //console.log(`current index is ${currentIndex}`);
    updateSlide();
});

prevBtn.addEventListener('click', () => {
    //console.log("clicked on prev button");
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    //console.log(`current index is ${currentIndex}`);
    updateSlide();
});

