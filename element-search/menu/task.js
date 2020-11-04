let menuLink = document.querySelectorAll('.menu__link');
let subMenu = document.querySelectorAll('.menu_sub');

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].onclick = function () {
        let currentSubMenu = this.nextElementSibling;
        if (currentSubMenu.classList.contains('menu_active')) { 
            currentSubMenu.classList.remove('menu_active');
            return false;
        };
        if (currentSubMenu) {
            for (let i = 0; i < subMenu.length; i++) {
            subMenu[i].classList.remove('menu_active');
            };
            currentSubMenu.classList.add('menu_active');
            return false;
        };
    };
};