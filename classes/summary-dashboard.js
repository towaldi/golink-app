class SummaryDashboard {

    cardItems = [
        {icon: '../sources/img/task_40dp.svg', text: 'This displays the "To Dos" that have to be done.'},
        {icon: '../sources/img/task_done_40dp.svg', text: 'This displays the task that are "Done".'}, 
        {icon: '../sources/img/prio_high_40dp.svg', text: 'This displays the amount of tasks with "very high" priority.'}, 
        {icon: '../sources/img/board_40dp.svg', text: 'This displays the "To Dos" that have to be done.'}, 
        {icon: '../sources/img/feedback_40dp.svg', text: 'This displays the task are waiting on feedback.'},
        {icon: '../sources/img/progress_40dp.svg', text: 'This displays the task that are "Done".'}
    ];

    constructor() {
        this.renderDasboardContainer();
        this.renderCardItems();
    }

    renderDasboardContainer() {
        const dashboardContainer = document.getElementById('content-dashboard');
        dashboardContainer.innerHTML = /*html*/ `<!-- row -->
                                                <div id="dashboard-row" class="dashboard-row">
                                                </div>`;
    }

    renderCardItems() {
        const cardItems = document.getElementById('dashboard-row');
        cardItems.innerHTML = '';

        this.cardItems.forEach(item => {
            const cardElement = this.createCardElement(item);
            cardItems.innerHTML += cardElement;
        });
    }

    createCardElement(item) {
        return /*html*/ `<!-- dashboard card-->
                        <div id="dashboard-card" class="dashboard-card">
                            <img src="${item.icon}" alt="">
                            <div class="d-card-text">
                                <h4>1</h4>
                            <p class="text-tertiary">${item.text}</p>
                            </div>
                            <img src="../sources/img/arrow_right_24dp.svg" alt="">
                        </div>`;
    }
}


const dashboardContainer = new SummaryDashboard();