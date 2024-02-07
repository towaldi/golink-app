/**
 * 'SummaryGreeting' represents the "greeting" section in summary.html
 */
class SummaryGreeting {

    /**
     * Object vairable for the date
     */
    currentDate = new Date();
    
    /**
     * Creates a new 'SummaryGreeting' instance
     * -> executes all render/update methods
     */
    constructor() {
        this.renderGreetingContainer();
        this.renderCurrentDate();
        this.updateClock();
        this.updateGreeting();
    }

    /**
     * Method renders "greeting" container
     */
    renderGreetingContainer() {
        const greetingContainer = document.getElementById('greeting');
        greetingContainer.innerHTML += /*html*/ `<!-- greeting -->
                                                <div class="greeting-text">
                                                    <h3 id="user-greeting"></h3>
                                                    <h2 id="user-name">John Doe</h2>
                                                    <h3 id="current-date" class="text-light-white-opacity"></h3>
                                                    <h3 id="current-time" class="text-light-white-opacity"></h3>
                                                </div>
                                                <button class="card-btn">Account</button>`;
    }

    /**
     * Renders the current date
     */
    renderCurrentDate() {
        const htmlDateString = document.getElementById('current-date');
        htmlDateString.innerHTML = this.getFormattedDateString();
    }

    /**
     * Updates the clock (every second)
     */
    updateClock() {
        const htmlTimeString = document.getElementById('current-time');

        setInterval(() => {
            this.currentDate = new Date();
            const formattedTime = this.getFormattedTime();
            htmlTimeString.innerHTML = /*html*/ `${formattedTime}`;
        }, 1000);
    }

    /**
     * Updates greeting all 15 min (90000 milliseconds)
     */
    updateGreeting() {
        const htmlGreetingElement = document.getElementById('user-greeting');

        const updateGreetingText = () => {
            const greeting = this.generateGreeting();
            htmlGreetingElement.innerHTML = /*html*/ `${greeting}`;
        }

        updateGreetingText();

        setInterval(() => {
            updateGreetingText();
        }, 90000);
    }

    /**
     * Returns the formatted date string
     * @returns {string}
     */
    getFormattedDateString() {
        const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
        return this.currentDate.toLocaleDateString('en-US', options);
    }

    /**
     * Returns the formatted time string
     * @returns {string}
     */
    getFormattedTime() {
        let hours = this.currentDate.getHours();
        const meridiem = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;

        hours = hours.toString().padStart(2, '0');
        const minutes = this.currentDate.getMinutes().toString().padStart(2, '0');
        const seconds = this.currentDate.getSeconds().toString().padStart(2, '0');

        return `${hours}:${minutes}:${seconds} ${meridiem}`;
    }


    /**
     * Generates "greeting" based on time of the day
     * @returns {string} - greeting text
     */
    generateGreeting() {
        const hour = this.currentDate.getHours();
        if (hour < 12) {
            return 'Good morning,';
        } else if (hour < 18) {
            return 'Good afternoon,';
        } else {
            return 'Good evening,';
        }
    }
}


/**
 * Creates an instance of the 'SummaryGreeting' class and assigns it to the variable 'greetingContainer'.
 * @type {SummaryGreeting}
 */
const greetingContainer = new SummaryGreeting();