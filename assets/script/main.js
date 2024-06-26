$(function () {
    $(".header-menu__img").click(function () {
        const menu = $('.js-menu')
        if (menu.css('display') === 'none') {
            menu.fadeIn();
        } else {
            menu.fadeOut();
        }
    });
});