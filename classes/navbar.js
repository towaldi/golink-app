class NavBar {

    primaryListItems = [
        {icon: '../sources/img/summary_24dp.svg', text: 'Summary', url: '../pages/summary.html'},
        {icon: '../sources/img/add_task_24dp.svg', text: 'Add Task', url: '../pages/add-task.html'},
        {icon: '../sources/img/board_24dp.svg', text: 'Board', url: '../pages/board.html'},
        {icon: '../sources/img/contacts_24dp.svg', text: 'Contact', url: '../pages/contacts.html'},
    ];

    secondaryListItems = [
        {icon: '../sources/img/policy_24dp.svg', text: 'Privacy Policy', url: '../pages/privacy-policy.html'},
        {icon: '../sources/img/copyright_24dp.svg', text: 'Legal Notice', url: '../pages/legal-notice.html'}
    ];


    constructor() {
        this.renderNavBar();
        this.renderPrimaryItems();
        this.renderSecondaryItems();
        this.detectActiveItem()
    }


    renderNavBar() {
        const navDrawer = document.getElementById('nav-drawer');
        navDrawer.innerHTML += this.createNavStructure();
    }


    renderPrimaryItems() {
        const liItems = document.getElementById('primary-list-items');
        liItems.innerHTML = '';

        this.primaryListItems.forEach(item => {
            const liElement = this.createLiElement(item);
            liItems.innerHTML += liElement;
        });
    }


    renderSecondaryItems() {
        const liItems = document.getElementById('secondary-list-items');
        liItems.innerHTML = '';

        this.secondaryListItems.forEach(item => {
            const liElement = this.createLiElement(item);
            liItems.innerHTML += liElement;
        });
    }


    createNavStructure() {
        return /*html*/ `<!-- logo -->
                        <div class="logo">
                            <img src="../sources/img/icon_golink.svg" alt="">
                            <h1>GoLink</h1>
                        </div>
                        <!-- nav -->
                        <nav id="nav" class="nav">
                            <ul id="primary-list-items">
                            <!-- (implementation primary li elements) -->
                            </ul>
                            <ul id="secondary-list-items">
                            <!-- (implementation secondary li elements) -->
                            </ul>
                        </nav>`;
    }


    createLiElement(item) {
        return /*html*/ `<a class="list-item" href="${item.url}">
                            <img src="${item.icon}">
                            ${item.text}
                        </a>`;
    }


    detectActiveItem() {
        const currentPath = window.location.pathname;
        const liItems = document.querySelectorAll('.list-item');
        
        liItems.forEach(item => {
            if (item.href.includes(currentPath)) {
                setTimeout(() => {
                    item.classList.add('active-link');

                    const img = item.querySelector('img');
                    const src = img.getAttribute('src');
                    const newSrc = src.replace('.svg', '_blue.svg');
                    img.setAttribute('src', newSrc);

                }, 12);
            }
        });
    }  
}

const navDrawer = new NavBar();