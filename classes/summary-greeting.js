class SummaryGreeting {

    constructor() {
        this.renderGreetingContainer();
    }

    renderGreetingContainer() {
        const greetingContainer = document.getElementById('greeting');
        greetingContainer.innerHTML += /*html*/ `<!-- greeting -->
                                                <div class="greeting-text">
                                                    <h3 id="user-greeting">Good morning,</h3>
                                                    <h2 id="user-name">John Doe</h2>
                                                </div>
                                                <button class="card-btn">Account</button>`;
    }

}

const greetingContainer = new SummaryGreeting();