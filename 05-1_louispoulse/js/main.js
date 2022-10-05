$(function () {

    //top_banner
    $('.top_banner a>i').on('click', function (e) {
        e.preventDefault();
        $('.top_banner').slideUp();
    });

    // col itm_sldier
    $('.col .content .itm_slide').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
    });

    $('.col .top .a_L').on('click', function (e) {
        e.preventDefault();
        $('.col .top .content .itm_S_01').slick('slickPrev');
    });
    $('.col .top .a_R').on('click', function (e) {
        e.preventDefault();
        $('.col .top .content .itm_S_01').slick('slickNext');
    });

    $('.col .bt .a_L').on('click', function (e) {
        e.preventDefault();
        $('.col .bt .content .itm_S_02').slick('slickPrev');
    });
    $('.col .bt .a_R').on('click', function (e) {
        e.preventDefault();
        $('.col .bt .content .itm_S_02').slick('slickNext');
    });

    // best slider
    $('.best .b_slider').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });

    $('.best .left .b_slider_ar').on('click', function (e) {
        e.preventDefault();
        $('.best .b_slider').slick('slickPrev');
    });


    //designer
    $('.designer .dp_slide').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 0,
        vertical: true,
        speed: 5000,
        cssEase: "linear",
    })

    //scrollbtn
    $('.scrollbtn i:nth-child(1)').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    $('.scrollbtn i:nth-child(2)').on('click', function () {
        $('html,body').animate({
            scrollTop: 5000
        }, 600);
        return false;
    });

})//the end
