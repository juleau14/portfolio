var pythonPosition = 0;
var htmlPosition = 0;
var cssPosition = 0;
var djangoPosition = 0;

function start() {

    const scrollButton = document.querySelector(".scroll_button");
    const previousButton = document.querySelector(".previous_button");
    const pythonButton = document.querySelector(".python_button");
    const htmlButton = document.querySelector(".html_button");
    const cssButton = document.querySelector(".css_button");
    const djangoButton = document.querySelector(".django_button");

    window.addEventListener("scroll", firstScroll);
    window.addEventListener("load", firstScroll);
    window.addEventListener("scroll", animateAboutMe);

    scrollButton.addEventListener("click", nextScroll);
    previousButton.addEventListener("click", previousScroll);
    
    pythonButton.addEventListener("click", modifPython);
    htmlButton.addEventListener("click", modifHtml);
    cssButton.addEventListener("click", modifCss);
    djangoButton.addEventListener("click", modifDjango);

}


function firstScroll() {
    
    const pictureDiv = document.querySelector(".picture_div");
    const welcomeText = document.querySelector(".welcome_text_div");
    const navButtons = document.querySelector(".nav_buttons_div");
    const scrollButton = document.querySelector(".scroll_button_div");
    const previousButton = document.querySelector(".previous_button_div");
    const scrollButtonText = document.querySelector(".scroll_button");

    var scrolled = window.scrollY;

    if (scrolled > 0) {

        // hiding picture on the right 
        pictureDiv.style.marginRight = "-40%";
        pictureDiv.style.visibility = "hidden";

        // make welcome text larger
        welcomeText.style.width = "100%";

        // make nav buttons larger
        navButtons.style.width = "100%";

        // display previous button 
        scrollButton.style.height = "50%";
        previousButton.style.height = "50%";

        // change next scroll text
        scrollButtonText.innerHTML = "&lt next &gt";

    }

    else {

        // displayer picture on the right 
        pictureDiv.style.marginRight = "0";
        pictureDiv.style.visibility = "visible";

        // make welcome text smaller
        welcomeText.style.width = "60%";

        // make nav buttons smaller
        navButtons.style.width = "60%";

        // hide previous button 
        scrollButton.style.height = "100%";
        previousButton.style.height = "0";

        // change next scroll text
        scrollButtonText.innerHTML = "click to scroll";

    }

}


function nextScroll() {
    
    var scrolled = window.scrollY;

    const aboutMe = document.querySelector(".about_me_div");
    const aboutMeToTop = aboutMe.getBoundingClientRect().top + window.scrollY;

    const skills = document.querySelector(".skills_div");
    const skillsToTop = skills.getBoundingClientRect().top + window.scrollY;

    if (scrolled < aboutMeToTop) {
        window.scrollBy(0, aboutMeToTop);
    } 
    
    else if (scrolled < skillsToTop) {
        window.scrollBy(0, skillsToTop);
    }

}


function previousScroll() {

    var scrolled = window.scrollY;

    const aboutMe = document.querySelector(".about_me_div");
    const aboutMeToTop = aboutMe.getBoundingClientRect().top + window.scrollY;

    const skills = document.querySelector(".skills_div");
    const skillsToTop = skills.getBoundingClientRect().top + window.scrollY;

    if (scrolled < aboutMeToTop + 1) {
        window.scrollTo(0, 0);
    }

    else if (scrolled < skillsToTop + 1) {
        window.scrollTo(0, aboutMeToTop);
    }

}


function animateAboutMe() {

    const aboutMe = document.querySelector(".about_me_div");
    const animationRectangle = document.querySelector(".about_me_animation_square");
    var aboutMeToTop = aboutMe.getBoundingClientRect().top;

    if (aboutMeToTop <= 0) {

        animationRectangle.style.marginLeft = "150vw";

    }

}


function updateSkills() {
    const pythonContent = document.querySelector(".python_content_div");
    const pythonButton = document.querySelector(".python_button");

    const htmlContent = document.querySelector(".html_content_div");
    const htmlButton = document.querySelector(".html_button");

    const cssContent = document.querySelector(".css_content_div");
    const cssButton = document.querySelector(".css_button");

    const djangoContent = document.querySelector(".django_content_div");
    const djangoButton = document.querySelector(".django_button");

    if (pythonPosition == 0) {
        pythonContent.style.width = "0";
        pythonButton.innerHTML = ">";
    }

    else {
        pythonContent.style.width = "15vw";
        pythonButton.innerHTML = "<";
    }

    if (htmlPosition == 0) {
        htmlContent.style.width = "0";
        htmlButton.innerHTML = ">";
    }

    else {
        htmlContent.style.width = "15vw";
        htmlButton.innerHTML = "<"
    }

    if (cssPosition == 0) {
        cssContent.style.width = "0";
        cssButton.innerHTML = ">";
    }

    else {
        cssContent.style.width = "15vw";
        cssButton.innerHTML = "<";
    }
 
    if (djangoPosition == 0){
        djangoContent.style.width = "0";
        djangoButton.innerHTML = ">";
    }

    else {
        djangoContent.style.width = "15vw";
        djangoButton.innerHTML = "<";
    }
}


function modifPython() {
    if (pythonPosition == 0) {
        pythonPosition = 1;
        htmlPosition = 0;
        cssPosition = 0;
        djangoPosition = 0;
        updateSkills();
    }

    else {
        pythonPosition = 0;
        updateSkills();
    }
}


function modifHtml() {
    if (htmlPosition == 0) {
        htmlPosition = 1;
        pythonPosition = 0;
        cssPosition = 0;
        djangoPosition = 0;
        updateSkills();
    }

    else {
        htmlPosition = 0;
        updateSkills();
    }
}


function modifCss() {
    if (cssPosition == 0) {
        cssPosition = 1;
        pythonPosition = 0;
        htmlPosition = 0;
        djangoPosition = 0;
        updateSkills();
    }

    else {
        cssPosition = 0;
        updateSkills();
    }
}


function modifDjango() {
    if (djangoPosition == 0) {
        djangoPosition = 1;
        pythonPosition = 0;
        htmlPosition = 0;
        cssPosition = 0;
        updateSkills();
    }

    else {
        djangoPosition = 0;
        updateSkills();
    }
}


start();