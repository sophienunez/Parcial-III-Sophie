import "./components/export"

export default class Formulario extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const form = this.ownerDocument.createElement('app-form');
        this.shadowRoot?.appendChild(form);
    }
}

customElements.define('app-formulario', Formulario)