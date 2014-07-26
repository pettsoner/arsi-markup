$(document).ready(function() {

    var $header       = $('.b-header'),
        $promo        = $('.b-promo'),
        $topLine      = $('.b-top-line'),
        $toTop        = $('.b-to-top'),
        $fixedTopLine = $topLine.clone().prependTo('body').addClass('b-top-line--fixed');

    $(window).resize(function() {

        if ($(window).width() > 700) {
            $topLine.css({ visibility: 'hidden'});
            $fixedTopLine.show();
        } else {
            $topLine.css({ visibility: 'visible'});
            $fixedTopLine.hide();
        }

        if ($(window).width() > 682) {
            $header.css('height', $(window).height());
        } else {
            $header.css('height', '');
        }

        if ($(window).width() > 682) {
            $promo.find('.container').center({
                inside: {
                    el: $header
                },
                vOffset: 50,
                hOffset: -15
            });
        } else {
            $promo.find('.container').css('position', 'static');
        }

    }).trigger('resize');

    /* Всплывающие окна (fancybox)
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

    $('[data-modal]').click(function(e) {
        $.fancybox($($(this).data('modal')));

        e.preventDefault();
    });

    /* Форма заказа
    ------------------------------------------------------------------------------- */
    
    $('[name="phone"]').mask("+0(000)000-00-00");

    $(document).on('submit', '.b-form', function(e) {
        var $this   = $(this),
            isError = false;

        $this.find('[name]').each(function() {
            var $this = $(this);

            if (!$this.val()) {
                $this.addClass('error'); isError = true;
            } else if ($this.attr('name') == 'email' && !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test($this.val())) {
                $this.addClass('error'); isError = true;
            } else {
                $this.removeClass('error');
            }
        });

        if (isError) { return false; }

        /*$.post('/', $this.serialize(), function(response) {

            if (response.error) {
                alert(response.error);
            } else {
                document.location.href = 'thanks.html';
            }

        }, 'json');*/

        document.location.href = 'thanks.html';

        e.preventDefault();
    });

    /* Тарифы
    ------------------------------------------------------------------------------- */

    var $plans            = $('.b-plans .container'),
        $plansTable       = $('.b-plans__table'),
        $plansTableHeader = $plansTable.find('.b-plans__table__top th:not(:first)');

    $plansTableHeader.each(function(key) {
        var $this = $(this);

        if ($this.hasClass('hit')) {
            $plansTable.find('.b-plans__table__top, .b-plans__table__options tr, .b-plans__table__prices').each(function() {
                $(this).find('.plan:eq(' + key + ')').addClass('hit');
            });
        }

        var $table = $plansTable.clone();

        $table.removeClass('b-plans__table--full').addClass('b-plans__table--simple');
        
        $table.find('.b-plans__table__top, .b-plans__table__options tr, .b-plans__table__prices').each(function() {
            $(this).find('.plan:not(:eq(' + key + '))').remove();
        });

        $plans.append($table);
    });

    $('.b-plans__table').tableHover({rowClass: '', colClass: 'hover', ignoreCols: [1], footCols: true}); 

    /* Стилизация
    ------------------------------------------------------------------------------- */

    $('.styler').styler();

    /* Placeholder для старых браузеров
    ------------------------------------------------------------------------------- */

    $('input, textarea').placeholder();

    /* Кнопка наверх
    ------------------------------------------------------------------------------- */

    $(window).scroll(function() {
        if ($(window).scrollTop() >= $header.height()) {
            $toTop.fadeIn(400);
        } else {
            $toTop.fadeOut(400);
        }
    })
});

$(window).load(function() {

    $(window).resize(function() {
        $('.js-slider').each(function() {
            $(this)
                .find('.js-slider__wrapper')
                .height($(this).find('li:first').css('height'));
        });
    }).trigger('resize');

    /* Слайдер доверия
    ------------------------------------------------------------------------------- */

    var $bConfidenceSlider = $('.b-confidence__slider');

    if ($bConfidenceSlider.length) {
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

        $(window).resize(function() {
            confidenceSlider.reload();
        });
    }

    /* Слайдер партнеров
    ------------------------------------------------------------------------------- */

    var $bPartnersSlider = $('.b-partners__slider');

    if ($bPartnersSlider.length) {
        var partnersSlider = new Sly($bPartnersSlider.find('.b-partners__slider__wrapper'), {
            horizontal: 1,
            itemNav: 'basic',
            touchDragging: 1,
            speed: 400,
            dynamicHandle: 1,
            nextPage: $bPartnersSlider.find('.b-pagination__next'),
            prevPage: $bPartnersSlider.find('.b-pagination__prev'),
        }).init();
    }

    /* Слайдер салонов
    ------------------------------------------------------------------------------- */

    /*var $bSalonsSlider = $('.b-salons__slider');

    if ($bSalonsSlider.length) {
        var salonsSlider = new Sly($bSalonsSlider.find('.b-salons__slider__wrapper'), {
            horizontal: 1,
            itemNav: 'basic',
            touchDragging: 1,
            speed: 400,
            dynamicHandle: 1,
            nextPage: $bSalonsSlider.find('.b-pagination__next'),
            prevPage: $bSalonsSlider.find('.b-pagination__prev'),
        }).init();
    }*/

});