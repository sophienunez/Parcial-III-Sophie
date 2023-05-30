import { Actions, AppState, SomeActions } from "../types/store";

export const reducer = (action: any, state: AppState) => {
    const {actions, payload} = action;
    switch (actions) {
        case SomeActions.SAVE_PRODUCTS:
            return state;
    
        default:
            return state;
    };
};