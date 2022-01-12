import { useEffect, useState } from "react"

import {useLocation} from "react-router-dom"
import axios from "axios"
import Nav from "./component/nav"
import Footer from "./component/footer"
import { useDispatch } from "react-redux"
import { setMessage } from "./redux/actions/messageAction"


const CallBack = (props)=>{
    const location = useLocation()
    const [isSuccess,setIsSuccess] = useState(false);
    const [isloading,setIsloading] = useState(true);
    const dispatch = useDispatch()
    // const [erro]
    
    // console.log(location)

   const reference = new URLSearchParams(location.search).get("reference");
    

    useEffect(()=>{
        axios.get(`https://emeticslearning-backend.herokuapp.com/api/verify_payment/${reference}/`)
        .then(data=>{
            console.log(data.data)
            setIsSuccess(true)
            setIsloading(false)
        })
        .catch(error=>{
            setIsloading(false)
            dispatch(setMessage(error.message,false))
            console.log(error)
            setIsSuccess(false)
        })
    },[])
    return (
        <>
            <Nav />
                <div className="container" >
                <div className=" blog-single" style={{margin:"50px 0",textAlign:"center"}}>
                      
               {
                isloading?<p>Loading...</p>
                :
               ""
               }
                {
                    isSuccess==true?
                    ( 
                        <>
                         <h2 className="mb-3">You made the right choice!! </h2>
                      <p> We are processing your payment currently 
                          Once we are done  we are going to send you confirmation email</p>
                      </>
                      )

                        :
                       ""
                    }



                </div> 
                </div>
            <Footer />
        </>
    )
}

export default CallBack