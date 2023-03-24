var swiper = new Swiper(".logo_slider", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  loopedSlides: 4,
  autoplay: {
    delay: 3000,
  },
});

var swiper = new Swiper(".programs-slider", {
  loop: true,

  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});
