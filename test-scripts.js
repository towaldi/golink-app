// // select menu-list-items
// let menuListItems = document.querySelectorAll('.menu-item');


// menuListItems.forEach(listItem => {
//     listItem.addEventListener('click', function () {
//         // remove class and switch to black icon for all items
//         menuListItems.forEach(item => {
//             item.classList.remove('menu-item-active');
//             let img = item.querySelector('img');
//             let label = item.querySelector('h4');
//             switchToBlackIcon(img);
//             switchTextToBlack(label);
//         });

//         // add class to clicked item and switch to blue icon
//         listItem.classList.add('menu-item-active');
//         let img = listItem.querySelector('img');
//         let label = listItem.querySelector('h4');
//         switchToBlueIcon(img);
//         switchTextToBlue(label);
//     });
// });


// function switchToBlackIcon(img) {
//     let src = img.src;
//     if (src.includes('_blue')) {
//         let newSrc = src.replace('_blue.svg', '.svg');
//         img.setAttribute('src', newSrc);
//     }
// }


// function switchToBlueIcon(img) {
//     let src = img.src;
//     // checks if string "_blue" already exists
//     if (!src.includes('_blue')) {
//         let newSrc = src.replace('.svg', '_blue.svg');
//         img.setAttribute('src', newSrc);
//     }
// }


// function switchTextToBlack(label) {
//     label.style.color = '#000';
// }


// function switchTextToBlue(label) {
//     label.style.color = '#1677FF';
// }



// class MenuItemManager {
//     constructor() {
//         this.menuItems = document.querySelectorAll('.menu-item');
//         this.init();
//     }

//     init() {
//         this.checkAndSetSelectedMenuItem();
//         this.addEventListeners();
//     }

//     selectMenuItem(index) {
//         const selectedItem = this.menuItems[index];
//         this.resetMenuItems();
//         this.setMenuItemActive(selectedItem);
//         localStorage.setItem('selectedMenuItemIndex', index);
//     }

//     checkAndSetSelectedMenuItem() {
//         const selectedMenuItemIndex = localStorage.getItem('selectedMenuItemIndex');
//         if (selectedMenuItemIndex !== null) {
//             this.setMenuItemActive(this.menuItems[selectedMenuItemIndex]);
//         }
//     }

//     resetMenuItems() {
//         this.menuItems.forEach(item => this.setMenuItemInactive(item));
//     }

//     setMenuItemActive(item) {
//         item.classList.add('menu-item-active');
//         this.updateMenuItemStyles(item, true);
//     }

//     setMenuItemInactive(item) {
//         item.classList.remove('menu-item-active');
//         this.updateMenuItemStyles(item, false);
//     }

//     updateMenuItemStyles(item, isActive) {
//         const img = item.querySelector('img');
//         const label = item.querySelector('h4');

//         if (isActive) {
//             this.switchToBlueIcon(img);
//             this.switchTextToBlue(label);
//         } else {
//             this.switchToBlackIcon(img);
//             this.switchTextToBlack(label);
//         }
//     }

//     switchToBlackIcon(img) {
//         const src = img.src;
//         if (src.includes('_blue')) {
//             const newSrc = src.replace('_blue.svg', '.svg');
//             img.setAttribute('src', newSrc);
//         }
//     }

//     switchToBlueIcon(img) {
//         const src = img.src;
//         if (!src.includes('_blue')) {
//             const newSrc = src.replace('.svg', '_blue.svg');
//             img.setAttribute('src', newSrc);
//         }
//     }

//     switchTextToBlack(label) {
//         label.style.color = '#000';
//     }

//     switchTextToBlue(label) {
//         label.style.color = '#1677FF';
//     }

//     addEventListeners() {
//         this.menuItems.forEach((item, index) => {
//             item.addEventListener('click', () => this.selectMenuItem(index));
//         });
//     }
// }

// // Instanz der Klasse erstellen
// const menuItemManager = new MenuItemManager();