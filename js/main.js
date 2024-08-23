document.addEventListener('scroll', function() {
    const banner = document.getElementById('banner');
    const bannerLine = document.getElementById('banner-line');
    const bannerGradient = document.getElementById('banner-gradient');
    const bannerGradientSmall = document.getElementById('banner-gradient-small');
    const bannerContent = document.getElementById('banner-content');
    const bannerLogo = document.getElementById('banner-logo');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 250) {
        banner.classList.add('enter-animation');
        banner.classList.remove('exit-animation');

        bannerLine.classList.add('fade-in-anim');
        bannerLine.classList.remove('fade-out-anim');
        bannerGradient.classList.add('fade-in-anim');
        bannerGradient.classList.remove('fade-out-anim');
        bannerGradientSmall.classList.add('fade-in-anim');
        bannerGradientSmall.classList.remove('fade-out-anim');

        bannerContent.classList.add('center-items-anim');
        bannerLogo.classList.add('scale-1-anim');

    } else if (banner.classList.contains('enter-animation')) {
        banner.classList.add('exit-animation');
        banner.classList.remove('enter-animation');

        bannerLine.classList.add('fade-out-anim');
        bannerLine.classList.remove('fade-in-anim');
        bannerGradient.classList.add('fade-out-anim');
        bannerGradient.classList.remove('fade-in-anim');
        bannerGradientSmall.classList.add('fade-out-anim');
        bannerGradientSmall.classList.remove('fade-in-anim');

        bannerContent.classList.remove('center-items-anim');
        bannerLogo.classList.remove('scale-1-anim');
    }
});