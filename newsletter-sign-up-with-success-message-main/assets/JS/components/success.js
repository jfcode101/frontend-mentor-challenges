export class Success extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./assets/styles/style.css">
        <article class="artc-success">
           <header class="artc-header">
                <img src="./assets/images/icon-success.svg">
                <h1 class="head-one">Thanks for subscribing!</h1>
                <p class="para">
                    A confirmation email has been sent to <b>ash@loremcompany.com</b>. 
                    Please open it and click the button inside to confirm your subscription
                </p>
           </header>
           <button class="submit-input">Dismiss message</button>     
        </article>
    `;
  }
}
