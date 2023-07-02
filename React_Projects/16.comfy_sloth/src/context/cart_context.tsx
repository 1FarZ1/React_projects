/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useContext, useReducer } from 'react'
import { cartReducer } from '../reducers/cart_reducer'
import { ActionType } from '../actions'




const initialState = {
  cart:[],
  total_items:0,
  total_amount:0,
  shipping_fee:534,

}

const CartContext = React.createContext({
  cart:[],
  total_items:0,
  total_amount:0,
  shipping_fee:534,
  addToCart:(id:any,color:any,amount:number,product:any)=>{},
})

export const CartProvider = ({ children }:any) => {
  const [state,dispatch] =useReducer(cartReducer,initialState);



  const addToCart = (id:any,color:any,amount:number,product:any)=>{
    console.log(id,color,amount);
    console.log(product);
    dispatch({type:ActionType.ADD_TO_CART,payload:{id,color,amount,product}});
  }
  return (
    <CartContext.Provider value={
      {
        ...state,
        addToCart

      }   
    }>{children}</CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}