class NavBar {
    constructor() {
        this.menuListItems = [
            {icon: '../sources/img/summary_24dp.svg', text: 'Summary', link: '../pages/summary.html'},
            {icon: '../sources/img/add_task_24dp.svg', text: 'Add Task', link: '../pages/add-task.html'},
            {icon: '../sources/img/board_24dp.svg', text: 'Board', link: '../pages/board.html'},
            {icon: '../sources/img/contacts_24dp.svg', text: 'Contact', link: '../pages/contacts.html'},
            {icon: '../sources/img/policy_24dp.svg', text: 'Privacy Policy', link: '../pages/privacy-policy.html'},
            {icon: '../sources/img/copyright_24dp.svg', text: 'Legal Notice', link: '../pages/legal-notice.html'}
        ];
    }


    render(elementId) {
        const navdrawer = document.getElementById(elementId);

        const navElement = this.createNavElement();
        const ulElement = this.createUlElement();

        this.menuListItems.forEach(item => {
            const imgElement = this.createImgElement(item.icon);
            const liElement = this.createLiElement(item);
            const aElement = this.createAElement(item);

            liElement.appendChild(imgElement);
            liElement.appendChild(aElement);
            ulElement.appendChild(liElement);
        });

        navElement.appendChild(ulElement);
        navdrawer.appendChild(navElement);
    }

    createImgElement(src) {
        const imgElement = document.createElement('img');
        imgElement.src = src;
        return imgElement;
    }

    createNavElement() {
        return document.createElement('nav');
    }

    createUlElement() {
        return document.createElement('ul');
    }

    createLiElement(item) {
        const liElement = document.createElement('li');
        return liElement
    }

    createAElement(item) {
        const aElement = document.createElement('a');
        aElement.textContent = item.text;
        aElement.href = item.link || '#';
        return aElement;
    }


    detectActiveNavLink() {
        const currentPath = window.location.pathname; // Aktuellen Pfad ermitteln
        const navLinks = document.querySelectorAll('#nav-drawer a'); // Alle a-Elemente im Navbar auswählen

        navLinks.forEach(link => {
            // Überprüfen, ob der Link den aktuellen Pfad enthält
            if (currentPath.includes(link.getAttribute('href'))) {
                link.classList.add('focused'); // Hinzufügen der CSS-Klasse 'focused'
            }
        });
    }
}

const navDrawer = new NavBar();
navDrawer.render('nav-drawer');
navDrawer.detectActiveNavLink();

