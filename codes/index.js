'use strict';


const overlay = document.querySelector("[data-overlay]");
const navOpenBtn =document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElems = [overlay, navOpenBtn, navCloseBtn];
for (let i = 0; i < navElems.length; i++) {
    navElems[i].addEventListener("click", function (){
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
    });
}

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
    if (window.scrollY > 80) {
        header.classList.add("active");
        goTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        goTopBtn.classList.remove("active");
    }
});


// const images = [
// 'url("../images/217.png")',
// 'url("../images/193.png")',
// 'url("../images/287.jpg")',
// 'url("../images/images.jpg")',
// ];
// let currentIndex = 0;
// const slider = document.getElementById('slider');
// function changeBackground() {
//     slider.style.backgroundImage = images[currentIndex];
//     currentIndex = (currentIndex + 1) % images.length;
// }
// changeBackground();
// setInterval(changeBackground, 5000);



// window.onscroll = 
// function scrollFunction() {
//     var top = document.getElementById("top");
//     if (document.body.scrollTop > 100 || document.getElementById.scrollTop > 100) {top
//     } else {
//         top.style.display = "none"
//     }
// }
// const topBtn = document.querySelector('back-to-top')
// window.addEventListener('scroll', () => {
// });


// const catalog = document.querySelector('.catalog');

// let scrollAmount = 0;
// const scrollStep = 220;
// const maxScroll = catalog.scrollWidth - catalog.clientWidth;

// function autoSlide() {
//     scrollAmount += scrollStep;
//     if (scrollAmount >= maxScroll) {
//         scrollAmount = 0;
//     }
//     catalog.scrollTo({
//         left: scrollAmount,
//         behavior: 'smooth'
//     });
// }

// setInterval(autoSlide, 3000);
