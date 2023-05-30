import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import { Product } from "../types/product";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const saveInputsInDB = async (products: Product) => {
    try {
        const resp = await addDoc(collection(db, "users"), products);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export default {saveInputsInDB};