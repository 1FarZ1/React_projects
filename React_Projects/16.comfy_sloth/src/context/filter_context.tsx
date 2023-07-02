/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useContext, useReducer } from 'react'
import { filterReducer } from '../reducers/filter_reducer';
import { useProductsContext } from './product_context';
import { ActionType } from '../actions';



const initialState = {
    filtred_products:[],
    sort:"price-lowest",
    filters:{
        text:"",
        company:"all",
        category:"all",
        color:"all",
        min_price:0,
        max_price:0,
        price:0,
        shipping:false,
    }
}

const FilterContext = React.createContext({
    filtred_products:[],
    sort:"price-lowest",
    updateSort : (e:any)=>{},
    updateFilters:(e:any)=>{},
    clearFilters : ()=>{},
    filters:{
        text:"",
        company:"all",
        category:"all",
        color:"all",
        min_price:0,
        max_price:0,
        price:0,
        shipping:false,
    }
        
})

export const FilterProvider = ({ children }:any) => {
    const [state,dispatch] = useReducer(filterReducer,initialState);
    const {products} = useProductsContext();

    const getAllProducts = ()=>{
        dispatch({type:ActionType.LOAD_PRODUCTS,payload:products});
    }

    const updateSortFun  = (e:any)=>{
        dispatch({type:ActionType.UPDATE_SORT,payload:e.target.value})
    }

    const updateFilters = (e:any)=>{

    }
    const  clearFilters =()=>{

    }
    useEffect(()=>{
        getAllProducts();
    },[products])
    useEffect(()=>{
        dispatch({type:ActionType.SORT_PRODUCTS,payload:state.sort});
    },[products,state.sort])
  return (
    <FilterContext.Provider value={
        {
            ...state,
            updateSort:updateSortFun,
            updateFilters,
            clearFilters
        }
    }>{children}</FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}