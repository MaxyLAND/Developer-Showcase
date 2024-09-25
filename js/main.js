window.onload = function() {
    document.getElementById("header-projects-item").addEventListener("click", function() {
        scrollToSection('projects');
    });
    document.getElementById("header-aboutme-item").addEventListener("click", function() {
        scrollToSection('aboutme');
    });
    document.getElementById("header-knowledge-item").addEventListener("click", function() {
        scrollToSection('knowledge');
    });
    document.getElementById("header-contact-item").addEventListener("click", function() {
        scrollToSection('contact');
    });
}

document.addEventListener('scroll', function() {

    //check scroll poss and modify the header
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


    // Highlight the current section in the navigation bar
    const sections = document.querySelectorAll('.section');
    const highlightTextProjects = document.getElementById('header-projects');
    const highlightSvgProjects = document.getElementById('header-projects-svg');
    const highlightTextAboutMe = document.getElementById('header-aboutme');
    const highlightSvgAboutMe = document.getElementById('header-aboutme-svg');
    const highlightTextKnowledge = document.getElementById('header-knowledge');
    const highlightSvgKnowledge = document.getElementById('header-knowledge-svg');
    const highlightTextContact = document.getElementById('header-contact');
    const highlightSvgContact = document.getElementById('header-contact-svg');
    let maxVisibleHeight = 0;
    let mostVisibleElement = null;

    if (scrollPosition === 0) {
        mostVisibleElement = null;
    } else if (document.documentElement.clientHeight + window.scrollY >=
        (document.documentElement.scrollHeight ||
          document.documentElement.clientHeight)) {
        mostVisibleElement = sections[sections.length - 1];
    }
    else {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const visibleHeight = Math.min(rect.bottom, window.innerHeight - 50) - Math.max(rect.top, 50);

            if (visibleHeight > maxVisibleHeight && visibleHeight > 0) {
                maxVisibleHeight = visibleHeight;
                mostVisibleElement = section;
            }
        });
    }

    highlightTextProjects.classList.remove('header-highlight');
    highlightSvgProjects.classList.remove('header-highlight-svg');
    highlightTextAboutMe.classList.remove('header-highlight');
    highlightSvgAboutMe.classList.remove('header-highlight-svg');
    highlightTextKnowledge.classList.remove('header-highlight');
    highlightSvgKnowledge.classList.remove('header-highlight-svg');
    highlightTextContact.classList.remove('header-highlight');
    highlightSvgContact.classList.remove('header-highlight-svg');

    // Highlight the most visible section
    if (mostVisibleElement) {
        switch (mostVisibleElement.id) {
            case 'projects':
                highlightTextProjects.classList.add('header-highlight');
                highlightSvgProjects.classList.add('header-highlight-svg');
                break;
            case 'aboutme':
                highlightTextAboutMe.classList.add('header-highlight');
                highlightSvgAboutMe.classList.add('header-highlight-svg');
                break;
            case 'knowledge':
                highlightTextKnowledge.classList.add('header-highlight');
                highlightSvgKnowledge.classList.add('header-highlight-svg');
                break;
            case 'contact':
                highlightTextContact.classList.add('header-highlight');
                highlightSvgContact.classList.add('header-highlight-svg');
                break;
        }
    }
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}