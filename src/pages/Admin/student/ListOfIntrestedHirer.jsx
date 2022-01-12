import { Link } from "react-router-dom"
import DashboardHeader from "../../../component/DashboardHeader"
import { useEffect,useState } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { setMessage } from "../../../redux/actions/messageAction"
import dataService from "../../../services/data.service"









const ListOfIntrestedHirer=()=>{

    const dispatch =useDispatch()
    const [listOfIntrestedEmployers,setListOfIntrestedEmployers] = useState([])
    const [isLoading,setIsLoading]=useState(true)
    const [triggerUseEffect,setTriggerUseEffect] = useState(0)

    const setApproveRequest = (e,id)=>{
        
        console.log("Clicked")
        axios.post(`https://emeticslearning-backend.herokuapp.com/api/student_approves_hiring_request/${id}/`,{},{
            headers:dataService.authHeader()
        })
        .then(data=>{
            console.log(data)
            setTriggerUseEffect(triggerUseEffect+1)
        })
        .catch((error=>{
            let message;
            try {
                    message = (error.response.data.message || error.response.data.detail)
            } catch {
                    message = error.message
            }
            setIsLoading(false)
            dispatch(setMessage(message,false))
           
        }))
    }
    useEffect(()=>{

        axios.get('https://emeticslearning-backend.herokuapp.com/api/student_approves_hiring_request/4/',{
            headers:dataService.authHeader()
        })
        .then(response=>{
            console.log(response.data)
            setListOfIntrestedEmployers(response.data.data)
            setIsLoading(false)
        })
        .catch(error=>{
    
            let message;
            try {
                    message = (error.response.data.message || error.response.data.detail)
            } catch {
                    message = error.message
            }
            setIsLoading(false)
            dispatch(setMessage(message,false))
    
        })
    },[triggerUseEffect])
    
    



    return (
        <>
        <DashboardHeader title='Students Of Intrest'/>
      
        
        <table class="table table-bordered ">
              <thead class="thead-dark">
                {/* this the header of the table*/}
            <tr>
                {/* <th scope="col">#</th> */}
                {/* <th scope="col">Course Title</th> */}
                <th scope="col">Employer</th>
                {/* <th scope="col">View Student Detail</th> */}
                <th scope="col">Click To Approve approved</th>
            </tr>

              </thead>
    <tbody>
  
        {isLoading?<p>Loading..please wait</p>
        
    :(listOfIntrestedEmployers.length !=0)?
    listOfIntrestedEmployers.map(data=>{
        // console.log()
        return (
            <tr >
            <td>{`${data.hirer__user__first_name} ${data.hirer__user__last_name}`}</td>
            <td style={{'display':'flex',"flexDirection":"column","alignItems":"center"}}>


                        {data.student_approve?
                        <>
                        <i class="fas fa-check-circle" style={{color:"green"}}></i>
                    Confirm
                </>
                :
                <>
                                <i class="fas fa-align-center" onClick={(e)=>setApproveRequest(e,data.id)}  style={{color:"gray"}}></i>
                                pending
                        </>

                        }
                
                        
            
                

                </td>
        </tr>
        )
    })
            
            :""     
            
    }
        

       
     
    </tbody>
              </table>

        </>
    )
}

export default ListOfIntrestedHirer