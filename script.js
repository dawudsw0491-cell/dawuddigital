document.addEventListener("DOMContentLoaded", () => {

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";

}

});

},
{
threshold:0.1
}
);

sections.forEach(section => {

section.style.opacity = "0";
section.style.transform = "translateY(40px)";
section.style.transition = "all 0.8s ease";

observer.observe(section);

});

});
/* ABOUT ACCORDION */

const accordionBtns =
document.querySelectorAll(".accordion-btn");

accordionBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        const content =
        btn.nextElementSibling;

        if(content.style.maxHeight){

            content.style.maxHeight = null;

        }else{

            content.style.maxHeight =
            content.scrollHeight + "px";

        }

    });

});
