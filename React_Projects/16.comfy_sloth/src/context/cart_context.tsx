import React, { useEffect, useContext, useReducer } from 'react'
import { cartReducer } from '../reducers/cart_reducer'




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
})

export const CartProvider = ({ children }:any) => {
  const [state,dispatch] =useReducer(cartReducer,initialState);

  return (
    <CartContext.Provider value={
      {
        ...state,

      }   
    }>{children}</CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}