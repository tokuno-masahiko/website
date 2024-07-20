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
        $(this).find('.faq__icon1').toggle();
        $(this).find('.faq__icon2').toggle();
    });
});

const swiper = new Swiper(".swiper", {
    loop: true,
    // 前後の矢印
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 1,
});