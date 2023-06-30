import React, { useEffect, useContext, useReducer } from 'react'


// import reducer from '../reducers/cart_reducer'

// import {
//   ADD_TO_CART,
//   REMOVE_CART_ITEM,
//   TOGGLE_CART_ITEM_AMOUNT,
//   CLEAR_CART,
//   COUNT_CART_TOTALS,
// } from '../actions'

const initialState = {}

const UserContext = React.createContext({})

export const UserProvider = ({ children }:any) => {
  return (
    <UserContext.Provider value='yser context'>{children}</UserContext.Provider>
  )
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}