function hasScroll() {
    var windowHeight = $(window).height();
    var documentHeight = $(document).height();

    $('main > .tab-container').css({'height' : ''});

    if(documentHeight > windowHeight || documentHeight == windowHeight) {
        $('main > .tab-container').css({'height' : '100%'});
    }
}

function myMap() {
    var mapCanvas = document.getElementById("googleMap");
    var myCenter = new google.maps.LatLng(49.443528, 32.058764);
    var mapOptions = {center: myCenter, zoom: 18};
    var map = new google.maps.Map(mapCanvas,mapOptions);
    var marker = new google.maps.Marker({
        position: myCenter,
        // icon: "/img/pointer.png"
    });
    marker.setMap(map);
}

hasScroll();

$(function() {

    if($('#googleMap').length) {
        myMap();
    }

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

    $('.menu-opener').on('click', function() {
        $('.menu').slideToggle();
    });

    $('.item-slider').slick({
       slidesToShow: 1,
       slidesToScroll: 1,
       autoplay: true,
       autoplaySpeed: 5000,
       prevArrow: '<button type="button" class="slick-prev"><svg height="40" width="40"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrowLeft"></use></svg></button>',
       nextArrow: '<button type="button" class="slick-next"><svg height="40" width="40" style="transform:rotate(180deg)"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrowLeft"></use></svg></button>'
   });

    $('.galery-items .item').on('click', function() {
        $('.galery-slider').slideDown();
        $('.shadow').fadeIn();

        if (!$('.galery-slider .tab-slider').hasClass('slick-initialized')) {
            $('.galery-slider .tab-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 5000,
                prevArrow: '<button type="button" class="slick-prev"><svg height="40" width="40"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrowLeft"></use></svg></button>',
                nextArrow: '<button type="button" class="slick-next"><svg height="40" width="40" style="transform:rotate(180deg)"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrowLeft"></use></svg></button>'
            });
        }


    })

    $('.close-btn').on('click', function() {
        $(this).parent('.modal').slideUp();
        // $('.galery-slider .tab-slider').slick('unslick');
        $('.shadow').fadeOut();
    })
});