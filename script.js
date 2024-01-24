const menuItemLinks = document.querySelectorAll('.menu-item');
const windowPathname = window.location.pathname;

menuItemLinks.forEach(menuItem => {

    if (menuItem.href.includes(windowPathname)) {
        setTimeout(() => {
            menuItem.classList.add('menu-item-active');
            const img = menuItem.querySelector('img');
            const src = img.getAttribute('src');
            const newSrc = src.replace('.svg', '_blue.svg');
            img.setAttribute('src', newSrc);
        }, 24);
    }
});
