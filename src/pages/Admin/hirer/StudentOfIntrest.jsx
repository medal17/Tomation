import { Link } from "react-router-dom"
import DashboardHeader from "../../../component/DashboardHeader"
import { useEffect, useState } from "react"
import axios from "axios"
import dataService from "../../../services/data.service"
import { setMessage } from "../../../redux/actions/messageAction"
import { useDispatch } from "react-redux"


const StudentOfIntrest = ()=>{
    // this component will show a table of all the student The Employer has Sent Request
    const [allAlumni,setAllAlumni] = useState([])
    const [isLoading,setIsLoading] = useState(true);
    const dispatch = useDispatch()
    useEffect(()=>{

        axios.get('https://emeticslearning-backend.herokuapp.com/api/get_all_alumni_hirer_sentIntrest/',{
            headers:dataService.authHeader()
        })
        .then(response=>{
            setAllAlumni([...response.data.data])
            setIsLoading(false)
        })
        .catch(error=>{
            let message='';
            try{
                message=(error.response.data.message || error.response.data.detail)
            }
            catch{
                message = error.message
            }
            setIsLoading(false)
            dispatch(setMessage(message,false))
        })

    })

    return (

        <>
        <DashboardHeader title='Students Of Intrest'/>
      
        
        <table class="table table-bordered ">
              <thead class="thead-dark">
                {/* this the header of the table*/}
            <tr>
                {/* <th scope="col">#</th> */}
                {/* <th scope="col">Course Title</th> */}
                <th scope="col">Student Name</th>
                <th scope="col">View Student Detail</th>
                <th scope="col">Student has approved</th>
            </tr>

              </thead>
    <tbody>
    {isLoading?<p>Loading.. please wait</p>
    :
    (allAlumni.length !=0)?
    allAlumni.map((data,index)=>(
        <tr key={index} >
        {/* <th scope="row" >{data.</th> */}
       <td>{`${data.student__user__first_name} ${data.student__user__last_name}`}</td>
       <td><Link className="btn" to={`/student/${data.student__id}`}>View</Link></td>
       <td style={{'display':'flex',"flexDirection":"column","alignItems":"center"}}>

           {data.student_approve?
                <>
                           <i class="fas fa-check-circle" style={{color:"green"}}></i>
                    Confirm
                </>
                :
            <>
                <i class="fas fa-align-center" style={{color:"gray"}}></i>
                pending
           </>
            }

           </td>
    </tr>
    ))


        :
        <p>No data found at the moment</p>
    
    }


           
         {/* :
         <p>No data Found at the moment</p> */}

       
     
    </tbody>
              </table>

        </>
    )
}

export default StudentOfIntrest