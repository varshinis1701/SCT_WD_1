
const header = document.getElementById("header");

const menuToggle = document.getElementById("menuToggle");

const navbar = document.getElementById("navbar");

const links = document.querySelectorAll("nav a");

// Change navbar when scrolling
window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
});

// Mobile menu
menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");

    menuToggle.textContent =
        navbar.classList.contains("active") ? "✕" : "☰";
});

// Active navigation links
links.forEach(link => {
    link.addEventListener("click", () => {

        links.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

        navbar.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});
