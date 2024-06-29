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
    $('.faq__card').click(function(){
        $(this).find('.faq__answer').slideToggle();
        $(this).find('.faq__answer').css('display', 'flex');
        if ($(this).find('.faq__icon1').css('display') == 'none') {
            $(this).find('.faq__icon1').css('display', 'block');
            $(this).find('.faq__icon2').css('display', 'none');
        } else {
            $(this).find('.faq__icon1').css('display', 'none');
            $(this).find('.faq__icon2').css('display', 'block');
        }
    });
});