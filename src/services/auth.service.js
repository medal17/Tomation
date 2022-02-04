import axios from "axios";
import { useDispatch, useSelector } from "react-redux";


const API_URL = 'https://emeticslearning-backend.herokuapp.com/';


const register = (email,firstName,lastName,password, agentCode, isCorper,state, callUp,user_type='student')=>{
    // THIS function helps to request to the user registration enpoint
    return axios.post(API_URL+`api/user/registeruser/?user_type=${user_type}`, !agentCode ?{
        "email":email,
        "first_name":firstName,
        "last_name":lastName,
        "password":password,
        
    }:{
        "email":email,
        "first_name":firstName,
        "last_name":lastName,
        "password":password,
        "call_up_number": callUp,
        "is_corp_member":isCorper,
        "agent_code": agentCode,
        "state_of_service": state
    }
    
    ).then((response)=>{
        console.log(response)
        // callback(response)
        if(response.data.data.token){
            localStorage.setItem("user",JSON.stringify(response.data))
            // localStorage.setItem("isLogin",JSON.stringify(false))
        }
        
        return response.data
    })
}

const registerAgent = (email,firstName,lastName,password,user_type='agent')=>{
    // THIS function helps to request to the user registration enpoint
    return axios.post(API_URL+`api/user/registeruser/?user_type=${user_type}`,{
        "email":email,
        "first_name":firstName,
        "last_name":lastName,
        "password":password,
        
    }
    ).then((response)=>{
        console.log(response)
        // callback(response)
        if(response.data.data.token){
            localStorage.setItem("user",JSON.stringify(response.data))
            // localStorage.setItem("isLogin",JSON.stringify(false))
        }
        
        return response.data
    })
}


const login =(email,password)=>{
    return axios.post(API_URL+`api/user/login/`,{
        email,
        password
    }).then((response)=>{

        if(response.data.data.token){
            localStorage.setItem("user",JSON.stringify(response.data))
        }

        return response.data
    })
}


const logout = ()=>{
    localStorage.removeItem("user");
}

const uploadImage = (data, config)=>{
    // THIS function helps to request to the user registration enpoint
    return axios.post(API_URL+`api/user/upload_my_image/`, 
    data, config
    ).then((response)=>{
        console.log(response)
        // callback(response)
        // if(response.data.data.token){
        //     localStorage.setItem("user",JSON.stringify(response.data))
        //     // localStorage.setItem("isLogin",JSON.stringify(false))
        // }
        
        return response.data
    })
}


export default {
    login,
    logout,
    register, registerAgent, uploadImage
}

