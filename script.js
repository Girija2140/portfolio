// Smooth scrolling

const links = document.querySelectorAll(".sidebar a");

links.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const id = this.getAttribute("href");
        document.querySelector(id).scrollIntoView({
            behavior: "smooth"
        });
    });
});


// Typing Effect

const text = "Electronics & Communication Student";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

window.onload = typeEffect;


// Download Resume Button

function downloadResume() {
    alert("Resume download started!");
}