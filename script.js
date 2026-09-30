/* =========================================================
   ROYAL CUTS RIYADH
   JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");


// Open and close the mobile menu
menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    menuToggle.classList.toggle("active");

    document.body.classList.toggle("menu-open");

    const isOpen = navMenu.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

});


/* =========================================================
   CLOSE MOBILE MENU AFTER CLICKING A LINK
========================================================= */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

        menuToggle.classList.remove("active");

        document.body.classList.remove("menu-open");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


/* =========================================================
   CLOSE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener("click", function (event) {

    const clickedInsideMenu =
        navMenu.contains(event.target);

    const clickedMenuButton =
        menuToggle.contains(event.target);


    if (
        !clickedInsideMenu &&
        !clickedMenuButton &&
        navMenu.classList.contains("active")
    ) {

        navMenu.classList.remove("active");

        menuToggle.classList.remove("active");

        document.body.classList.remove("menu-open");

        menuToggle.setAttribute("aria-expanded", "false");

    }

});


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const navbar = document.getElementById("navbar");


function updateNavbar() {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}


window.addEventListener("scroll", updateNavbar);

updateNavbar();


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                // Stop watching once the animation has happened
                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


// Start observing every reveal element
revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


/* =========================================================
   FOOTER YEAR
========================================================= */

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================================
   SMOOTH SCROLLING
========================================================= */

const smoothLinks =
    document.querySelectorAll('a[href^="#"]');


smoothLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId =
            link.getAttribute("href");


        // Ignore empty "#" links
        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }


        const target =
            document.querySelector(targetId);


        if (target) {

            event.preventDefault();

            const navbarHeight =
                navbar.offsetHeight;

            const targetPosition =
                target.getBoundingClientRect().top
                + window.scrollY
                - navbarHeight;


            window.scrollTo({

                top: targetPosition,

                behavior: "smooth"

            });

        }

    });

});


/* =========================================================
   WHATSAPP BUTTON
========================================================= */

/*
    IMPORTANT:

    Replace EVERY occurrence of:

    966500000000

    in index.html with the real WhatsApp number.

    Example:

    Saudi number:
    +966 55 123 4567

    WhatsApp link format:
    https://wa.me/966551234567

    Do NOT put:
    + sign
    spaces
    brackets
    dashes
*/


const whatsappLinks =
    document.querySelectorAll(
        'a[href*="wa.me"]'
    );


whatsappLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        console.log(
            "Opening Royal Cuts Riyadh WhatsApp..."
        );

    });

});


/* =========================================================
   BUTTON HOVER MICRO-INTERACTION
========================================================= */

const buttons =
    document.querySelectorAll(".btn");


buttons.forEach(function (button) {

    button.addEventListener("mouseenter", function () {

        button.style.transition =
            "transform 0.25s ease";

    });

});


/* =========================================================
   PAGE LOADED
========================================================= */

window.addEventListener("load", function () {

    document.body.classList.add("page-loaded");

});