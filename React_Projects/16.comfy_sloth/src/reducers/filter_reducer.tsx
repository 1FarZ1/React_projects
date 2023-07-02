/* eslint-disable no-case-declarations */

import { ActionType } from "../actions";

export const filterReducer = (state: any, action: any) => {
    switch (action.type) {
        case ActionType.LOAD_PRODUCTS:
            const maxPriceArray = action.payload.map((p:any)=>p.price);
            const  maxPrice= Math.max(...maxPriceArray);
            return {
                ...state,
                filters:{
                    ...state.filters,
                    max_price:maxPrice,
                    price:maxPrice,
                },
                products:[...action.payload],
                filtred_products:[...action.payload],
            }
        case ActionType.UPDATE_SORT:            
            return {
                ...state,
                sort:action.payload,
            }
        case ActionType.SORT_PRODUCTS:
            return {
                ...state,
                filtred_products:state.filtred_products.sort((a:any,b:any)=>{
                    if(action.payload === "price-lowest"){
                        return a.price - b.price;
                    }
                    else if (action.payload === "price-highest"){
                        return b.price - a.price;
                    }
                    else if (action.payload === "name-a"){
                        return a.name.localeCompare(b.name);
                    }
                    else if (action.payload === "name-z"){
                        return b.name.localeCompare(a.name);
                    }
                }),
            }
        case ActionType.UPDATE_FILTERS :
            return {
                ...state,
                filters:{
                    ...state.filters,
                    [action.payload.name]:action.payload.value,
                }
            }
        case  ActionType.FILTER_PRODUCTS:
            let Tempproducts =state.products;
            const {text,company,category,color,price,shipping} = state.filters;

            if(text){                
                Tempproducts = Tempproducts.filter((product:any)=>{
                    const productName:string = product.name.toLowerCase();
                    return productName.indexOf(text.toLowerCase()) !== -1;
                })
            
        }   
        if(company != "all"){
            
            Tempproducts = Tempproducts.filter((product:any)=>{
                return product.company === company;
            })
        }
        if(category != "all"){
            Tempproducts = Tempproducts.filter((product:any)=>{
                return product.category === category;
            })
        }
        if(color != "all"){
            Tempproducts = Tempproducts.filter((product:any)=>{
                return product.colors.find((c:string)=>c === color);
            })
        }
        Tempproducts = Tempproducts.filter((product:any)=>{
            return product.price <= price;
        })
        if(shipping){
            Tempproducts = Tempproducts.filter((product:any)=>{
                return product.shipping === true;
            })
        }



            return {
                ...state,
                filtred_products:[...Tempproducts]
            }


                    


        case ActionType.CLEAR_FILTER:
            return {
                ...state,
                filters:{
                    ...state.filters,
                    text:"",
                    company:"all",
                    category:"all",
                    color:"all",
                    price:state.filters.max_price,
                    shipping:false,
                }
            }
        default:
            return state
    }
    }
