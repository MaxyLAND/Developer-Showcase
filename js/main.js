window.onload = function() { 

    $('#logo-text').delay(1000)
        .animate({
            width: '55%'
        }, {
            duration: 800,
            easing: 'swing'
        }
    );

    $("#logo-text span").each(function(index) {
        $(this).delay(1400 + 80 * -index).animate({ opacity: 1 }, 800);
    });


    $('#logo-subtext').delay(1200)
        .animate({
            top: '65%',
            opacity: 1
        }, {
            duration: 500,
            easing: 'swing'
        }
    );

    $('#header-background').delay(200)
        .animate({
            opacity: 0
        }, {
            duration: 2000,
            easing: 'swing'
        }
    );

    $('#total-visitors').delay(2000)
        .animate({
            top: '3%'
        }, {
            duration: 1000,
            easing: 'easeOutExpo'
        }
    );
}

$(window).scroll(function() {
    var scrolledY = $(window).scrollTop();
    $('.background-shadow').css('background-position-y', (-scrolledY * 0.5) + 'px');
});