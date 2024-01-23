window.onload = function() { 
    $('#logo-l').delay(100)
        .animate({
            opacity: 1,
            height: '100%',
            width: '100%'
        }, {
            duration: 500,
            easing: 'swing',
            complete: function () {
                
            }
        }
    );

    $('#logo-m').delay(200)
        .animate({
            opacity: 1,
            height: '100%',
            width: '100%'
        }, {
            duration: 500,
            easing: 'swing',
            complete: function () {
                
            }
        }
    );

    $('#logo-m-bright').delay(550)
        .animate({
            'background-position-x': 300
        }, {
            duration: 2500,
            easing: 'easeOutExpo',
            complete: function () {
                
            }
        }
    );

    $('#logo-l-bright').delay(550)
        .animate({
            'background-position-x': 300
        }, {
            duration: 2500,
            easing: 'easeOutExpo',
            complete: function () {
                
            }
        }
    );

    $('#logo-logo').delay(800)
        .animate({
            margin: '5% 0 0 5%'
        }, {
            duration: 800,
            easing: 'swing',
            complete: function () {
                
            }
        }
    );

    $('#logo-text').delay(800)
        .animate({
            width: '55%'
        }, {
            duration: 800,
            easing: 'swing',
            complete: function () {
                
            }
        }
    );

    $("#logo-text span").each(function(index) {
        $(this).delay(1200 + 50 * -index).animate({ opacity: 1 }, 800);
    });


    $('#logo-subtext').delay(1200)
        .animate({
            margin: '28% 0 0 0',
            opacity: 1
        }, {
            duration: 500,
            easing: 'swing',
            complete: function () {
                
            }
        }
    );

    $('#header-background').delay(200)
        .animate({
            opacity: 0
        }, {
            duration: 2000,
            easing: 'swing',
            complete: function () {
                
            }
        }
    );
}

$(window).scroll(function() {
    var scrolledY = $(window).scrollTop();
    $('.background-shadow').css('background-position', 'center ' + (-scrolledY * 0.5) + 'px');
});