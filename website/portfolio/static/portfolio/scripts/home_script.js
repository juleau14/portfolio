function start() {

    scrollButton = document.querySelector(".scroll_button");
    
    window.addEventListener("scroll", firstScroll);
    scrollButton.addEventListener("click", nextScroll);

}


function firstScroll() {
    
    pictureDiv = document.querySelector(".picture_div");
    welcomeText = document.querySelector(".welcome_text_div");
    navButtons = document.querySelector(".nav_buttons_div");
    scrollButton = document.querySelector(".scroll_button_div");
    previousButton = document.querySelector(".previous_button_div");

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
    }

}


function nextScroll() {
    var scrolled = window.scrollY;

    aboutMe = document.querySelector(".about_me_div"); 
}


start();