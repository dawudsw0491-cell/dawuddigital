// ======================
// ACCORDION
// ======================

const accordionButtons = document.querySelectorAll(".accordion-btn");

accordionButtons.forEach(button => {

button.addEventListener("click", () => {

const content = button.nextElementSibling;

document.querySelectorAll(".accordion-content").forEach(item => {

if(item !== content){

item.style.maxHeight = null;

}

});

if(content.style.maxHeight){

content.style.maxHeight = null;

}else{

content.style.maxHeight = content.scrollHeight + "px";

}

});

});

// ======================
// SMOOTH ACTIVE NAV
// ======================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 120;

if(window.scrollY >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){

link.classList.add("active");

}

});

});

// ======================
// SCROLL REVEAL
// ======================

const revealElements = document.querySelectorAll(
".project-card, .service-card, .testimonial-card, .contact-item"
);

const revealOnScroll = () => {

revealElements.forEach(el => {

const top = el.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

el.style.opacity = "1";
el.style.transform = "translateY(0)";

}

});

};

revealElements.forEach(el => {

el.style.opacity = "0";
el.style.transform = "translateY(40px)";
el.style.transition = "all .6s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ======================
// TESTIMONIAL AUTO SLIDER
// ======================

const testimonialCards =
document.querySelectorAll(".testimonial-card");

let activeIndex = 0;

function rotateTestimonials(){

testimonialCards.forEach(card => {

card.style.borderColor =
"rgba(212,175,55,.15)";

card.style.transform =
"scale(1)";

});

testimonialCards[activeIndex].style.borderColor =
"#d4af37";

testimonialCards[activeIndex].style.transform =
"scale(1.03)";

activeIndex++;

if(activeIndex >= testimonialCards.length){

activeIndex = 0;

}

}

setInterval(rotateTestimonials,3000);

rotateTestimonials();
