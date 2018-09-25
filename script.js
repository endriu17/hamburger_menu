'use strict'

var hamburgerBtn = document.querySelector('.hidden-nav_icon');
var hiddenMenu = document.querySelector('.hidden-nav_menu');
var closeBtn = document.querySelector('.hidden-nav_menu a.hidden-close_icon img');
var menuListHidden = document.querySelector('.hidden-menu_list');
var logoImage = document.querySelector('.hidden-menu_logo');
var x = window.matchMedia("(max-width: 768px)");

hamburgerBtn.addEventListener('click', function () {
    menuListHidden.style.display = 'block';
    closeBtn.style.display = 'block';
    hamburgerBtn.style.display = 'none';
    logoImage.style.display = 'none';
})

closeBtn.addEventListener('click', function () {
    hamburgerBtn.style.display = 'block';
    logoImage.style.display = 'block';
    menuListHidden.style.display = 'none';
    closeBtn.style.display = 'none';
})

function mediaCheck(x) {
    if (x.matches) { // If media query matches
        hamburgerBtn.style.display = 'block';
        logoImage.style.display = 'block';
        menuListHidden.style.display = 'none';
        closeBtn.style.display = 'none';
    }
}
// Attach listener function on state changes
mediaCheck(x);
x.addListener(mediaCheck);