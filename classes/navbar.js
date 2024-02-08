/**
 * 'NavBar' represents the "navbar" section in all html pages
 */
class NavBar {

    /**
     * Arrays with 'primaryListItem' objects
     * -> 'primaryListItem'
     * -> 'secondaryListItem'
     */
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

    /**
     * Creates a new 'NavBar' instance
     * -> executes all render/detect methods
     */
    constructor() {
        this.renderNavBar();
        this.renderPrimaryItems();
        this.renderSecondaryItems();
        this.detectActiveItem()
    }

    /**
     * Method render navbar container
     */
    renderNavBar() {
        const navDrawer = document.getElementById('nav-drawer');
        navDrawer.innerHTML += this.createNavStructure();
    }

    /**
     * Renders 'primaryListItems'
     */
    renderPrimaryItems() {
        const liItems = document.getElementById('primary-list-items');
        liItems.innerHTML = '';

        this.primaryListItems.forEach(item => {
            const liElement = this.createLiElement(item);
            liItems.innerHTML += liElement;
        });
    }

    /**
     * Renders  'secondaryListItems'
     */
    renderSecondaryItems() {
        const liItems = document.getElementById('secondary-list-items');
        liItems.innerHTML = '';

        this.secondaryListItems.forEach(item => {
            const liElement = this.createLiElement(item);
            liItems.innerHTML += liElement;
        });
    }

    /**
     * Creates the navigation structure HTML code.
     * @returns {string} - The HTML code for the navigation structure, including logo, primary, and secondary navigation elements.
     */
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

    /**
     * Creates a list item HTML code based on the provided item data
     * @param {*} item - The data object representing the item
     * @returns {string} - The HTML code for the list item
     */
    createLiElement(item) {
        return /*html*/ `<a class="list-item" href="${item.url}">
                            <img src="${item.icon}">
                            ${item.text}
                        </a>`;
    }

    /**
     * Detects the active list item base on the current window location and updates its styling
     * -> Assumes that each list item has a class 'list-item' and an anchor tag containing an 'href' attribute
     * -> Also assumes that list item icons are represented by 'img' tags with 'src' attributes.
     */
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

/**
 * Creates an instance of the 'NavBar' class and assigns it to the variable 'navDrawer'.
 * @type {NavBar}
 */
const navDrawer = new NavBar();