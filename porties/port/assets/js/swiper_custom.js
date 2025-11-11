const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

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