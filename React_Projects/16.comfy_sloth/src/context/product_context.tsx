/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useContext, useReducer } from 'react'
import { Productreducer } from '../reducers/product_reducer';
import { ActionType } from '../actions';
import axios from 'axios';
import { products_url, single_product_url } from '../utils/consts';



const initialState = 
{
    isSideBarOpen:false,
    products_loading:false,
    products_error:false,
    products:[],
    featured_products:[],
    single_product_loading:false,
    single_product_error:false,
    single_product:{}

}

const CartContext = React.createContext({
        ...initialState,
        openSideBar : ()=>{

        },
        closeSideBar : ()=>{
            
        },
        getSingleProduct : (id:any)=>{},
})


export const ProductProvider = ({ children }:any) => {
    const [state,dispatch] = useReducer(Productreducer,initialState);
    const openSideBar = ()=>{
        dispatch({type:ActionType.OPEN_SIDEBAR})

    }

    const closeSideBar = ()=>{
        dispatch({type:ActionType.CLOSE_SIDEBAR})
    }

    const getAllProducts = async ()=>{
        dispatch({type:ActionType.GET_PRODUCTS_BEGIN})
       try {
        const res = await axios(products_url);
        if(res.status == 200){
            dispatch({type:ActionType.GET_PRODUCTS_SUCCESS,payload:res.data})
        }
       } catch (error) {
        dispatch({type:ActionType.GET_PRODUCTS_ERROR,payload:error})
       }
    
    }
    const getSingleProduct = async (id:any)=>{
        dispatch({type:ActionType.GET_SINGLE_PRODUCT_BEGIN})
        try {
            const res = await axios(single_product_url + id);
            if(res.status ==200){
                dispatch({type:ActionType.GET_SINGLE_PRODUCT_SUCCESS,payload:res.data})
            }
        } catch (error) {
            dispatch({type:ActionType.GET_SINGLE_PRODUCT_ERROR,payload:error})

        }
    }

    useEffect(()=>{
        getAllProducts();
    },[])
  return (
    <CartContext.Provider value={
        {
            ...state,
            openSideBar,
            closeSideBar,
            getSingleProduct
        }
    }>{children}</CartContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(CartContext)
}