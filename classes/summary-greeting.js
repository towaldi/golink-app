class SummaryGreeting {

    /**
     * 
     */
    currentDate = new Date();
    
    /**
     * creates a new 'SummaryGreeting' instance
     * -> execute 'renderGreetingContainer()' method
     * -> execute 'renderCurrentDate()' method
     */
    constructor() {
        this.renderGreetingContainer();
        this.renderCurrentDate();
    }

    /**
     * method renders "greeting" container
     */
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

    /**
     * renders the current date
     * -> using the '.toLocaleDateString()' method
     */
    renderCurrentDate() {
        const htmlDateString = document.getElementById('current-date');
        htmlDateString.innerHTML = '';

        const options = {weekday: 'short', day: 'numeric', month: 'long', year: 'numeric'}
        const dateString = this.currentDate.toLocaleDateString('en-US', options);

        htmlDateString.innerHTML += dateString;
    }
}

const greetingContainer = new SummaryGreeting();