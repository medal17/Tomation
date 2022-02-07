import axios from "axios";
import { useState } from "react"
import { setMessage } from "../../../redux/actions/messageAction";
import dataService from "../../../services/data.service";
import { useDispatch } from "react-redux";
import UseStaticImage from '../../../assets/images/campbell-s-photography-sw0-R8wb0MA-unsplash.jpg'
import { useEffect } from 'react'
import { BsDashCircle, BsPlus, BsPlusCircle } from "react-icons/bs";
import DashboardNavHeader from "../../../component/DashboardNav";
import Footer from "../../../component/footer";
import { FaUserCircle } from "react-icons/fa";
import { getImage } from "../../../redux/actions/userAuthActions";


const StudentProfile = () => {
   const [isLoading, setIsloading] = useState(true);
   const [allData, setAllData] = useState(false);
   const [loading, setLoading] = useState(false)
   const [image, setImage] = useState('')

   const [educationQualification, setEducationQualification] = useState([])
   const [professionalQualification, setProfessionalQualification] = useState([])
   const [workExpirence, setWorkExpirence] = useState([])

   const dispatch = useDispatch();
   // Note triggerUseEffect is a weird state i created any time i nrement the value that means the state will change
   // which in turn will trigger the useEffect to re run triggerUseEffect is a dependency of the useEffect
   const [triggerUseEffect, setTriggerUseEffect] = useState(1)
   let url = 'https://emeticslearning-backend.herokuapp.com/api/user/update_user/'

   const callback=(response)=>{
      if(response.data){
         // alert(response.data)
         // console.log(response.data, 'imagurl')
         setImage(response.data.image)
      }
   }

   useEffect(() => {
      dispatch(getImage(callback))
      axios.get(url, {
         headers: dataService.authHeader(),
      }).then((response) => {
         // console.log(data.data)
         setAllData(response.data.data)

         setEducationQualification([...response.data.data.educational_qualifications[0]].map(data => {
            return { ...data, "uiID": Math.random() * 10 }
         }))

         setProfessionalQualification([...response.data.data.professional_qualifications[0]].map(data => {
            return { ...data, "uiID": Math.random() * 104 }
         }))

         setWorkExpirence([...response.data.data.work_experience.map(data => {
            return { ...data, "uiID": Math.random() * 200 }
         })])

         setIsloading(false)
         // console.log(allData)
      })
         .catch(error => {
            console.log(error)
            let message
            try {
               message = (error.response.data.message || error.response.data.detail)
            } catch {
               message = error.message

            }

            setMessage(message, false)
            setIsloading(false)
         })
   }, [triggerUseEffect])



   const removeEducationQualification = (uiID, id) => {
      // `
      // if the id is undefine we will just reomve the object from the ui
      // else we remove the object from the ui and delete it from the backend 
      // `
      let url = `https://emeticslearning-backend.herokuapp.com/api/user/`
      // console.log("Uid",uiID)
      // console.log("id",id)
      if (id != undefined) {
         axios.post(url + `delete_student_qualification/${id}/`, {}, {
            headers: dataService.authHeader(),
         })
            .then((response => {
               console.log(response.data)
               setEducationQualification([...educationQualification.filter(data => data.id != id)])
            }))
            .catch((error => {
               let message = ''
               try {
                  message = (error.response.data.message || error.response.data.detail)
               }
               catch {
                  message = error.message
               }
               console.log(message)
               dispatch(setMessage(message, false))
            }))
      }
      else {
         setEducationQualification([...educationQualification.filter(data => data.uiID != uiID)])

      }
      // setEducationQualification()
   }
   const handleUpdateEducation = (e, uiID, fieldToUpdate) => {

      setEducationQualification([...educationQualification.map(data => {

         if (uiID == data.uiID) {
            return { ...data, [fieldToUpdate]: e.target.value }
         }
         else {
            return data
         }
      })])
   }
   const creatNewEducationalQulificaationField = (e) => {

      setEducationQualification([...educationQualification, {
         uiID: Math.random() * 150, "degree_type": "",
         "institutionName": "", "qualificationCategory": "Educational", "course_name": ""
      }])
   }

   const deleteProfessional = (uiID, id) => {
      let url = `https://emeticslearning-backend.herokuapp.com/api/user/`

      console.log(uiID)
      console.log(id)
      if (id != undefined) {

         axios.post(url + `delete_student_qualification/${id}/`, {}, {
            headers: dataService.authHeader(),
         })
            .then((response => {
               console.log(response.data)
               setProfessionalQualification([...professionalQualification.filter(data => data.id != id)])
            }))
            .catch((error => {
               let message = ''
               try {
                  message = (error.response.data.message || error.response.data.detail)
               }
               catch {
                  message = error.message
               }
               console.log(message)
               dispatch(setMessage(message, false))
            }))

      }
      else {
         setProfessionalQualification([...professionalQualification.filter(data => data.uiID != uiID)])
      }
   }
   const handleUpdateProfessional = (e, uiID, fieldToUpdate) => {
      setProfessionalQualification([...professionalQualification.map(data => {

         if (uiID == data.uiID) {
            return { ...data, [fieldToUpdate]: e.target.value }
         }
         else {
            return data
         }
      })])
   }

   const creatNewProfessionalQulificaationField = (e) => {

      setProfessionalQualification([...professionalQualification, {
         uiID: Math.random() * 150, "degree_type": "",
         "institutionName": "", "qualificationCategory": "professional", "course_name": ""
      }])
   }


   // for work expirence
   const deleteWorkExprience = (uiID, id) => {
      let url = `https://emeticslearning-backend.herokuapp.com/api/user/`

      if (id != undefined) {
         axios.post(url + `delete_student_work_expirence/${id}/`, {}, {
            headers: dataService.authHeader(),
         })
            .then((response => {
               console.log(response.data)
               setWorkExpirence([...professionalQualification.filter(data => data.id != id)])
            }))
            .catch((error => {
               let message = ''
               try {
                  message = (error.response.data.message || error.response.data.detail)
               }
               catch {
                  message = error.message
               }
               console.log(message)
               dispatch(setMessage(message, false))
            }))
      }
      else {
         setWorkExpirence([...workExpirence.filter(data => data.uiID != uiID)])
      }
   }
   const handleUpdateWorkExpirence = (e, uiID, fieldToUpdate) => {

      setWorkExpirence([...workExpirence.map(data => {

         if (uiID == data.uiID) {
            return { ...data, [fieldToUpdate]: e.target.value }
         }
         else {
            return data
         }
      })])
   }


   const handleCreateWorkExpirence = (e) => {
      setWorkExpirence([...workExpirence, { uiID: Math.random() * 150, work_experience: "" }])
   }




   const SendProfileToBackEnd = () => {
      let student = {}
      if (allData.user_types.includes('student')) {
         // if this persons is a student sent whatever he has to the backend
         student = {
            "student_profile": {
               // any thing that has to do with student profile
               "Job_Opportunity": allData.Job_Opportunity,

               "qualifications": [
                  // this is if any student has a student_qualification
                  ...educationQualification,
                  ...professionalQualification
               ],
               "work_experiences": [
                  ...workExpirence
               ]
            }
         }
      }

      let clean_data = {
         first_name: allData.first_name,
         last_name: allData.last_name,
         company_name: allData.company_name,
         proffesional_title: allData.proffesional_title,
         email: allData.email,
         dob: allData.dob,
         ...student

      }

      console.log(clean_data)
      axios.post(url, clean_data, { headers: dataService.authHeader() })
         .then((data) => {
            setLoading(false)
            // this will trigger useEffect to get the data to the page
            setTriggerUseEffect(triggerUseEffect + 1)
            console.log("Data Has Been Goten Yee")
            console.log(data.data)
         })
         .catch((error) => {
            setLoading(false)
            let message = "Something went Wrong"
            try {
               message = (error.response.data.message || error.response.data)
            }
            catch {
               message = error.message
            }

            dispatch(setMessage(message, false))
            // window.location.href=me
            // console.log(message)
         })
   }
   return (
      <div className="row column1" >
         <DashboardNavHeader/>
         {/* <div className="col-md-2"></div> */}
         <div className="col-md-12" >
            <div className="white_shd full margin_bottom_30" >
               <div className="full graph_head">
                  <div className="heading1 margin_0">
                     <h2>Your profile</h2>
                     <p>{isLoading ? "loading" : ""}</p>
                  </div>
               </div>
               <div className="full price_table padding_infor_info">
                  <div className="row">
                     {/* <!-- user profile section --> 
                                    <!-- profile image --> */}
                     <div className="col-lg-12">
                        <div className="full dis_flex center_text">
                           <div className="profile_img">
                           {image ?
                              //   <img className="img-responsive" src={UserImage} alt="#" />
                              <img width="180" className="rounded-circle" src={image} alt="#" /> 
                                :
                                <FaUserCircle size={120} />
                            }
                              
                           </div>
                           <div className="profile_contant">
                              <div className="contact_inner">
                                 {/* <h3>John Smith</h3> */}
                                 {/* <p><strong>About: </strong>Frontend Developer</p> */}

                                 <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                       <span className="input-group-text" id="basic-addon1">@</span>
                                    </div>
                                    <input type="text" className="form-control"
                                       value={allData.email}
                                       onChange={(e) => setAllData({ ...allData, 'email': e.target.value })}
                                       placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" />
                                 </div>

                                 <div class="row">
                                    <div class="col">
                                       <div className="form-group">
                                          {/* <label for="first-name">First name</label> */}
                                          <small id="emailHelp" className="form-text text-muted">First Name</small>
                                          <input type="text" className="form-control"
                                             value={allData.first_name}
                                             onChange={(e) => setAllData({ ...allData, "first_name": e.target.value })}
                                             id="first-name" aria-describedby="firstname" placeholder="Enter First name" />
                                          {/* <!-- <small >We'll never share your email with anyone else.</small> --> */}
                                       </div>
                                    </div>
                                    <div class="col">
                                       <div className="form-group">
                                          {/* <label for="lastName">Last name</label> */}
                                          <small id="emailHelp" className="form-text text-muted">Last Name</small>
                                          <input type="text"
                                             value={allData.last_name}
                                             onChange={(e) => setAllData({ ...allData, "last_name": e.target.value })}
                                             className="form-control" id="lastName" aria-describedby="lastName" placeholder="Enter Last name" />
                                       </div>
                                    </div>
                                 </div>

                                 {
                                    allData.user_types == 'student' ?
                                       <div className="form-group">
                                          <label for="status">Job Opportunity</label>
                                          <select name="" className="form-control"
                                             onChange={(e) => setAllData({ ...allData, 'Job_Opportunity': ('true' == e.target.value) ? true : false })}

                                          >
                                             {
                                                allData.job_opportunity ? (
                                                   <>
                                                      <option selected value={true}>Available</option>
                                                      <option value={false}>Not Available</option>
                                                   </>
                                                )
                                                   : (
                                                      <>
                                                         <option selected value={false}>Not Available</option>
                                                         <option value={true}>Available</option>
                                                      </>
                                                   )

                                             }
                                          </select>
                                       </div>

                                       : ""
                                 }




                                 {/* <div className="form-group">
                                    <label for="lastName">Company Name</label>
                                    <input type="text"
                                       value={allData.company_name}
                                       onChange={(e) => setAllData({ ...allData, "company_name": e.target.value })}
                                       className="form-control" id="companyName" aria-describedby="companyName" placeholder="Enter Company Name" /> */}
                                 {/* <!-- <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> --> */}
                                 {/* </div> */}

                                 <div className="form-row">
                                    <div class="col">
                                       <div className="form-group">

                                          <small id="emailHelp" className="form-text text-muted">Professional Title</small>
                                          <input type="text"
                                             value={allData.proffesional_title}
                                             onChange={(e) => setAllData({ ...allData, "proffesional_title": e.target.value })}
                                             className="form-control" id="ProfessionalTitle" aria-describedby="ProfessionalTitle" placeholder="Enter Company Name" />
                                       </div>
                                    </div>
                                    <div class="col">
                                       <div className="form-group">
                                          <small id="emailHelp" className="form-text text-muted">DOB</small>


                                          <input
                                             value={allData.dob}
                                             onChange={(e) => setAllData({ ...allData, "dob": e.target.value })}
                                             type="date" className="form-control" name="" id="" />
                                       </div>
                                    </div>
                                 </div>
                                 {

                                    allData.user_types == 'student' ?

                                       (

                                          <>
                                             <fieldset >
                                                <legend>Educational Qualification</legend>
                                                {educationQualification.length != 0 ?
                                                   educationQualification.map(data => {
                                                      // console.log(allData.educational_qualifications)
                                                      return (


                                                         <div className="form-group" style={{ 'position': "relative" }}>
                                                            <BsDashCircle size={18} style={{ marginRight: '0.9rem' }}
                                                               onClick={(e) => removeEducationQualification(data.uiID, data.id)}
                                                               style={{ color: "red", position: "absolute", right: "0", "cursor": "pointer" }}></BsDashCircle>
                                                            <label htmlFor="" ></label>

                                                            <div className="form-row">

                                                               <div className="col">
                                                                  <small id="emailHelp" className="form-text text-muted">Degree Type</small>
                                                                  <input
                                                                     onChange={(e) => handleUpdateEducation(e, data.uiID, 'degree_type')}
                                                                     value={data.degree_type == 'Nil'?'':data.degree_type}
                                                                     list="educational_qualification" className="form-control" />
                                                                  <datalist type="text" id="educational_qualification"  >
                                                                     {/* this is for the educatioanl Qualification */}
                                                                     <option value={"BSC"} />
                                                                     <option name="" id="" value={'BA'}>BA</option>
                                                                     <option name="" id="" value={'BAed'}>BAed</option>
                                                                     <option name="" id="" value={'MSC'}>MSC</option>
                                                                     <option name="" id="" value={'MBA'}>MBA</option>
                                                                  </datalist>
                                                               </div>
                                                               <div className="col">
                                                                  <small id="emailHelp" className="form-text text-muted">Name Of Institution</small>
                                                                  <input

                                                                     type="text" className="form-control"
                                                                     value={data.institutionName}
                                                                     onChange={(e) => handleUpdateEducation(e, data.uiID, 'institutionName')}
                                                                  />
                                                               </div>



                                                            </div>
                                                            <div className="form-group">
                                                               <small id="emailHelp" className="form-text text-muted">Course Name</small>
                                                               <input type="text" name="" id="" className="form-control"
                                                                  value={data.course_name}
                                                                  onChange={(e) => handleUpdateEducation(e, data.uiID, 'course_name')}

                                                               />
                                                            </div>

                                                         </div>
                                                      )
                                                   })
                                                   : ''
                                                }


                                                <BsPlusCircle size={20} style={{ color: "green", cursor: "pointer" }}
                                                   onClick={(e) => {
                                                      creatNewEducationalQulificaationField(e)
                                                   }}
                                                ></BsPlusCircle>
                                             </fieldset>



                                             <br />
                                             <fieldset>
                                                <legend>Professional Qualification</legend>

                                                {
                                                   professionalQualification != 0 ?
                                                      professionalQualification.map(data => {

                                                         return (
                                                            <div className="form-group" style={{ 'position': "relative" }}>
                                                               <BsDashCircle size={18}
                                                                  onClick={(e) => deleteProfessional(data.uiID, data.id)}
                                                                  style={{ color: "red", position: "absolute", right: "0", "cursor": "pointer" }}/>
                                                               <label htmlFor="" ></label>

                                                               <div className="form-row">

                                                                  <div className="col">
                                                                     <small id="emailHelp" className="form-text text-muted">Degree Type</small>
                                                                     <input type="text"
                                                                        onChange={(e) => handleUpdateProfessional(e, data.uiID, 'degree_type')}
                                                                        value={data.degree_type} className="form-control" />
                                                                  </div>
                                                                  <div className="col">
                                                                     <small id="emailHelp" className="form-text text-muted">Name Of Intuition</small>
                                                                     <input
                                                                        onChange={(e) => handleUpdateProfessional(e, data.uiID, 'institutionName')}

                                                                        type="text" value={data.institutionName} className="form-control" />
                                                                  </div>



                                                               </div>
                                                               <div className="form-group">
                                                                  <small id="emailHelp" className="form-text text-muted">Course Name</small>
                                                                  <input
                                                                     onChange={(e) => handleUpdateProfessional(e, data.uiID, 'course_name')}

                                                                     type="text" value={data.course_name} className="form-control" />
                                                               </div>

                                                            </div>
                                                         )
                                                      })
                                                      : ""
                                                }


                                                <BsPlusCircle size={18}
                                                   onClick={(e) => creatNewProfessionalQulificaationField(e)}
                                                   style={{ color: "green", cursor: "pointer" }}></BsPlusCircle>
                                             </fieldset>

                                             <fieldset >
                                                <legend>Work Experience</legend>


                                                {workExpirence.length != 0 ?
                                                   workExpirence.map((data, index) => {
                                                      return (
                                                         <>
                                                            <div className="form-group" style={{ 'position': "relative" }} key={index}>
                                                               <BsDashCircle size={18}
                                                                  onClick={(e) => deleteWorkExprience(data.uiID, data.id)}
                                                                  style={{ color: "red", position: "absolute", right: "0", "cursor": "pointer" }}></BsDashCircle>
                                                               <label htmlFor="" ></label>

                                                               <div className="form-row">

                                                                  <div className="col">
                                                                     <small id="emailHelp" className="form-text text-muted">Experience</small>
                                                                     <input
                                                                        value={data.work_experience}
                                                                        onChange={(e) => handleUpdateWorkExpirence(e, data.uiID, 'work_experience')}
                                                                        type="text" className="form-control"
                                                                     />
                                                                  </div>



                                                               </div>

                                                            </div>



                                                         </>
                                                      )
                                                   })

                                                   : ""
                                                }

                                                < BsPlusCircle size={20}
                                                   onClick={(e) => handleCreateWorkExpirence(e)}
                                                   class="fas fa-plus-circle" style={{ color: "green", cursor: "pointer" }}

                                                ></BsPlusCircle>
                                             </fieldset>
                                          </>
                                       )
                                       : ""
                                 }
                                 {/* workExpirence */}





                                 <br />
                                 <div class="paymentType__btn" style={{ flexWrap: "wrap" }}>
                                   { loading ?
                                    <button class="btn btn-secondary"
                                       // onClick={(e) => { SendProfileToBackEnd(), setLoading(true) }}
                                    >Updating Data</button>
                                    :
                                     <button class="btn"
                                       onClick={(e) => { SendProfileToBackEnd(); setLoading(true) }}
                                    >Update</button>
                                 }
                                 </div>

                                 {/* end of form card */}
                              </div>













                           </div>
                        </div>
                        {/* <!-- profile contant section --> */}
                        {/* <!-- end user profile section --> */}
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-md-2"></div>
         </div>
         <Footer/>
         {/* <!-- end row --> */}
      </div>

   )
}

export default StudentProfile