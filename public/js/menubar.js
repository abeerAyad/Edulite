const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuItems = document.querySelectorAll('.menu-item');

hamburgerBtn.addEventListener('click', () => {
    if (mobileMenu.classList.contains('-translate-x-full')) {
        mobileMenu.classList.remove('-translate-x-full', 'animate__fadeOutLeft');
        mobileMenu.classList.add('animate__fadeInLeft');

        menuItems.forEach((item, index) => {
            item.classList.add('animate__animated', 'animate__backInLeft');
            item.style.animationDelay = `${index * 0.1}s`; 
        });
    } else {
        mobileMenu.classList.remove('animate__fadeInLeft');
        mobileMenu.classList.add('animate__fadeOutLeft');

        menuItems.forEach((item) => {
            item.classList.remove('animate__backInLeft');
            item.style.animationDelay = '0s'; 
        });

        setTimeout(() => mobileMenu.classList.add('-translate-x-full'), 500);
    }
});


