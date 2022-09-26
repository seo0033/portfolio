$(function () {

    // col itm_sldier
    $('.col .content .itm_slide').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
    });

    $('.col .t_a a:nth-child(1)').on('click', function (e) {
        e.preventDefault();
        $('.col .top .content .itm_slide').slick('slickPrev');
    });
    $('.col .t_a a:nth-child(2)').on('click', function (e) {
        e.preventDefault();
        $('.col .top .content .itm_slide').slick('slickNext');
    });

    $('.col .b_a a:nth-child(1)').on('click', function (e) {
        e.preventDefault();
        $('.col .bt .content .itm_slide').slick('slickPrev');
    });
    $('.col .b_a a:nth-child(2)').on('click', function (e) {
        e.preventDefault();
        $('.col .bt .content .itm_slide').slick('slickNext');
    });

    // best slider
    $('.best .b_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
    });

})//the end
