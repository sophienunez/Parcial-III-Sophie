import { Product } from "../../types/product";

const recipesAttributes: Product = {
    name: "",
    ingredients: "",
    instructions: "",
    img: "",
}

export default class Recipes extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot?.innerHTML) this.shadowRoot.innerHTML = `
        
        `;
    }
}

customElements.define('app-recipes', Recipes)