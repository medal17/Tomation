import dataService from "../../services/data.service"
import actionTypes from "../contants/actionTypes"


export const getSchools =(id)=>(dispatch)=>{



    return dataService.getAllSchools(id)
    .then((response)=>{
        console.log(response.data,"from schools")

        dispatch({
            type:actionTypes.SET_SCHOOLS,
            payload:response.data
        })

        return Promise.resolve();
    },
    (error)=>{
        let message 
        try {
          message = (error.response.data.message || error.response.data.detail)
        } catch  {
            message = error.message
        }
  
      dispatch({
        type: actionTypes.SET_SCHOOLS_FAIL,
        payload:[]
      });
  
      dispatch({
        type: actionTypes.SET_MESSAGE,
        payload: {message:message,isSuccess:false} 
  
      });
  
      
      Promise.reject();
    }
    
    )




}