import actionTypes from "../contants/actionTypes";

const initState = {}


// first we get the user form the local storage
const user = JSON.parse(localStorage.getItem("user"));

// if the user exist send back the first object else send the second
const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

  export default function (state=initState,{type,payload}){

    switch (type) {
        case actionTypes.REGISTER_SUCCESS:
            
            return {...state,isLoggedIn:true,user:payload.user};
    
        case actionTypes.REGISTER_FAIL:
            return {...state,isLoggedIn:false}

        case actionTypes.LOGIN_SUCCESS:
        
            return {...state,isLoggedIn:true,user:payload.user};
    
        case actionTypes.LOGIN_FAIL:
            return {...state,isLoggedIn:false}

        default:
            return state;
    }

}

