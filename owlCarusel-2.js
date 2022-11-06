$(document).ready(function () {

  // инициализируем слайдер
  const owl = $('#slider');
  owl.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplaySpeed: 600 / true,
    dotsSpeed: 600 / true,
    autoplayHoverPause: true
  });

  // инициализируем элементы управления
  const next = $('[data-next]');
  const prev = $('[data-prev]');

  // описываем событие по клику на кнопку вперёд
  next.click(function () {
    owl.trigger('next.owl.carousel', [600])
  });

  // описываем событие по клику на кнопку назад
  prev.click(function () {
    owl.trigger('prev.owl.carousel', [600])
  });

});




// пример из документации
// var owl = $('.owl-carousel');
// owl.owlCarousel();
// // Go to the next item
// $('.customNextBtn').click(function () {
//   owl.trigger('next.owl.carousel');
// })
// // Go to the previous item
// $('.customPrevBtn').click(function () {
//   // With optional speed parameter
//   // Parameters has to be in square bracket '[]'
//   owl.trigger('prev.owl.carousel', [300]);
// })
