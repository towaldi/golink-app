class ToolBar {

    constructor() {
        this.renderToolBar();
    }


    renderToolBar() {
        const toolBar = document.getElementById('toolbar');
        toolBar.innerHTML += this.createToolBarStructure();
    }


    createToolBarStructure() {
        return /*html*/ `<h6>Kanban Project Managment Tool</h6>
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


const toolBar = new ToolBar();