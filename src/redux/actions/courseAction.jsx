import dataService from "../../services/data.service"
import actionTypes from "../contants/actionTypes";

export const getAllCourses = ()=> (dispatch)=>{

    return dataService.getAllCourses()
    .then((response)=>{
        console.log(response.data,'ddddegr')
        dispatch({
            type:actionTypes.SET_COURSES,
            payload:response.data
        })

        // dispatch({
        //     type:actionTypes.SET_MESSAGE,
        //     payload: {message:response.message,isSuccess:true} 
      
        //   })


        return Promise.resolve();
    },
    
    (error)=>{
      // console.log(error.response.data.message)

        let message 
        try {
          message = (error.response.data.message || error.response.data.detail)
        } catch  {
            message = error.message
        }
  
      dispatch({
        type: actionTypes.SET_COURSES_FAIL,
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