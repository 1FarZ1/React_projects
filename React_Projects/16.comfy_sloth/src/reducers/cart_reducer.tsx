/* eslint-disable no-case-declarations */


export const cartReducer = (state: any, action: any) => {
    switch(action.type){
        case "ADD_TO_CART":
            const {id,color,amount,product} = action.payload;
            const isExist = state.cart.find((i:any)=>i.id === id + color);
            if(isExist){
                const tempCart =state.cart.map((elm:any)=>{
                    if(elm.id == id + color){
                    let tempAmount = elm.amount + amount;
                    if(tempAmount > elm.max){
                        tempAmount = elm.max;
                    }
                    return {...elm,amount:tempAmount}
                    }
                    else{
                        return elm;
                    }
                }
                )
                return {
                    ...state,
                    cart:[...tempCart],
                }
            }
            else{
                 const newItem = {
                    id:id+color,
                    amount,
                    color,
                    name:product.name,
                    image:product.images[0].url,
                    price:product.price,
                    max:product.stock
                }
                return {
                    ...state,
                    cart:[...state.cart,newItem],
    
                }
            }

           
    }
    }
    