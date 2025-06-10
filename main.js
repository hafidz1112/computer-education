
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
});

window.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 2, // default di desktop

        breakpoints: {
            0: {
                slidesPerView: 1 // untuk layar kecil, misalnya HP
            },
            768: {
                slidesPerView: 3 // untuk layar tablet ke atas
            }
        }
    });
});

window.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.slider-pengurus', {
        wrapperClass: 'slider-pengurus-wrapper',
        slideClass: 'slider-pengurus-slide',
        loop: true,
        navigation: {
            nextEl: '.slider-pengurus .swiper-button-next',
            prevEl: '.slider-pengurus .swiper-button-prev',
        },
        pagination: {
            el: '.slider-pengurus .swiper-pagination',
            clickable: true,
        },
        slidesPerView: 2,
        spaceBetween: 20,
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 4 
            }
        }
    });
});
