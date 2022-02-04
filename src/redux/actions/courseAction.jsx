import axios from "axios";
import dataService from "../../services/data.service"
import actionTypes from "../contants/actionTypes";


const user = JSON.parse(localStorage.getItem('user'));


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


//Get all course with callback
export const getAllCoursesCallback = (callback)=> (dispatch)=>{

  return dataService.getAllCourses()
  .then((response)=>{
      callback(response.data)
      // console.log(response.data,'ddddegr')
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


// get student course count
export const getCourseCount = (callback)=> (dispatch)=>{
   
  axios.get(`https://emeticslearning-backend.herokuapp.com/api/get_course_count/`,
  {headers:{ Authorization: 'Token ' + user.data.token }})
  .then((response)=>{
      console.log(response.data,'ddddegr')
     callback(response.data)
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


export const getCount = (callback)=> (dispatch)=>{

  // agent_registration_record/' \
  axios.get(`https://emeticslearning-backend.herokuapp.com/api/agent_registration_record/`,
  {headers:{ Authorization: 'Token ' + user.data.token }})
  .then((response)=>{
      // console.log(response.data,'count')
      callback(response.data)
      // dispatch({
      //     type:actionTypes.SET_COURSES,
      //     payload:response.data
      // })

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