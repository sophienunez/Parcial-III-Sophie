import { dispatch } from "../../store";
import { saveInputs } from "../../store/actions";
import { Product } from "../../types/product";

const userInputs: Product = {
    name: "",
    ingredients: "",
    instructions: "",
    img: "",
}

export default class Form extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const lName = this.ownerDocument.createElement('label');
        lName.textContent = "Recipe Name";
        const name = this.ownerDocument.createElement('input');
        name.addEventListener("change", (e: any) => {
            userInputs.name = e.target.value
        });
        
        const lIngredients = this.ownerDocument.createElement('label');
        lIngredients.textContent = "Ingredients";
        const ingredients = this.ownerDocument.createElement('input');
        ingredients.addEventListener("change", (e: any) => {
            userInputs.ingredients = e.target.value
        });

        const lInstructions = this.ownerDocument.createElement('label');
        lInstructions.textContent = "Instructions";
        const instructions = this.ownerDocument.createElement('input');
        instructions.addEventListener("change", (e: any) => {
            userInputs.instructions = e.target.value
        });


        const img = this.ownerDocument.createElement('nosequemonda');
        img.addEventListener("change", (e: any) => {
            userInputs.img = e.target.value
        });

        const btn = this.ownerDocument.createElement('button');
        btn.textContent = "save"
        btn.addEventListener("click", async () => {
            dispatch( await saveInputs(userInputs));
            console.log(userInputs);
        });


        this.shadowRoot?.appendChild(lName);
        this.shadowRoot?.appendChild(name);
        this.shadowRoot?.appendChild(lIngredients);
        this.shadowRoot?.appendChild(ingredients);
        this.shadowRoot?.appendChild(lInstructions);
        this.shadowRoot?.appendChild(instructions);
        this.shadowRoot?.appendChild(btn);
    }
}

customElements.define('app-form', Form)