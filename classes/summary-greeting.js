class SummaryGreeting {

    currentDate = new Date();
    currentDayOfMonth = this.currentDate.getDate();
    currentMonth = this.currentDate.getMonth() + 1;
    currentYear = this.currentDate.getFullYear();

    
    constructor() {
        this.renderGreetingContainer();
        this.detectDayTimeperiod();
    }


    renderGreetingContainer() {
        const greetingContainer = document.getElementById('greeting');
        greetingContainer.innerHTML += /*html*/ `<!-- greeting -->
                                                <div class="greeting-text">
                                                    <h3 id="user-greeting">Good morning,</h3>
                                                    <h3 id="current-date">Good morning,</h3>
                                                    <h2 id="user-name">John Doe</h2>
                                                </div>
                                                <button class="card-btn">Account</button>`;
    }


    detectDayTimeperiod() {
        const htmlDateString = document.getElementById('current-date');
        htmlDateString.innerHTML = '';

        const dateString = this.renderDateString(this.currentDayOfMonth, this.currentMonth, this.currentYear);
        htmlDateString.innerHTML += dateString;
    }


    renderDateString(currentDayOfMonth, currentMonth, currentYear) {
        const twoDigitDay = (currentDayOfMonth < 10) ? `0${currentDayOfMonth}`: currentDayOfMonth;
        const twoDigitMonth = (currentMonth < 9) ? `0${currentMonth}`: currentMonth; 
        return /*html*/ `today is the ${twoDigitDay}.${twoDigitMonth}.${currentYear}`;
    }

}

const greetingContainer = new SummaryGreeting();