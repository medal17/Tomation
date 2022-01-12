import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { setMessage } from "../../../redux/actions/messageAction";
import dataService from "../../../services/data.service"
import { Link,useHistory,useParams } from 'react-router-dom'
import DashboardHeader from "../../../component/DashboardHeader";
import PaymentPage from "../../../component/paymentPage";


let MainUrl ='https://emeticslearning-backend.herokuapp.com'

const CoursesList =()=>{
  const [tableData,setTableData] =useState(false);
  const [isLoading,setIsLoading] = useState(true);
  const [showPaymentModal,setShowPaymentModel] = useState(false);

  const dispatch = useDispatch(); 

  const history = useHistory();
  const {filterCourseBy} = useParams();

  let  FormToRender= null;
  let endPoint='';
    if(filterCourseBy == 'Ongoing'){
      endPoint = '/api/filter_course_by_status/ongoing/'
      FormToRender = (
        <>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Download Assginment</th>
                <th scope="col">Upload Assginment</th>
                <th scope="col">Start Date</th>
                <th scope="col">End Date</th> 
                <th scope="col">Zoom Link</th>

            </tr>
        </>)
    }

    else if (filterCourseBy =='Completed'){
      endPoint = '/api/filter_course_by_status/completed/'

      FormToRender = (
        <>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Course Outline</th>
                <th scope="col">Download Certificate</th>
            </tr>
        </>)
    }




    else if (filterCourseBy =='Open'){
      endPoint = '/api/filter_course_by_status/open/'

      FormToRender = (
        <>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Start Date</th>
                <th scope="col">End Date</th>

                <th scope="col">Course Outline</th>
                <th scope="col">Payment</th>
                
            </tr>
        </>)
    }

  useEffect(()=>{
    // console.log("Effect")
        axios.get(MainUrl+endPoint,{
            headers:dataService.authHeader()
        }).then(resp=>{

          // console.log()
          setIsLoading(false)
          setTableData(resp.data.data)
        })
        .catch(error=>{
          setIsLoading(false)
          let message =undefined;
          try{
             message = error.response.data.detail
            }
          catch{
             message = error.message

          }
          dispatch(
            setMessage(message,false)
          )

        })
    },[])



    const handleSubmitingAssigment = (e,courseID)=>{
      console.log(courseID)
      // this handles submiting the assginment file
      const formData = new FormData()
      let Assignmentdata = e.target.files[0]
      formData.append('student_assignment',Assignmentdata)

      axios.post(MainUrl+`/api/student_upload_assignment/${courseID}/`,formData,{
        
        headers:dataService.authHeader(),
      })

      .then(response=>{
    
        dispatch(setMessage(response.data.message,true))
      })
      .catch(error=>{
        let message = ''
        try{
          message= (error.response.data.message || error.response.data.detail) 
        }
        catch{
          message = error.message
        }

        
        
        dispatch(setMessage(message,false))
      })


    }

    
    return (

        <>

          {/* filterCourseBy is Gotten from the useParams  */}
          <DashboardHeader title={filterCourseBy} />
           <div class="container table-responsive py-5"> 
              <table class="table table-bordered ">
              <thead class="thead-dark">
                {/* this the header of the table*/}
                    {FormToRender}
              </thead>
    <tbody>
      
  
      {
      isLoading? <p>Loading..</p>
        :
        tableData?
        tableData.map((data,index)=>{
          
          
      if(filterCourseBy == 'Ongoing') {
        return(
          <tr>
            <th scope="row" key={index}>{index+1}</th>
            <td>{data.name}</td>
            {
              data.assignmentFIle==""?
           <td>No file at the moment</td>
            :
            <td><Link onClick={()=>window.location.href=data.assignmentFIle} className="btn" >Download Now</Link></td>
            }
            {/* form */}
            <td><input type='file' className="btn" placeholder="Upload Now" onChange={(e)=>handleSubmitingAssigment(e,data.id)} /> </td>
            <td>{data.start_date}</td>
            <td>{data.end_date}</td>
            <td><a href={data.is_live?data.zoom_class_link:"#"}>
            {/* <p>Class Not live yet</p> */}
        
            {data.is_live?"attend class":"Check back not Live yet"}
              </a></td>
          </tr>
                )
              
      }


      if (filterCourseBy =='Completed'){
        return (
          <tr>
            <th scope="row" key={index}>{index+1}</th>
            <td>hhfhdhfudhf</td>
            <td><Link to={`/course-detail/${data.course_id}`}>View Course Outline</Link></td>
            <td><Link className="btn" onClick={(e)=>window.location.href=data.certificate_image} >Download Now</Link></td>
            
          </tr>
        )
      }

      if(filterCourseBy == 'Open'){
        return (
          <>
        {showPaymentModal &&  <PaymentPage courseId={data.id} setShowPaymentModel={setShowPaymentModel} />}

          <tr>
            <th scope="row" key={index}>{index+1}</th>
            <th>{data.name}</th>
            <th >{data.start_date}</th>
            <th >{data.end_date}</th>
            <td><Link to={`/course-detail/${data.id}`}>View Course Outline</Link></td>

            <th ><button className="btn" onClick={e=>{e.preventDefault(); setShowPaymentModel(true)}}>Pay now</button></th>

          </tr>

          </>
        )
      }
      
      
      })
  : <p>You Dont have Any Ongoing Course at the moment</p>
    }


   
     
    </tbody>
              </table>
        </div>
         </>
    )
}

export default CoursesList