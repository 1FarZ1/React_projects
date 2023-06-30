/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useContext, useReducer } from 'react'
import { Productreducer } from '../reducers/product_reducer';
import { ActionType } from '../actions';


// import reducer from '../reducers/cart_reducer'

// import {
//   ADD_TO_CART,
//   REMOVE_CART_ITEM,
//   TOGGLE_CART_ITEM_AMOUNT,
//   CLEAR_CART,
//   COUNT_CART_TOTALS,
// } from '../actions'

const initialState = 
{
    isSideBarOpen:false,

}

const CartContext = React.createContext({
        ...initialState,
        openSideBar : ()=>{

        },
        closeSideBar : ()=>{
            
        }
})


export const ProductProvider = ({ children }:any) => {
    const [state,dispatch] = useReducer(Productreducer,initialState);
    const openSideBar = ()=>{
        dispatch({type:ActionType.OPEN_SIDEBAR})

    }

    const closeSideBar = ()=>{
        dispatch({type:ActionType.CLOSE_SIDEBAR})
    }
  return (
    <CartContext.Provider value={
        {
            ...state,
            openSideBar,
            closeSideBar
        }
    }>{children}</CartContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(CartContext)
}