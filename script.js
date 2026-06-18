// ======================
// ACCORDION
// ======================

const accordionButtons =
document.querySelectorAll(".accordion-btn");

accordionButtons.forEach(button => {

button.addEventListener("click", () => {

const content =
button.nextElementSibling;

document
.querySelectorAll(".accordion-content")
.forEach(item => {

if(item !== content){

item.style.maxHeight = null;

}

});

if(content.style.maxHeight){

content.style.maxHeight = null;

}else{

content.style.maxHeight =
content.scrollHeight + "px";

}

});

});

// ======================
// SCROLL REVEAL
// ======================

const revealElements =
document.querySelectorAll(
".project-card,.service-card,.testimonial-card,.quick-item"
);

const revealObserver =
new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform =
"translateY(0px)";

}

});

},{
threshold:0.15
});

revealElements.forEach(item => {

item.style.opacity = "0";
item.style.transform =
"translateY(40px)";
item.style.transition =
".7s ease";

revealObserver.observe(item);

});

// ======================
// HERO IMAGE EFFECT
// ======================

const heroImage =
document.querySelector(".hero-image img");

if(heroImage){

heroImage.addEventListener("mouseenter",()=>{

heroImage.style.transform =
"scale(1.03)";

});

heroImage.addEventListener("mouseleave",()=>{

heroImage.style.transform =
"scale(1)";

});

}

// ======================
// ACTIVE NAVIGATION
// ======================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const sectionTop =
section.offsetTop - 150;

if(window.scrollY >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(
link.getAttribute("href")
=== "#" + current
){

link.classList.add("active");

}

});

});

// ======================
// CONTACT FORM
// ======================

const form =
document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert(
"Thank you. Your message has been received."
);

form.reset();

});

}

// ======================
// CONSOLE
// ======================

console.log(
"Portfolio V3 Loaded Successfully"
);
