window.addEventListener('DOMContentLoaded', function () {
    // Toggle Menu Mobile
    const menuIcon = document.getElementById("menu-icon");
    const menuList = document.getElementById("menu-list");

    menuIcon.addEventListener("click", () => {
        menuList.classList.toggle("hidden");
    });
    // const cursor = document.querySelector('.curser');

    // // Untuk Desktop
    // document.addEventListener('mousemove', function (e) {
    //     cursor.style.left = e.clientX + 'px';
    //     cursor.style.top = e.clientY + 'px';
    // });

    // // Untuk Mobile
    // document.addEventListener('touchmove', function (e) {
    //     if (e.touches.length > 0) {
    //         const touch = e.touches[0];
    //         cursor.style.left = touch.clientX + 'px';
    //         cursor.style.top = touch.clientY + 'px';
    //     }
    // });

    // Load data pengurus dari JSON
    fetch('data/pengurus.json')
        .then(response => response.json())
        .then(data => {
            const slider = document.getElementById('slider-pengurus');
            const wrapper = document.createElement('div');
            wrapper.classList.add('slider-pengurus-wrapper');

            data.forEach(p => {
                const slide = document.createElement('div');
                slide.classList.add('slider-pengurus-slide');

                slide.innerHTML = `
          <img src="${p.gambar}" alt="${p.nama}" />
          <h2>${p.nama}</h2>
          <p>${p.jabatan}</p>
        `;
                wrapper.appendChild(slide);
            });

            slider.appendChild(wrapper);

            // Inisialisasi Swiper setelah elemen DOM slider selesai dibuat
            const swiperPengurus = new Swiper('.slider-pengurus', {
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

        })
        .catch(error => console.error('Gagal memuat data pengurus:', error));

    // Swiper untuk slider lain (misalnya utama)
    const swiperUtama = new Swiper('.swiper', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 2,
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 3
            }
        }
    });
});
