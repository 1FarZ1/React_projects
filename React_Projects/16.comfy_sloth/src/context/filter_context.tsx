/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useContext, useReducer } from 'react'
import { filterReducer } from '../reducers/filter_reducer';
import { useProductsContext } from './product_context';
import { ActionType } from '../actions';



const initialState = {
    filtred_products:[],
    products:[],
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
    products:[],
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
        const name = e.target.name;
        let value = e.target.value;
        if(name == "category"){
            value = e.target.textContent;
        }
        if(name == "color"){
            value = e.target.dataset.color;
        }
        if(name =="price"){
            value =Number(value);
        }
        if(name =="shipping"){
            value =e.target.checked;
        }
        dispatch({type:ActionType.UPDATE_FILTERS,payload:{
            name:name,
            value:value
        }});

    }
    const  clearFilters =()=>{
        dispatch({type:ActionType.CLEAR_FILTER});

    }
    useEffect(()=>{
        getAllProducts();
    },[products])
    useEffect(()=>{
        dispatch({type:ActionType.SORT_PRODUCTS,payload:state.sort});
    },[products,state.sort])
    useEffect(()=>{
        dispatch({type:ActionType.FILTER_PRODUCTS,payload:state.filters});
    },[products,state.filters])
  return (
    <FilterContext.Provider value={
        {
            ...state,
            products,
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