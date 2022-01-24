import axios from "axios";
import { useDispatch, useSelector } from "react-redux";


const API_URL = 'https://emeticslearning-backend.herokuapp.com/';


const register = (email,firstName,lastName,password,user_type='student')=>{
    // THIS function helps to request to the user registration enpoint
    return axios.post(API_URL+`api/user/registeruser/?user_type=${user_type}`,{
        "email":email,
        "first_name":firstName,
        "last_name":lastName,
        "password":password
    }).then((response)=>{
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


export default {
    login,
    logout,
    register
}