window.onload = function() { 

    $("#logo-text span").each(function(index) {
        $(this).delay(1900 + 80 * -index).animate({ opacity: 1 }, 800);
    });
}

/*$(window).scroll(function() {
    var scrolledY = $(window).scrollTop();
    $('.background-shadow').css('background-position-y', (-scrolledY * 0.5) + 'px');
});*/