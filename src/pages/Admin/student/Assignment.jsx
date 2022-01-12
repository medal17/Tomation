
// the assignment should have a drop down that enables filtering
// they can filter by class all just get all

import axios from "axios"
import { useEffect, useState } from "react"
import dataService from '../../../services/data.service'



const Assignment =()=>{

    const [isLoading,setIsLoading] = useState(true);
    // this will hold all the data gotten from the Backed
    const [mainData,setMainData] = useState(false);
    // this data will be getting it data from mainData so ..we going to manipulate this state a lot 
    const [filterData,setFilterData]=useState(false);



    useEffect(()=>{
        axios.get('https://emeticslearning-backend.herokuapp.com/api/get_all_assginment',{
          // this will give us the current logged in user Token
          headers:dataService.authHeader()
        }).then((response)=>{
          setMainData(response.data.data)
          setFilterData(response.data.data)
          // console.log(,'s')

          setIsLoading(false)
        })
        .catch((error)=>{
          setIsLoading(false)
          console.log(error.message)
        })
    },[])


    const HandleFilterByCourse=(e)=>{
      console.log(e.target.value);
      setFilterData(mainData.filter(data=>{
        return data.Course_name.includes(e.target.value)
      }))
    }

    return (
        <>
  <div class="container">
                        <h4>Your Student Dashboard, Nwokolo o</h4>

                        <div class="input-group" style={{maxWidth: "400px", margin:"1rem auto"}}>
                            <select class="custom-select" id="inputGroupSelect04" onChange={(e)=>HandleFilterByCourse(e)}>
                            <option selected>Search Assignment By Course Name</option>

                              {
                                (
                                  mainData && mainData.map(({Course_name},index)=>(
                                    
                                    <option key={index}>{Course_name}</option>
                                ))
                              )
                              }
                            </select>
                            {/* <!-- <div class="input-group-append">
                              <button class="btn btn-outline-secondary" type="button">Button</button>
                            </div> --> */}
                          </div>
                     </div>
                     <div class="container">
        
                        <div class="row" style={{marginBottom: "1rem"}}>
                         
          
                            {isLoading?<p>Loading....please wait..</p>
                          :
                          
                          (filterData && filterData.map(({assignments})=>{
                              // note the assignments has list of all the assignment so all we need to do is to loop through them and display it
                            return assignments.map(({name,assignment_file,description},index)=>{

                              return (
                                (

                                  <div class="col-sm mb-10" key={index}>
                                  <div class="card" style={{width: "18rem",cursor:"pointer",borderRadius:"30px"}}>
                                      <div class="card-body">
                                          <h4>{name}</h4>
                                        <p class="card-text">description</p>
                                          
                                        <div class="paymentType__btn" style={{'flexWrap':"wrap"}}>
                                        
                                        <button class="btn">Danload Materials</button>
                                      </div>
                                      </div>
                                    </div>
                                  </div> 
                                )
                              )
                            })
                          }))
                          }

                          </div>

  
                    </div>

        </>
    )
}


export default Assignment