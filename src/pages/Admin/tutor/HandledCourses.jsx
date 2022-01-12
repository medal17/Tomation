import DashboardHeader from "../../../component/DashboardHeader";
import {useState,useEffect} from 'react';
import axios from "axios";
import dataService from "../../../services/data.service"
import { setMessage } from "../../../redux/actions/messageAction"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const HandledCourses =()=>{
    // this shows the Course A tutor Handles
    const mainUrl = 'https://emeticslearning-backend.herokuapp.com/'
    const [isLoading,setIsLoading] = useState(true);
    const [allCourses,setAllCourses] = useState([]);
    // start this handles the list of course stat
    const [listOfcourseAssignments,setListOfcourseAssignments] = useState([]);
    const [toggleAssignmentModal,setToggleAssignmentModal] =useState(false);
    // end this handles the list of course stat
   const [toggleZoomLinkModal,setToggleZoomLinkModal]=useState(false);
   const [ZoomLink,setZoomLink]=useState(""); 
   // this handles the Update link Modal
    const [currentCourseID,setCurrentCourseID]=useState(null)
    // const [currentIs_liveStatus,setCurrentIs_liveStatus] = useState(false)
    const dispatch = useDispatch()

    // this state helps me trigger the UseEffect at any time
    const [triggerUseEffect,setTriggerUseEffect] = useState(0)
    useEffect(()=>{


        axios.get(mainUrl+'api/tutor_manage_course/',{
            headers:dataService.authHeader()
        })
        .then(response=>{
            setIsLoading(false)
            setAllCourses([...response.data.data])
        })
        .catch(error=>{
            let message = ''
            try {
                message= (error.response.data.message||error.response.data.detail)
            } catch  {
                message = error.message
            }
            setIsLoading(false)
            dispatch(setMessage(message,false))
        })


    },[triggerUseEffect])


    const handleGetingAssignment =(e,courseID)=>{
        // e.preventDefault() 
        axios.get(mainUrl+`api/tutor_manage_course/${courseID}/get_assignment_submited_byStudent`,{
            headers:dataService.authHeader(),
        })
        .then(response=>{
            console.log(response)
            setListOfcourseAssignments([...response.data.data])
            setToggleAssignmentModal(true)
        })
        .catch(error=>{
            let message = "";
            try {
                message =( error.response.data.message || error.response.data.detail)
            } catch{
                message = error.message
            }

            dispatch(setMessage(message,false))
        })
    }

  const handleZoomLinkAndIs_live=(course_id,status,is_liveValue)=>{
    let data ={}
    
   if (status =='zoomLink'){
        data={"zoom_class_link":ZoomLink}
        
    }
    if(status=='is_live'){
        data ={"is_live":is_liveValue}
    }
    axios.put(mainUrl+`api/tutor_manage_course/${course_id}/`,data,{
        headers:dataService.authHeader(),
    }).then(response=>{
        console.log(response.data.data)
        setTriggerUseEffect(triggerUseEffect+1)
        dispatch(setMessage(response.data.message,true))

    })
    .catch(error=>{
        let message = ''
        try {
            message= (error.response.data.message || error.response.data.detail)
        } catch  {
                message = error.message
        }
        dispatch(setMessage(message,false))

    })
  } 

  const handleAssignmentUpload = (e,courseID)=>{
      
    const formdata = new FormData()
    formdata.append('assignment_file',e.target.files[0])

    axios.post(mainUrl+`api/tutor_manage_course/create_assignment/?tutorID=0&courseID=${courseID}`,formdata,{
        headers:dataService.authHeader()
    })
    .then(response=>{

            // console.log()
        dispatch(setMessage("Uploaded Successfully",true))

    })
    .catch((error)=>{
        let message 
        try {
                message = (error.response.data.message || error.response.data.detail)
        } catch {
            message = error.message 
            
        }

        
        dispatch(setMessage(message,false))

    })

  }
    return (
        <>
        <DashboardHeader title='Courses You Handle'/>
        




        <div class="container table-responsive py-5"> 
            <div >



            {/* <div className="form-group">
                <input type="search"
              
                placeholder="search by student name"
                className="form-control" style={{width:"40%"}}/>
            </div> */}
            </div>
{/* start this modal is for updateding a course zoom link */}
<div style={{display:toggleZoomLinkModal?"block":'none'}}>
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Zoom Link</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"
        onClick={(e)=>setToggleZoomLinkModal(false)}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
           <div className="form-group">
           <input onChange={(e)=>setZoomLink(e.target.value)} type="text" placeholder="Enter Zoom Link"  className="form-control" required/>
           </div>
      </div>
      <div class="modal-footer">
        {/* <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> */}
        {currentCourseID==null?<button>Disabled</button>:
        <button  type="button" class="btn btn-primary" onClick={(e)=>handleZoomLinkAndIs_live(currentCourseID,'zoomLink')}>Save changes</button>
        }
        
      </div>
    </div>
  </div>
</div>
{/* end this modal is for updateding a course zoom link */}

<div style={{display:toggleAssignmentModal?"block":'none'}}>
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">List of Submited Assignments</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={(e)=>setToggleAssignmentModal(false)}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" style={{overflowY:"scroll",maxHeight:"200px"}}>
           <table className="table table-bordered " >
               <thead className="thead-dark">
                    <tr >
                        {/* <th scope="col">#</th> */}
                        <th scope="col">Student Name</th>
                        <th scope="col">Assignment File</th>
                        
                    </tr>
               </thead>
               <tbody>

                   {
                       listOfcourseAssignments.length !=0?
                       listOfcourseAssignments.map(({student_name,assignment_url_file},index)=>(
                        <tr key={index}>
                        <th>{student_name}</th>
                        <td>
                        <Link onClick={()=>window.location.href=assignment_url_file} className="btn" >Download Now</Link>
                        </td>
 
                        </tr>
                       ))
                       :""
                   }
                   
                   
               </tbody>
           </table>
      </div>
     
    </div>
  </div>
</div>


              <table className="table table-bordered ">
              <thead className="thead-dark">
              <tr>
                        <th scope="col">#</th>
                        <th scope="col">Course Title</th>
                        <th scope="col">Toggle Live</th>
                        <th scope="col">Upload Assignment</th>
                        <th scope="col">Danload Assignments</th>
                        {/* <th scope="col">Update Zoom Link</th> */}
                    </tr>
              </thead>
    <tbody>
      

    {
                    isLoading?
                    <p>Loading... please wait</p>
                    :
                    (allCourses.length!=0)?
                    allCourses.map(({name,is_live,id},index)=>(
                        // id in this case is the course id
                        <tr key={index}>
                        <th scope="row" >1</th>
                       <td>{name}</td>
                       <td 
                       onClick={(e)=>handleZoomLinkAndIs_live(id,'is_live',!is_live)}
                       style={{'display':'flex',"flexDirection":"column","alignItems":"center","cursor":"pointer"}}>
                       {
                           is_live?
                           <>
                                   <i class="fas fa-check-circle" style={{color:"green"}}></i>
                            live
                        </>
                        :
                    <>
                        <i class="fas fa-align-center" style={{color:"gray"}}></i>
                        not live
                   </>
                       }
                       </td>
                       <td><input type='file' className="btn" placeholder="Upload Now"  onChange={(e)=>handleAssignmentUpload(e,id)} /></td>
                       <td><button className="btn" onClick={(e)=>handleGetingAssignment(e,id)}>Get All Assginment Submited</button></td>
                      
                  </tr>
                    ))
                    :<p>No Course Has been Assigned to you yet</p>
                }


         
      
   
     
    </tbody>
              </table>
        </div>




        </>
    )
}

export default HandledCourses