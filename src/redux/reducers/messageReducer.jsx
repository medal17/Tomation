import actionTypes from "../contants/actionTypes";
const initState = {}

export default function (state=initState,{type,payload}){


    // console.log(payload,"this is a Payload")
    // console.log(type ,"What type?")
    // console.log(actionTypes.SET_MESSAGE)
    switch (type) {
        case actionTypes.SET_MESSAGE:
            return {message:payload}
        case actionTypes.CLEAR_MESSAGE:
            return {message:""}

        default:
            return state
    }

}