const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  autoplay: {
    delay: 2000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pag",
    type: "progressbar",
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-arrow-next',
    prevEl: '.swiper-arrow-prev',
  },
});