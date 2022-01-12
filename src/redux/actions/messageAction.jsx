import actionTypes from "../contants/actionTypes";

// this is Actions are Purely  for MEssages 

export const setMessage=(message,isSuccess=true)=>({

    type:actionTypes.SET_MESSAGE,
    payload:{message:message,isSuccess}   
})


export const clearMessage = ()=>({
    type:actionTypes.CLEAR_MESSAGE,
})

