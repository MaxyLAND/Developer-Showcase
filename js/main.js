document.addEventListener('scroll', function() {
    const bannerLine = document.getElementsByClassName('banner-line')[0];
    const bannerGradient = document.getElementsByClassName('banner-gradient')[0];
    const bannerGradientSmall = document.getElementsByClassName('banner-gradient-small')[0];
    const bannerContent = document.getElementsByClassName('banner-content')[0];
    const bannerLogo = document.getElementsByClassName('banner-logo')[0];
    const scrollPosition = window.scrollY;


    if (scrollPosition > 250) {
        bannerLine.classList.add('opacity-1');
        bannerGradient.classList.add('opacity-1');
        bannerGradientSmall.classList.add('opacity-1');

        bannerContent.classList.add('center-items-anim');
        bannerLogo.classList.add('scale-1-anim');

    } else {
        bannerLine.classList.remove('opacity-1');
        bannerGradient.classList.remove('opacity-1');
        bannerGradientSmall.classList.remove('opacity-1');

        bannerContent.classList.remove('center-items-anim');
        bannerLogo.classList.remove('scale-1-anim');
    }

    const header = document.getElementById('header');
    if (scrollPosition > 150) {
        header.classList.add('header-small');
    } else {
        header.classList.remove('header-small');
    }
});