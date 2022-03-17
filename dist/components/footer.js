class FitnessFooter extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
        <div class="navbar fixed-bottom footer">
            <div class="container">
                <div class="container">
                    <div class="row py-2">
                        <div class="col-md-6 text-center">Contact us: nomail@nomail.com</div>
                        <div class="col-md-6 text-center">
                            <a class="light-link" href="https://justdudas.com/services/yoga-classes/">Yoga Signup</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
  }
}

customElements.define('fitness-footer-component', FitnessFooter);