function hasScroll() {
    var windowHeight = $(window).height();
    var documentHeight = $(document).height();

    $('main > .tab-container').css({'height' : ''});

    if(documentHeight > windowHeight) {
        $('main > .tab-container').css({'height' : '100%'});
        console.log(windowHeight);
    }

    console.log($('main > .tab-container'))
}

hasScroll();

$(function() {
    $(window).resize( function() {
        if ($(window).height() > 900) {
            hasScroll();

            if ($(document).height() > $(window).height()) {
                $('main > .tab-container').css({'height': '100%'});
            }
        }
    });

    $('.category').on('click', function() {
        var list = $(this).siblings('.subcategory');
        if(list.is(':visible')) {
            list.slideUp();
        }
        else {
            $('.subcategory').slideUp();
            list.slideDown();
        }
    });

    $('.header .burger').on('click', function() {
        $('.header nav').toggleClass('opened');
    });

    $('.item-slider').slick({
       slidesToShow: 1,
       slidesToScroll: 1,
       autoplay: false,
       // autoplaySpeed: 5000,
       prevArrow: '<button type="button" class="slick-prev"><svg height="40" width="40"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrowLeft"></use></svg></button>',
       nextArrow: '<button type="button" class="slick-next"><svg height="40" width="40" style="transform:rotate(180deg)"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrowLeft"></use></svg></button>'
   });
});