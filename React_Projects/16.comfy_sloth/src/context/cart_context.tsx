/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useContext, useReducer } from 'react'
import { cartReducer } from '../reducers/cart_reducer'
import { ActionType } from '../actions'






const checkStorage = ()=>{
  return localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")!):[]
}
const initialState = {
  cart:checkStorage(),
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
  removeFromCart:(id:any)=>{},
  toggleAmount:(id:any,value:any)=>{},
  clearCart:()=>{},

})

export const CartProvider = ({ children }:any) => {
  const [state,dispatch] =useReducer(cartReducer,initialState);



  const addToCart = (id:any,color:any,amount:number,product:any)=>{
   
    dispatch({type:ActionType.ADD_TO_CART,payload:{id,color,amount,product}});
  }

  const removeFromCart = (id:any)=>{
    dispatch(
      {
        type:ActionType.REMOVE_CART_ITEM,
        payload:{
          itemId:id
        }
      }
    )


  }

  const toggleAmount = (itemId:any,value:any)=>{
    if(value == "inc"){
      dispatch({type:ActionType.TOGGLE_CART_ITEM_AMOUNT,payload:{itemId,value:1}})
    }
    else{
      dispatch({type:ActionType.TOGGLE_CART_ITEM_AMOUNT,payload:{itemId,value:-1}})
    }
  }

  const clearCart = ()=>{
    dispatch({type:ActionType.CLEAR_CART});
  }


  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(state.cart));
  },[state.cart])


  return (
    <CartContext.Provider value={
      {
        ...state,
        addToCart,
        removeFromCart,
        toggleAmount,
        clearCart,

      }   
    }>{children}</CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}