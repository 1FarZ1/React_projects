

const INITIAL_STATE = {
    cart: [],
}
const cartReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'INCREMENTE':
            return {
                ...state,
                cart: state.cart.map((item: any) => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        }
                    }
                    return item;
                },
                ),
            }
        case 'Decremente':
                return {
                ...state,
                cart : state.cart.map((item:any)=>{
                    if(item.id == action.payload){
                        return {
                            ...item,
                            quantity:item.quantity + 1
                        }
                    }
                })    
                }
        case 'reset':
            return {
                ...state,
                cart: []
            
                
            }
        default:
            return state;
    }
}