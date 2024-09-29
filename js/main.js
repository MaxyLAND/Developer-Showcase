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
    ScrollSlider(sl_dobuletrip_01, "sl_dobuletrip_01", -1);
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
        const centerY = window.innerHeight / 2;
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const isInView = rect.top <= centerY && rect.bottom >= centerY;
    
            if (isInView) {
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

const sl_dobuletrip_01 = [
    "https://raw.githubusercontent.com/MaxyLAND/repo-sources/refs/heads/main/maxyland-games/portfolio/doubletrip/letters_with_cloud.png",
    "https://raw.githubusercontent.com/MaxyLAND/repo-sources/refs/heads/main/maxyland-games/portfolio/doubletrip/level_example.png",
    "https://raw.githubusercontent.com/MaxyLAND/repo-sources/refs/heads/main/maxyland-games/portfolio/doubletrip/map_example.png",
    "https://raw.githubusercontent.com/MaxyLAND/repo-sources/refs/heads/main/maxyland-games/portfolio/doubletrip/small_gameplay.webm"
];

var sl_selected = {
    "sl_dobuletrip_01": 1
};
var delay = false;

function ScrollSlider (slider, sliderId, addition) {
    if (delay) {
        return;
    }

    sl_selected[sliderId] += addition;
    if (sl_selected[sliderId] < 0) {
        sl_selected[sliderId] = slider.length - 1;
    }
    else if (sl_selected[sliderId] >= slider.length) {
        sl_selected[sliderId] = 0;
    }

    var next = sl_selected[sliderId];
    var prev = sl_selected[sliderId];
    if (addition > 0) {
        next++;
        if (next >= slider.length) {
            next = 0;
        }
        prev--;
        if (prev < 0) {
            prev = slider.length - 1;
        }
    }
    else {
        next--;
        if (next < 0) {
            next = slider.length - 1;
        }
        prev++;
        if (prev >= slider.length) {
            prev = 0;
        }
    }

    console.log("prev: " + prev + " selected: " + sl_selected[sliderId] + " next: " + next);

    var sliderCont = document.getElementById(sliderId);
    if (addition < 0) { //go left
        sliderCont.children[0].style.cssText = 'transition: none; transform: translateX(0%);';
        sliderCont.children[1].style.cssText = 'transition: none; transform: translateX(-100%);';
        sliderCont.children[2].style.cssText = 'transition: none; transform: translateX(-200%);';
        SetSource(sliderCont.children[0], slider[prev]);
        SetSource(sliderCont.children[1], slider[sl_selected[sliderId]]);
        SetSource(sliderCont.children[2], slider[next]);
    }
    else { //go right
        sliderCont.children[0].style.cssText = 'transition: none; transform: translateX(200%);';
        sliderCont.children[1].style.cssText = 'transition: none; transform: translateX(100%);';
        sliderCont.children[2].style.cssText = 'transition: none; transform: translateX(0%);';
        SetSource(sliderCont.children[0], slider[next]);
        SetSource(sliderCont.children[1], slider[sl_selected[sliderId]]);
        SetSource(sliderCont.children[2], slider[prev]);
    }

    setTimeout(function() {
        sliderCont.children[0].style.cssText = 'transform: translateX(100%);';
        sliderCont.children[1].style.cssText = 'transform: translateX(0%);';
        sliderCont.children[2].style.cssText = 'transform: translateX(-100%);';
        delay = true;
    }, 1);

    setTimeout(function() {
        delay = false;
    }, 330);
}

function SetSource(item, source) {
    console.log(source);
    if (source.includes(".webm")) {
        item.innerHTML = '<video autoplay loop muted><source src="' + source + '" type="video/webm"></video>';
    }
    else {
        item.innerHTML = '<img src="' + source + '">';
    }
}