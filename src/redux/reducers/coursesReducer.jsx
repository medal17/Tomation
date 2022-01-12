import actionTypes from "../contants/actionTypes";

export default function (state=[],{type,payload}){

    switch (type) {
        case actionTypes.SET_COURSES:
            
            return {...state,courses:[...payload]};

        case actionTypes.SET_COURSES_FAIL:
            return {...state,courses:[]}
    
        default:
            return state;
    }
}