import actionTypes from "../contants/actionTypes";

export default function (state=[],{type,payload}){

    switch (type) {
        case actionTypes.SET_SCHOOLS:
            
            return {...state,school:{...payload}};

        case actionTypes.SET_SCHOOLS_FAIL:
            return {...state,school:{}}
    
        default:
            return state;
    }
}