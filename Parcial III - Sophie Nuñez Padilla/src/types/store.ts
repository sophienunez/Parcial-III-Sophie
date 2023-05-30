import { Product } from "./product";

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  products: Product[];
};

export enum SomeActions {
  "SAVE_PRODUCTS" = "SAVE_PRODUCTS",
}

export interface XAction {
  action: SomeActions.SAVE_PRODUCTS;
  payload: Product;
}

export type Actions = XAction;
