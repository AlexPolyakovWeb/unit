// Находим элементы взаимодействия
const allItemNav = document.querySelectorAll('[data-nav]');
const iconMenu = document.querySelector('.icon-menu');
const navMobile = document.querySelector('.mb-navigation');
const btnNav = document.querySelector('.btn-nav');
const btnNavSearch = document.querySelector('.btn-nav-search');
const form = document.querySelector('.header__form');

// Анимация иконки меню по клику
iconMenu.addEventListener('click', function () {
  this.classList.toggle('icon-menu--active');
  navMobile.classList.toggle('mb-navigation--active');
});

// Фиксация кнопки
iconMenu.addEventListener('click', function () {
  btnNav.classList.toggle('btn-nav--fixed')
})

// Убирает классы по клику на элемент навигации
allItemNav.forEach(function (item) {
  item.addEventListener('click', function () {
    navMobile.classList.remove('mb-navigation--active')
    btnNav.classList.remove('btn-nav--fixed')
    iconMenu.classList.remove('icon-menu--active')
  })
})

// логика по клику на кнопку поиска
btnNavSearch.addEventListener('click', function (event) {
  if (!form.classList.contains('header__form--visible')) {
    event.preventDefault(); /**отмена дефолтного поведения при клике чтобы не срабатывала  форма */
  }
  form.classList.toggle('header__form--visible');
})





