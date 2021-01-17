/* eslint-disable indent */
$(window).scroll(function () {
    $('header').toggleClass('scrolled', $(this).scrollTop() > 50);
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
    $('.nav__container').toggleClass('scrolled', $(this).scrollTop() > 50);
    $('.brandName').toggleClass('scrolled', $(this).scrollTop() > 50);
    $('.menuBurger').toggleClass('scrolled', $(this).scrollTop() > 50);
});