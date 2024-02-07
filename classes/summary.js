class Summary {

    constructor() {
        this.renderSummaryCointainer();
    }

    renderSummaryCointainer() {
        const summaryContainer = document.getElementById('content-summary');
        summaryContainer.innerHTML += /*html*/ `<!-- greeting -->
                                                <div id="greeting" class="greeting-container">
                                                </div>
                                                <!-- dashboard -->
                                                <div id="content-dashboard" class="content-dashboard">

                                                    <!-- row -->
                                                    <div class="dashboard-row">
                                                        <!-- dashboard card-->
                                                        <div id="dashboard-todo" class="dashboard-card">
                                                            <img src="../sources/img/task_40dp.svg" alt="">
                                                            <div class="d-card-text">
                                                                <h4>1</h4>
                                                                <p class="text-tertiary">This displays the "To Do's" that have to be done.</p>
                                                            </div>
                                                            <img src="../sources/img/arrow_right_24dp.svg" alt="">
                                                        </div>
                                                        <!-- dashboard card-->
                                                        <div id="dashboard-done" class="dashboard-card">
                                                            <img src="../sources/img/task_done_40dp.svg" alt="">
                                                            <div class="d-card-text">
                                                                <h4>1</h4>
                                                                <p class="text-tertiary">This displays the task that are "Done".</p>
                                                            </div>
                                                            <img src="../sources/img/arrow_right_24dp.svg" alt="">
                                                        </div>
                                                    </div>

                                                    <!-- row -->
                                                    <div class="dashboard-row">
                                                        <!-- dashboard card-->
                                                        <div id="dashboard-todo" class="dashboard-card">
                                                            <img src="../sources/img/prio_high_40dp.svg" alt="">
                                                            <div class="d-card-text">
                                                                <h4>1</h4>
                                                                 <p class="text-tertiary">This displays the amount of tasks with "very high" priority.</p>
                                                            </div>
                                                            <img src="../sources/img/arrow_right_24dp.svg" alt="">
                                                        </div>
                                                    </div>

                                                    <!-- row -->
                                                    <div class="dashboard-row">
                                                        <!-- dashboard card-->
                                                        <div id="dashboard-board" class="dashboard-card">
                                                            <img src="../sources/img/board_40dp.svg" alt="">
                                                            <div class="d-card-text">
                                                                <h4>1</h4>
                                                                <p class="text-tertiary">This displays the "To Do's" that have to be done.</p>
                                                            </div>
                                                            <img src="../sources/img/arrow_right_24dp.svg" alt="">
                                                        </div>
                                                        <!-- dashboard card-->
                                                        <div id="dashboard-progress" class="dashboard-card">
                                                            <img src="../sources/img/feedback_40dp.svg" alt="">
                                                            <div class="d-card-text">
                                                                <h4>1</h4>
                                                                <p class="text-tertiary">This displays the task are waiting on feedback.</p>
                                                            </div>
                                                            <img src="../sources/img/arrow_right_24dp.svg" alt="">
                                                        </div>
                                                        <!-- dashboard card-->
                                                        <div id="dashboard-feedback" class="dashboard-card">
                                                                <img src="../sources/img/progress_40dp.svg" alt="">
                                                                <div class="d-card-text">
                                                                    <h4>1</h4>
                                                                    <p class="text-tertiary">This displays the task that are "Done".</p>
                                                                </div>
                                                                <img src="../sources/img/arrow_right_24dp.svg" alt="">
                                                            </div>
                                                        </div>`;
    }
}

const summary = new Summary();