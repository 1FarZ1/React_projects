import React, { useEffect, useContext, useReducer } from 'react'

const initialState = {}

const UserContext = React.createContext({})


// I WILL add the user using the 0auth later on
export const UserProvider = ({ children }:any) => {
  return (
    <UserContext.Provider value='yser context'>{children}</UserContext.Provider>
  )
}



// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}