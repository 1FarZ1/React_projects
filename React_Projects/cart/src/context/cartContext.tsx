import React, { useReducer } from "react";

import { cartReducer,INITIAL_STATE } from "../reducer/cartReducer";
import cartActions from "../reducer/cartActions";


const cartContext = React.createContext({
    cart: [] as item[],
    cost: 0,
    amount: 0,
    reset: () => {
        console.log("twst");
    },
    increase: (id:any) => {
        console.log("twst");
    }   
    ,
    decrease: (id:any) => {
        console.log("twst");
    }
    ,

    remove: (id:any) => {
        console.log("twst");

    }
});



const CartProvider = ({ children } : any) => {
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
    const { totalAmount, totalCost } = getTotals(state.cart);

    const reset = () => {
        dispatch({ type:  cartActions.CLEAR_CART })
    }

    const increase = (id:string) => {
        dispatch({type: cartActions.INCREMENTE , payload: id});
    }

    const decrease = (id:string) => {
        dispatch({type: cartActions.DECREMENTE , payload: id});
    }

    const remove = (id:string) => {
        dispatch({type: cartActions.REMOVE , payload: id});
    }

    
    return <cartContext.Provider value={
        {
            cart: state.cart,
            amount: totalAmount,
            cost:totalCost,
            reset: reset,
            increase: increase,
            decrease: decrease,
            remove:remove

        }
    }>
        {children}
    </cartContext.Provider>
}

const getTotals = (cart:item[]) => {
    console.log(cart);
    let totalAmount = 0;
    let totalCost = 0;
  
    for (const { amount, price } of cart.values()) {
      totalAmount += amount;
      totalCost += amount * parseInt(price);
    }
    return { totalAmount, totalCost };
  };


export {cartContext ,CartProvider}