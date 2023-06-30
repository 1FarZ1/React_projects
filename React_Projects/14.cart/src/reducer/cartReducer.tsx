import cartItems from '../data/data';
import cartActions from './cartActions';


const INITIAL_STATE = {
    cart:cartItems ,
}
const cartReducer = (state: any, action: any) => {
    switch (action.type) {
        case cartActions.INCREMENTE:            
            return {
                ...state,
                cart: state.cart.map((item: item) => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            amount: item.amount + 1
                        }
                    }
                    return item;
                },
                ),
            }
        case cartActions.DECREMENTE:
                return {
                ...state,
                cart : state.cart.map((item:item)=>{
                    if(item.id == action.payload){
                        if(item.amount == 0){
                            return item;
                        }
                        return {
                            ...item,
                            amount:item.amount - 1
                        }
                    }
                    return item;
                })    
                }
        case cartActions.REMOVE:
            return {
                ...state,
                cart: state.cart.filter((item:item)=>{
                    return item.id !== action.payload
                       
                })
            }
        case cartActions.CLEAR_CART:
            return {
                ...state,
                cart: []
            
                
            }
        default:
            return state;
    }
}

export {
    cartReducer,
    INITIAL_STATE
}