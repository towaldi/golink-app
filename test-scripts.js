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




// const collapseExtendBtn = document.getElementById('collapse-extend-btn');

// collapseExtendBtn.addEventListener('click', event => {
//     const img = collapseExtendBtn.querySelector('img');
//     const src = img.src;

//     if (src.includes('keyboard_double_arrow_left_24dp')) {
//         menuItemLinks.forEach(menuItem => {
//             menuItem.style.width = 'fit-content';
//             const h4Element = menuItem.querySelectorAll('h4');
//             h4Element.forEach(h4 => {
//                 h4.style.display = 'none';
//             });
//         });
//     } else {

//     }

//     console.log(src);
// });




// const menuItemLinks = document.querySelectorAll('.menu-item');
// const windowPathname = window.location.pathname;

// console.log(menuItemLinks);

// menuItemLinks.forEach(menuItem => {

//     if (menuItem.href.includes(windowPathname)) {
//         setTimeout(() => {
//             menuItem.classList.add('menu-item-active');
//             const img = menuItem.querySelector('img');
//             const src = img.getAttribute('src');
//             const newSrc = src.replace('.svg', '_blue.svg');
//             img.setAttribute('src', newSrc);
//         }, 24);
//     }
// });




// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <!-- link css -->
//     <link rel="stylesheet" href="../style.css">
//     <title>GoLink | Kanban Project Managment Tool</title>
// </head>

// <body >
//     <!-- nav drawer -->
//     <header class="nav-drawer">
//         <!-- nav-list-items-->
//         <div class="nav-list-items">
//             <!-- logo -->
//             <div class="logo">
//                 <img src="../sources/img/icon_golink.svg" alt="">
//                 <h1>GoLink</h1>
//             </div>
//             <a class="menu-item" href="../pages/summary.html">
//                 <img src="../sources/img/summary_24dp.svg" alt="summary">
//                 <h4>Summary</h4>
//             </a>
//             <a class="menu-item" href="../pages/add-task.html">
//                 <img src="../sources/img/add_task_24dp.svg" alt="add task">
//                 <h4>Add Task</h4>
//             </a>
//             <a class="menu-item" href="../pages/board.html">
//                 <img src="../sources/img/board_24dp.svg" alt="board">
//                 <h4>Board</h4>
//             </a>
//             <a class="menu-item" href="../pages/contacts.html">
//                 <img src="../sources/img/contacts_24dp.svg" alt="contacts">
//                 <h4>Contact</h4>
//             </a>
//         </div>
//         <div>
//             <a class="menu-item" href="../pages/privacy-policy.html">
//                 <img src="../sources/img/policy_24dp.svg" alt="policy">
//                 <h4>Privacy Policy</h4>
//             </a>
//             <a class="menu-item" href="../pages/legal-notice.html">
//                 <img src="../sources/img/copyright_24dp.svg" alt="legal">
//                 <h4>Legal notice</h4>
//             </a>
//         </div>
//     </header>

//     <main class="main">
//         <!-- toolbar -->
//         <div class="toolbar">
//             <h4>Kanban Project Management Tool</h4>
//             <!-- help & user -->
//             <div class="help-user">
//                 <button class="btn-icon">
//                     <img src="../sources/img/help_24dp.svg" alt="help">
//                 </button>
//                 <div class="user">
//                     <img src="../sources/img/avatar_man_1.svg" alt="avatar">
//                     <h4>John Doe</h4>
//                 </div>
//             </div>
//         </div>

//         <!-- content -->

//     </main>

//     <!-- link js -->
//     <script src="../navbar.js"></script>
// </body>
// </html>