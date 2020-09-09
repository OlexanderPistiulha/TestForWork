window.addEventListener('DOMContentLoaded', function () {
    'use strict';


    let numberArrow = document.querySelector('.contact__arrow-wrapp');

    numberArrow.addEventListener('click', function () {
        document.querySelector(".number-list").classList.toggle("number-list__active");
        document.querySelector(".contact__arrow").classList.toggle("contact__arrow-active");
    });

    let menuList = document.querySelector('.menu-mobile__menu');

    menuList.addEventListener('click', function () {
        document.querySelector(".menu-mobile__list").classList.toggle("menu-mobile__list-active");
    });

});