/* eslint-disable no-case-declarations */

import { ActionType } from "../actions";


export const cartReducer = (state: any, action: any) => {
    switch(action.type){
        case ActionType.ADD_TO_CART:
            const {id,color,amount,product} = action.payload;
            const isExist = state.cart.find((i:any)=>i.id === id + color);
            if(isExist){
                const tempCart =state.cart.map((elm:any)=>{
                    if(elm.id == id + color){
                    let tempAmount = elm.amount + amount;
                    if(tempAmount > elm.max){
                        tempAmount = elm.max;
                    }
                    return {...elm,amount:tempAmount}
                    }
                    else{
                        return elm;
                    }
                }
                )
                return {
                    ...state,
                    cart:[...tempCart],
                }
            }
            else{
                 const newItem = {
                    id:id+color,
                    amount,
                    color,
                    name:product.name,
                    image:product.images[0].url,
                    price:product.price,
                    max:product.stock
                }
                return {
                    ...state,
                    cart:[...state.cart,newItem],
    
                }
            }  
        case ActionType.REMOVE_CART_ITEM:
            const {itemId} = action.payload;
            return {
                ...state,
                cart : state.cart.filter((elm:any)=>{
                    return elm.id !== itemId;
                })
            } 
        case ActionType.TOGGLE_CART_ITEM_AMOUNT:
            const {value} = action.payload;

            return {
                ...state,
                cart:state.cart.map((elm:any)=>{
                    if(elm.id == action.payload.itemId){
                        elm.amount = elm.amount + value;
                        if(elm.amount > elm.max){
                            elm.amount = elm.max;
                        }
                        if(elm.amount < 1){
                            elm.amount = 1;
                        }
                    }
                    return elm;
                })
            }
        case  ActionType.CLEAR_CART:
            return {
                ...state,
                cart:[],

            }
        default:
            return state;

    }

    }
    