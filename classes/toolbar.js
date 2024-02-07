/**
 * 'ToolBar' represents the "toolbar" section in all html pages
 */
class ToolBar {

    /**
     * Creates a new 'ToolBar' instance
     * -> executes all render/update methods
     */
    constructor() {
        this.renderToolBar();
    }

    /**
     * Method renders toolbar container
     */
    renderToolBar() {
        const toolBar = document.getElementById('toolbar');
        toolBar.innerHTML += this.createToolBarStructure();
    }

    /**
     * Creates HTML structure for the toolbar.
     * @returns {string} The HTML structure of the toolbar.
     */
    createToolBarStructure() {
        return /*html*/ `<h5 class="text-tertiary">Kanban Project Managment Tool</h5>
                        <div class="help-account-container">
                            <button class="icon-btn">
                                <img src="../sources/img/help_24dp.svg" alt="help">
                            </button>
                            <!-- user -->
                            <button class="user-btn">
                                <img src="../sources/img/avatar_man_1.svg" alt="help">
                                <h6>John Doe</h6>
                            </button>
                        </div>`;
    }
}

/**
 * Creates an instance of the 'ToolBar' class and assigns it to the variable 'toolBar'.
 * @type {ToolBar}
 */
const toolBar = new ToolBar();