const menuItemLinks = document.querySelectorAll('.menu-item');
const windowPathname = window.location.pathname;

console.log(menuItemLinks);
console.log(windowPathname);


menuItemLinks.forEach(menuItem => {

    const img = menuItem.querySelector('img');
    const src = img.getAttribute('src');

    if (menuItem.href.includes(windowPathname)) {
        menuItem.classList.add('menu-item-active');
        menuItem.style.color = '#1677FF';
        
        const newSrc = src.replace('.svg', '_blue.svg')
        img.setAttribute('src', newSrc)
    }
});