/* eslint-disable no-case-declarations */

import { ActionType } from "../actions";

export const filterReducer = (state: any, action: any) => {
    switch (action.type) {
        case ActionType.LOAD_PRODUCTS:
            const maxPriceArray = action.payload.map((p:any)=>p.price);
            const  maxPrice= Math.max(...maxPriceArray);
            return {
                ...state,
                filters:{
                    ...state.filters,
                    max_price:maxPrice,
                    price:maxPrice,
                },
                filtred_products:[...action.payload],
            }
        case ActionType.UPDATE_SORT:            
            return {
                ...state,
                sort:action.payload,
            }
        case ActionType.SORT_PRODUCTS:
            return {
                ...state,
                filtred_products:state.filtred_products.sort((a:any,b:any)=>{
                    if(action.payload === "price-lowest"){
                        return a.price - b.price;
                    }
                    else if (action.payload === "price-highest"){
                        return b.price - a.price;
                    }
                    else if (action.payload === "name-a"){
                        return a.name.localeCompare(b.name);
                    }
                    else if (action.payload === "name-z"){
                        return b.name.localeCompare(a.name);
                    }
                }),
            }
        case ActionType.UPDATE_FILTERS :
            return {
                ...state,
                filters:{
                    ...state.filters,
                    [action.payload.name]:action.payload.value,
                }
            }
        case ActionType.CLEAR_FILTER:
            return {
                ...state,
                filters:{
                    ...state.filters,
                    text:"",
                    company:"all",
                    category:"all",
                    color:"all",
                    price:state.filters.max_price,
                    shipping:false,
                }
            }
        default:
            return state
    }
    }
