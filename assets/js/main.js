window.addEventListener('DOMContentLoaded', function () {
    'use strict';


    let numberArrow = document.querySelectorAll('.contact__arrow-wrapp');

    numberArrow[0].addEventListener('click', function () {
        document.querySelectorAll(".number-list")[0].classList.toggle("number-list__active");
        document.querySelectorAll(".contact__arrow")[0].classList.toggle("contact__arrow-active");
    });

    numberArrow[1].addEventListener('click', function () {
        document.querySelectorAll(".number-list")[1].classList.toggle("number-list__active");
        document.querySelectorAll(".contact__arrow")[1].classList.toggle("contact__arrow-active");
    });

    let menuList = document.querySelector('.menu-mobile__menu');

    menuList.addEventListener('click', function () {
        document.querySelector(".menu-mobile__list").classList.toggle("menu-mobile__list-active");
    });

});