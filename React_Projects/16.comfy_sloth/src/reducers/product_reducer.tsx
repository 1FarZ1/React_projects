

import { ActionType } from "../actions";

export const Productreducer = (state:any,action:any)=>{
    switch (action.type){
        case ActionType.OPEN_SIDEBAR:
            return {...state,isSideBarOpen:true};
        case ActionType.CLOSE_SIDEBAR:
            return {...state,isSideBarOpen:false};
    }
}