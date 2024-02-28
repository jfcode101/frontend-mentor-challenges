export class Signup extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./assets/styles/style.css">
        <section class="sect-signup">
            <img src="./assets/images/illustration-sign-up-mobile.svg" />
            <header class="header">
                <h1 class="head-one">Stay updated!</h1>
                <p class="para">
                    <span>Join 60,000+ product managers receiving:</span>
                    <span> monthly updates on:</span>
                </p>
            </header>
            <ul>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/><path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8"/></g></svg>
                    Product discovery and building what matters
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/><path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8"/></g></svg>
                    Measuring to ensure updates are a success
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/><path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8"/></g></svg>
                    And much more!
                </li>
            </ul>
            <form class="form-signup">
                <fieldset>
                    <span class="arrange">
                        <legend>Email address</legend>
                        <span id="error">Valid email required</span>
                    </span>
                    <input  type="email" id="email" placeholder="email@company.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required>
                <fieldset>
                <input type="submit" value="Subscribe to monthly newsletter" class="submit-input">
            </form>
        </section">

    `;
  }
}
