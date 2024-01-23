window.onload = function() { 
    $('#logo-l').delay(100)
        .animate({
            opacity: 1,
            height: '100%',
            width: '100%'
        }, {
            duration: 500,
            easing: 'swing'
        }
    );

    $('#logo-m').delay(200)
        .animate({
            opacity: 1,
            height: '100%',
            width: '100%'
        }, {
            duration: 500,
            easing: 'swing'
        }
    );

    $('#logo-m-bright').delay(550)
        .animate({
            'background-position-x': '20vw'
        }, {
            duration: 2500,
            easing: 'easeOutExpo'
        }
    );

    $('#logo-l-bright').delay(550)
        .animate({
            'background-position-x': '20vw'
        }, {
            duration: 2500,
            easing: 'easeOutExpo'
        }
    );

    $('#logo-logo').delay(800)
        .animate({
            margin: '5% 0 0 5%'
        }, {
            duration: 800,
            easing: 'swing'
        }
    );

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
            easing: 'swing',
            complete: function () {
                HeaderArrowsLoop();
            }
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

function HeaderArrowsLoop() {
    HeaderArrowAnim("header-arrow-down-1")

    setTimeout(function() {
        HeaderArrowAnim("header-arrow-down-2");
    }, 666);

    setTimeout(function() {
        HeaderArrowAnim("header-arrow-down-3");
    }, 1333);
}

function HeaderArrowAnim(id) {
    $(`#${id}`).css("opacity", 1);
    $(`#${id}`).css("margin", '0% 0 50% 0');
    $(`#${id}`).delay(0)
        .animate({
            margin: '50% 0 0% 0',
            opacity: 0
        }, {
            duration: 2000,
            easing: 'easeOutExpo',
            complete: function () {
                HeaderArrowAnim(id);

            }
        }
    );
}

$(window).scroll(function() {
    var scrolledY = $(window).scrollTop();
    $('.background-shadow').css('background-position-y', (-scrolledY * 0.5) + 'px');
});