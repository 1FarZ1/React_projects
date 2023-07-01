/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-explicit-any */


import { ActionType } from "../actions";

export const Productreducer = (state:any,action:any)=>{
    switch (action.type){
        case ActionType.OPEN_SIDEBAR:
            return {...state,isSideBarOpen:true};
        case ActionType.CLOSE_SIDEBAR:
            return {...state,isSideBarOpen:false};
        case ActionType.GET_PRODUCTS_BEGIN:
            return {...state,products_loading:true};
        case ActionType.GET_PRODUCTS_SUCCESS:
            const featured_products = action.payload.filter((product:any)=>product.featured === true);
            return {...state,featured_products:featured_products,  products_loading:false,products:action.payload};
        case ActionType.GET_PRODUCTS_ERROR:
            return {...state,products_loading:false,products_error:true};
    }
}