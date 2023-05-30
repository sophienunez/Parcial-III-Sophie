import { Product } from "../types/product";
import { Actions, SomeActions } from "../types/store";
import firebase from "../utils/firebase";

export const saveInputs = async (products: Product): Promise<Actions> => {
    await firebase.saveInputsInDB(products);
    return {
        action: SomeActions.SAVE_PRODUCTS,
        payload: products
    }
};