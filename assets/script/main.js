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

$(function(){
    $('.js_container').click(function(){
        $(this).find('.js_txt').slideToggle();
        $(this).find('.js_txt').css('display', 'flex');
        if ($(this).find('.js_up').css('display') == 'none') {
            $(this).find('.js_up').css('display', 'block');
            $(this).find('.js_down').css('display', 'none');
        } else {
            $(this).find('.js_up').css('display', 'none');
            $(this).find('.js_down').css('display', 'block');
        }
    });
});