import React, { useEffect, useContext, useReducer } from 'react'
import { filterReducer } from '../reducers/filter_reducer';
import { useProductsContext } from './product_context';
import { ActionType } from '../actions';



const initialState = {
    filtred_products:[],
}

const FilterContext = React.createContext({
    filtred_products:[],
})

export const FilterProvider = ({ children }:any) => {
    const [state,dispatch] = useReducer(filterReducer,initialState);
    const {products} = useProductsContext();

    const getAllProducts = ()=>{
        dispatch({type:ActionType.LOAD_PRODUCTS,payload:products});
    }
    useEffect(()=>{
        getAllProducts();
    },[products])
  return (
    <FilterContext.Provider value={
        {
            ...state
        }
    }>{children}</FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}