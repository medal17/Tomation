import PaymentHeroImage from '../../src/assets/images/ximage_2.jpg.pagespeed.ic.VzEAApnz9L.jpg'
import { Link } from "react-router-dom"
import axios from "axios"
import { setMessage } from "../redux/actions/messageAction"
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';


const  PaymentPage = ({courseId,setShowPaymentModel})=>{

    console.log(courseId)
    const history = useHistory()
    const dispatch = useDispatch()
    const handleCourseEnroll = (e)=>{
        

        const user = JSON.parse(localStorage.getItem("user"));
        if(user){
            // console.log(user.data.token)
            axios.post(`https://emeticslearning-backend.herokuapp.com/api/initialize_payment/${courseId}/`,{},{
                headers:{
                    'Authorization': `Token ${user.data.token}`
                }
            })
            .then((response)=>{
                console.log(response.data.data.data.authorization_url)
                dispatch(setMessage("Redirecting To Payment Page",true))
                setTimeout(()=>{},900)
                window.location.href=response.data.data.data.authorization_url


            })
            .catch((error)=>{
                console.log(error.response.data)
                dispatch(setMessage(error.response.data.message,false))
            })

        }
        else{
            dispatch(setMessage("You Need To Be Logged In To Buy A Course",false))
            history.push('/signin')
        }
    }

    return (

        <div class=" paymentTypePageContainer" style={{zIndex:100000000000}}>
            <div class="paymentTypePageContainer__content">
                <i 
                onClick={()=>setShowPaymentModel(false)}
                style={{cursor:"pointer"}}
                class="fas fa-times close" id="close_paymentTypePageContainer"></i>
            
                <h2>Learn tech Skill</h2>

                <p>
                    We are a Technology Workforce Development company that helps people learn premium technology skills
                    virtually and partners with companies to hire the 
                    best talents and invest in workforce development. Currently with learners from 19 countries.
                </p>
                <br />

                <h3>SELECT SCHOLARSHIP</h3>
                <span>Enjoy up to scholarship. Limted slots left</span>
                <div class="paymentType__btn">
                    <button class="btn" onClick={(e)=>handleCourseEnroll(e)}>Full Payment</button>
                    {/* <button class="btn">Part Payment</button> */}
                </div>
            <br />
                <li>You will be redirected to payment page after this selection</li>
                </div>

            <div class="paymentTypePageContainer__image">
            <img src={PaymentHeroImage} alt="" />
            </div>
    </div>
    )
}

export default PaymentPage