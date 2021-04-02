$(function() {
    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    var containerEl1 = document.querySelector('[data-ref="container-1"]');
    var containerEl2 = document.querySelector('[data-ref="container-2"]');

    var config1 = {
        controls: {
            scope: 'local'
        }
    };
    var config2 = {
        controls: {
            scope: 'local'
        }
    };


    var mixer2 = mixitup(containerEl1, config1);
    var mixer2 = mixitup(containerEl2, config2);

});