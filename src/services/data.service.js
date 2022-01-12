import axios from "axios";

const API_URL = 'https://emeticslearning-backend.herokuapp.com/';

const authHeader= ()=> {
    const user = JSON.parse(localStorage.getItem('user'));
    // instead of repeating code evry time for a Protected Header we just Put
    // the code in one place so for a protected enpoint we just call this func in the headers
    if (user && user.data.token) {
      return { Authorization: 'Token ' + user.data.token };
    } else {
      return {};
    }
  }
  



const getAllCourses= ()=>{

    return axios.get(API_URL+`api/get_courses/`)
    .then((response)=>{
         return response.data
    })
}
const getSchoolDetail=(id)=>{
    return axios.get(API_URL+`api/get_course_basedOnSchool/${id}/`)
    .then((response)=>{
      return response.data
    })
    .catch((err)=>{
      return err.response
    })
}

export const getUsertype  =()=>{
  // if logged in bring user typpe else bring false
  const user = JSON.parse(localStorage.getItem("user"));

    // console.log(user)
  
  return user? user.data.user_types:false
}

export default {
  getAllCourses,
  authHeader,
  getUsertype,
  "getAllSchools":getSchoolDetail
}

