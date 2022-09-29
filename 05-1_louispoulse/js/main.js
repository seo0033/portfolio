$(function () {

    // col itm_sldier
    $('.col .content .itm_slide').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
    });

    $('.col .content .a_L').on('click', function (e) {
        e.preventDefault();
        $('.col .top .content .itm_slide').slick('slickPrev');
    });
    $('.col .content .a_R').on('click', function (e) {
        e.preventDefault();
        $('.col .top .content .itm_slide').slick('slickNext');
    });

    $('.col .content .a_L').on('click', function (e) {
        e.preventDefault();
        $('.col .bt .content .itm_slide').slick('slickPrev');
    });
    $('.col .content .a_R').on('click', function (e) {
        e.preventDefault();
        $('.col .bt .content .itm_slide').slick('slickNext');
    });

    // best slider
    $('.best .b_slider').slick({
        infinite: true,
        slidesToShow: 4,
    });

    //
    $('.designer .dp_slide').slick({
        vertical: true,
        infinite: true,
        slidesToShow: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        cssEase: 'ease-out',
    })

})//the end
