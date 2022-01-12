import { Link } from "react-router-dom"
import axios from "axios"
import { setMessage } from "../redux/actions/messageAction"
import { useDispatch } from "react-redux";
import PaymentPage from "./paymentPage";
import { useState } from "react";

const LandingPageCard = ({id,name,about,author=null,isCourse=false})=>{
    // isCourse tell if it should reder as a Course Card Or School Card
    // this helpn us represents the Courses and Schools Well
    const dispatch = useDispatch()

    const [showPaymentModal,setShowPaymentModel] = useState(false);
    return (
<>


{showPaymentModal && <PaymentPage courseId={id} setShowPaymentModel={setShowPaymentModel} />}


            <div className="courses">
            <div className="">
            {/* <div className="icon"><span className="flaticon-engineer"></span></div> */}
            <div className="text">
            <h2 style={{textAlign:"center"}}>
                {
                    isCourse==false?`School OF ${name}`:name
                }
            </h2>
            
            <div className="author-wrap d-flex align-items-center">
            {/* <div className="img" style={{backgroundImage:`url(${userImage})`}}></div> */}
            <span className="author">{author != null ?`Tutor:${author}`:""}</span>
            </div>
            
            </div>
            </div>
            <br />
            {
                isCourse==true?
                <div className="text-center bg-light rounded py-2 my-3">
            <Link to={`/course-detail/${id}`}>
                <p className="course-price mb-0"><span>Learn more</span></p>
            </Link>
            </div>:""}
            
            
<div className="text-center">
    {
        isCourse==true?
<Link onClick={e=>setShowPaymentModel(true)} className="btn d-block btn-primary btn-outline-primary py-3">Enroll Now!</Link>
        :
<Link to={`/course/${id}`} className="btn d-block btn-primary btn-outline-primary py-3">View Courses</Link>
        
    }
</div>


            </div>
   
 </>    
    )
}
export default LandingPageCard