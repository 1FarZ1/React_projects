
import { ActionType } from "../actions";

export const filterReducer = (state: any, action: any) => {
    switch (action.type) {
        case ActionType.LOAD_PRODUCTS:
            return {
                ...state,
                filtred_products:[...action.payload],
            }
        default:
            return state
    }
    }
