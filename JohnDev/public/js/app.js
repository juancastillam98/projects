let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
let header = document.querySelector("header");
let menuSvg = document.querySelector("#menu-svg");
let navbar = document.querySelector(".navbar");
const textElement = document.querySelector('.multiple-text');
const images = document.querySelectorAll("img");

//EventListeners
registrarEventListeners();
function registrarEventListeners() {
    document.addEventListener("DOMContentLoaded", iniciarApp);
    menuSvg.onclick = () => {
        navbar.classList.toggle("active")
    }
}
function iniciarApp() {
    /**++++++++++++++++++scroll sections active link++++++++++++++++++++ */
    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute("id");

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove("active");
                    document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
                })
            }
        })

        /**++++++++++++++++++scroll sections active link++++++++++++++++++++ */
        header.classList.toggle("sticky", window.scrollY > 100);
        /**++++++++++++++++++remove toggle icon and navbar whe click navbar link (scroll) ++++++++++++++++++++ */
        menuSvg.classList.remove("#menu-svg");
        navbar.classList.remove("active");

    }

    /**++++++++++++++++++scroll sections active link++++++++++++++++++++ */
    ScrollReveal({
        distance: "80px",
        duration: 1500,
        delay: 150
    });
    ScrollReveal().reveal('.home-content, .heading', { origin: "top" });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: "bottom" });
    ScrollReveal().reveal('.home-content h1, -about-img', { origin: "left" });
    ScrollReveal().reveal('.home-content p, -about-content', { origin: "right" });

    /**++++++++++++++++++typed js++++++++++++++++++++ */
    const typed = new Typed(".multiple-text", {
        strings: ["FullStack Web Developer", "Freelance"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    //Cambiar las extensiones de las imágenes.
    images.forEach((img) => {
        let curImg = img.src;
        extension = "webp"
        if (curImg.endsWith("webp") || curImg.endsWith("png")) {
            let newImage = curImg.replace(/\.(webp|png)$/, ".avif");
            curImg = newImage;

        }
        console.log(curImg)
    })
}

