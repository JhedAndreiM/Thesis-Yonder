import './bootstrap';
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const menuButtonNav = document.querySelector('.menu-buttonNav');
    const slideNav = document.querySelector('.slide-nav');

    // Add click event to the menu button
    menuButton.addEventListener('click', function() {
        slideNav.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
    slideNav.addEventListener('click', function() {
        if(slideNav.classList.toggle('active')==true){
            console.log("true");
        }
        document.body.classList.toggle('no-scroll');
    });
    menuButtonNav.addEventListener('click', function() {
        slideNav.classList.toggle('not-active');
        document.body.classList.toggle('no-scroll');
    });

    
});
