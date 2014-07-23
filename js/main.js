$(document).ready(function() {

    $('input, textarea').placeholder();

    $(document).on('click', '[data-modal]', function() {
        var $modal = $($(this).data('modal'));
        $.fancybox($modal);
    });

    /* Настройки fancybox
    ------------------------------------------------------------------------------- */

    $.extend($.fancybox.defaults, {
        scrollOutside: false,
        padding: 0,
        openEffect: 'fade',
        closeEffect: 'fade',
        openSpeed: 200,
        closeSpeed: 200
        //aspectRatio: true
    });

    /* Слайдер доверия
    ------------------------------------------------------------------------------- */

    var $bConfidenceSlider = $('.b-confidence__slider');
    var confidenceSlider = new Sly($bConfidenceSlider.find('.b-confidence__slider__wrapper'), {
        horizontal: 1,
        itemNav: 'basic',
        touchDragging: 1,
        speed: 400,
        dynamicHandle: 1,
        itemNav: 'forceCentered',
        smart: 1,
        activateMiddle: 1,
        nextPage: $bConfidenceSlider.find('.b-pagination__next'),
        prevPage: $bConfidenceSlider.find('.b-pagination__prev'),
    }).init();

    /* Слайдер партнеров
    ------------------------------------------------------------------------------- */

    var $bPartnersSlider = $('.b-partners__slider');
    var partnersSlider = new Sly($bPartnersSlider.find('.b-partners__slider__wrapper'), {
        horizontal: 1,
        itemNav: 'basic',
        touchDragging: 1,
        speed: 400,
        dynamicHandle: 1,
        nextPage: $bPartnersSlider.find('.b-pagination__next'),
        prevPage: $bPartnersSlider.find('.b-pagination__prev'),
    }).init();

    /* Обработка отправки форм
    ------------------------------------------------------------------------------- */
    
    $(document).on('submit', '.b-form', function(e) {

        e.preventDefault();
    });

    /* Скроллинг
    ------------------------------------------------------------------------------- */

    /* Шапка
    ------------------------------------------------------------------------------- */

    (function() {
        var $header      = $('.b-header');
            //$fixedHeader = $header.clone().appendTo('body').addClass('b-header--fixed');

        $(window).resize(function() {

            if ($(window).width() > 768 || $(window).height() > 450) {
                /*$header.css({ visibility: 'hidden'});
                $fixedHeader.show();*/

                $header.height($(window).height());

            } else {
                /*$header.css({ visibility: 'visible'});
                $fixedHeader.hide();*/
            }

        }).trigger('resize');

   })();

});