window.onload = function() {

    const url = new URL(window.location.href);
    if (!url.searchParams.has('lng')) {
        url.searchParams.set('lng', 'EN');
        window.history.replaceState({}, '', url.href);
    }
    //get the language
    const language = url.searchParams.get('lng');
    if (language === 'ES') {
        LanguageToES();
    }

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
    CreateSliderPoints(sl_dobuletrip_01, "sl_dobuletrip_01_points");
    ScrollSlider(sl_dobuletrip_01, "sl_dobuletrip_01", -1);

    document.querySelector('.image-detail-content').addEventListener('click', function(event) {
        event.stopPropagation();
    });

    setInterval(function() {
        ScrollSlider(sl_dobuletrip_01, "sl_dobuletrip_01", 1, false);
    }, 3000);
}

document.addEventListener('scroll', function() {

    const scrollProgressBar = document.getElementById('scroll-progress-bar');
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgressBar.style.width = scrollPercent + '%';

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
    const finalPosition = section.getBoundingClientRect().top + window.scrollY;
    console.log(finalPosition);
    window.scrollTo({
        top: finalPosition,
        behavior: 'smooth'
    });
}

const sl_dobuletrip_01 = [
    {
        "source": "https://raw.githubusercontent.com/MaxyLAND/repo-sources/refs/heads/main/maxyland-games/portfolio/doubletrip/letters_with_cloud.png",
        "alter": "Double Trip final logo",
        "description": "Double Trip final logo",
        "type": "image",
        "styles": "object-fit: contain;"
    },
    {
        "source": "https://raw.githubusercontent.com/MaxyLAND/repo-sources/refs/heads/main/maxyland-games/portfolio/doubletrip/level_example.png",
        "alter": "Double Trip level example",
        "description": "Double Trip level example",
        "type": "image",
        "styles": ""
    },
    {
        "source": "https://raw.githubusercontent.com/MaxyLAND/repo-sources/refs/heads/main/maxyland-games/portfolio/doubletrip/map_example.png",
        "alter": "Double Trip map example",
        "description": "Double Trip map example",
        "type": "image",
        "styles": ""
    }/*,
    {
        "source": "https://raw.githubusercontent.com/MaxyLAND/repo-sources/refs/heads/main/maxyland-games/portfolio/doubletrip/small_gameplay.webm",
        "alter": "Double Trip gameplay",
        "description": "Double Trip gameplay",
        "type": "video",
        "styles": ""
    }*/
];

var sl_selected = {
    "sl_dobuletrip_01": 1
};
var sl_delay = {
    "sl_dobuletrip_01": false
};
var sl_autoscroll = {
    "sl_dobuletrip_01": true
};
var sl_timeout = {
    "sl_dobuletrip_01": null
};

function ScrollSlider (slider, sliderId, addition, clicked) {
    if (sl_delay[sliderId]) {
        return;
    }
    if (clicked) {
        sl_autoscroll[sliderId] = false;
        if (sl_timeout[sliderId]) {
            clearTimeout(sl_timeout[sliderId]);
        }
        sl_timeout[sliderId] = setTimeout(function() {
            sl_autoscroll[sliderId] = true;
        }, 10000);
    }
    else if (!sl_autoscroll[sliderId])
        return;

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
        sl_delay[sliderId] = true;
    }, 5);

    SetActiveSliderPoint(slider, sliderId, sliderId + "_points");
    setTimeout(function() {
        sl_delay[sliderId] = false;
    }, 335);
}

function SetSource(item, source) {
    if (source.type === "video") {
        item.innerHTML = '<video style="'+source.styles+'" autoplay loop muted><source src="' + source.source + '" type="video/webm"></video>';
    }
    else if (source.type === "image") {
        item.innerHTML = '<img style="'+source.styles+'" src="' + source.source + '">';
    }
}

function SetActiveSliderPoint(slider, sliderId, pointsId) {
    var sliderPoints = document.getElementById(pointsId);
    for (var i = 0; i < slider.length; i++) {
        sliderPoints.children[i].classList.remove("slider-point-active");
    }
    sliderPoints.children[sl_selected[sliderId]].classList.add("slider-point-active");
}

function CreateSliderPoints(slider, pointsId) {
    const sliderCont = document.getElementById(pointsId);
    var newContent = "";
    for (var i = 0; i < slider.length; i++) {
        newContent += `
        <div class="slider-point" onclick="SetSliderPoint(' + i + ', sl_dobuletrip_01, \'sl_dobuletrip_01\')">
            <div></div>
        </div>
        `;
    }
    sliderCont.innerHTML = newContent;
}

function OpenImageDetail(slider, sliderId) {
    const src = slider[sl_selected[sliderId]];
    console.log(src);
    document.getElementById("image-detail-container").style.display = "block";
    if (src["type"] === "video") {
        document.getElementById("image-detail-image").innerHTML = `<video autoplay controls loop><source src="${src["source"]}" type="video/webm"></video>`;
    }
    else {
        document.getElementById("image-detail-image").innerHTML = `<img src="${src["source"]}" alt="${src["alter"]}">`;
    }
    document.getElementById("image-detail-title").innerHTML = `<span>${src["alter"]}</span>`;
    document.getElementById("image-detail-description").innerHTML = `<span>${src["description"]}</span>`;
}

function CloseImageDetail() {
    document.getElementById("image-detail-container").style.display = "none";
}

function AlterLanguages() {
    const list = document.getElementsByClassName('banner-language-list')[0];
    if (list.style.display === 'flex') {
        list.style.display = 'none';
    } else {
        list.style.display = 'flex';
    }
}

function ChangeLanguage(language) {
    AlterLanguages();
    
    const url = new URL(window.location.href);
    url.searchParams.set('lng', language);
    window.location.href = url.href;
}

function LanguageToES() {
    document.getElementById('logo-subtext').innerHTML = 
    '<span class="logo-font">DESARROLLADOR WEB <span id="logo-subtext-small" class="logo-font">Y DE</span> VIDEOJUEGOS</span>';

    document.getElementsByClassName('banner-content')[0].innerHTML = `
        <div class="banner-item" id="header-projects-item">
            <box-icon id="header-projects-svg" name='code-alt'></box-icon>
            <span id="header-projects"> Proyectos</span>
        </div>
        <div class="banner-item" id="header-aboutme-item">
            <box-icon id="header-aboutme-svg" name='user-check'></box-icon>
            <span id="header-aboutme"> Sobre mí</span>
        </div>
        <div class="banner-item" id="header-knowledge-item">
            <box-icon id="header-knowledge-svg" name='book'></box-icon>
            <span id="header-knowledge"> Conocimiento</span>
        </div>
        <div class="banner-item" id="header-contact-item">
            <box-icon id="header-contact-svg" name='envelope'></box-icon>
            <span id="header-contact"> Contacto</span>
        </div>
    `;
}