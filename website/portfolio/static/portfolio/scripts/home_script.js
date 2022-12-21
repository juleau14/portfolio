function start() {

    const scrollButton = document.querySelector(".scroll_button");
    const previousButton = document.querySelector(".previous_button");
    
    window.addEventListener("scroll", firstScroll);
    window.addEventListener("scroll", animateAboutMe);
    scrollButton.addEventListener("click", nextScroll);
    previousButton.addEventListener("click", previousScroll);

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
    const aboutMeText = document.querySelector(".about_me_text");

    if (scrolled < aboutMeToTop) {
        window.scrollBy(0, aboutMeToTop);
    }

}


function previousScroll() {

    var scrolled = window.scrollY;

    const aboutMe = document.querySelector(".about_me_div");
    const aboutMeToTop = aboutMe.getBoundingClientRect().top + window.scrollY;

    if (scrolled < aboutMeToTop + 1) {

        window.scrollTo(0, 0);

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


start();