// ======================================
// MOBILE NAVIGATION
// ======================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");


// Open and close mobile menu
menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


// Close menu when a navigation link is clicked
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


// ======================================
// SIMPLE SCROLL ANIMATION
// ======================================

const animatedElements = document.querySelectorAll(
    ".service-card, .gallery-item, .contact-card, .about-content, .location-content"
);


// Add initial hidden state
animatedElements.forEach(function (element) {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";

});


// Check which elements are visible
function revealElements() {

    animatedElements.forEach(function (element) {

        const position = element.getBoundingClientRect();

        if (position.top < window.innerHeight - 80) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}


// Run when scrolling
window.addEventListener("scroll", revealElements);


// Run once when page loads
revealElements();


// ======================================
// CURRENT YEAR IN FOOTER
// ======================================

// Automatically keeps the copyright year current
const currentYear = new Date().getFullYear();

const footerYear = document.querySelector("footer p");

if (footerYear) {

    footerYear.textContent = "© " + currentYear + " Royal Cuts Riyadh";

}