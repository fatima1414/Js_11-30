var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
        el: ".swiper-pagination",
      },
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
});

