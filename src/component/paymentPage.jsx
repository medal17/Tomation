import PaymentHeroImage from '../../src/assets/images/ximage_2.jpg.pagespeed.ic.VzEAApnz9L.jpg'
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import axios from "axios"
import dataService from '../services/data.service';
import { setMessage } from "../redux/actions/messageAction"
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { FaTimesCircle } from 'react-icons/fa'
import CourseDetail from '../pages/CourseDetail/CourseDetail';
import BackButton from './BackButton';


const PaymentPage = ({ courseId, setShowPaymentModel }) => {

    // console.log(courseId)
    const history = useHistory()
    const [courseDetail, setCourseDetail] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()

    console.log(courseDetail)

    useEffect(() => {
        const API_URL = 'https://emeticslearning-backend.herokuapp.com';
        const user = JSON.parse(localStorage.getItem("user"));

        axios.get(API_URL + `/api/course_detail/${courseId}/`, {
            headers: dataService.authHeader(),
        }).then((response) => {
            // console.log(response.data)
            setCourseDetail({ ...response.data.data })
            setIsLoading(false)


        }).catch((error) => {
            console.log(error.message)
            setIsLoading(false)
            dispatch(setMessage(error.response.message, false))
        })
    }, [])

    const handleCourseEnroll = (e) => {


        const user = JSON.parse(localStorage.getItem("user"));
        // console.log(localStorage.getItem("user"))

        if (user) {
            console.log(user.data.token)
            axios.post(`https://emeticslearning-backend.herokuapp.com/api/initialize_payment/${courseId}/`, {}, {
                headers: {
                    'Authorization': `Token ${user.data.token}`
                }
            })
                .then((response) => {
                    console.log(response.data.data.data.authorization_url)
                    dispatch(setMessage("Redirecting To Payment Page", true))
                    setTimeout(() => { }, 900)
                    window.location.href = response.data.data.data.authorization_url


                })
                .catch((error) => {
                    console.log(error.response.data)
                    dispatch(setMessage(error.response.data.message, false))
                })

        }
        else {
            dispatch(setMessage("You Need To Be Logged In To Buy A Course", false))
            history.push('/signin')
        }
    }

    return (

        <div class=" paymentTypePageContainer d-flex justify-content-center py-lg-5 " >
            <div class="paymentTypePageContainer__content py-lg-5 mt-5 mx-2 bg-light  align-content-center " >
                <div className='px-lg-5 px-4'>
                    <BackButton />

                    <i
                        onClick={() => setShowPaymentModel(false)}
                        style={{ cursor: "pointer" }} id="close_paymentTypePageContainer">
                        <FaTimesCircle onClick={() => setShowPaymentModel(false)} className='' size={20} color='red' />
                    </i>

                    <h2 className='text-center text-dark'>Register Now</h2> <br />
                    <h2>{courseDetail ? courseDetail.courseDetail[0].name : ''}</h2>
                    <hr />

                    <p>
                        {isLoading ? 'loading' : (courseDetail ? courseDetail.courseDetail[0].about : '')}
                    </p>
                    {/* <br /> */}
                </div>
                {/* <h3>SELECT SCHOLARSHIP</h3> */}
                {/* <hr /> */}<center>
                    <div style={{ position: 'absolute', bottom: 0, margin: '0 auto' }} className='row container-center px-5'>

                        {/* <span className='text-center'>Enjoy up to scholarship. Limited slots left</span> */}

                        <div className='row '>
                            <div className='col-lg-6'>
                                <div className='row center'>
                                    <span>Non-corp Members</span>
                                    <div class=" col-lg-3 pt-3 col-12">
                                        <button class="btn button-color text-white" onClick={(e) => handleCourseEnroll(e)}>Pay in Full</button>
                                        {/* <button class="btn">Part Payment</button> */}
                                    </div>

                                    <div class="col-lg-3 pt-3 col-md-12">
                                        <button class="btn button-line" onClick={(e) => handleCourseEnroll(e)}>Pay in Installment</button>
                                        {/* <button class="btn">Part Payment</button> */}
                                    </div>
                                </div>
                            </div>

                            {/* </div>
                        <div className='row '> */}
                            <div className='col-lg-6 '>
                                <div className='row center'>
                                    <span>Corp Members</span>

                                    <div class="col-lg-3 pt-3 col-md-12">
                                        <button class="btn button-color text-white" onClick={(e) => handleCourseEnroll(e)}>Pay in Full</button>
                                        {/* <button class="btn">Part Payment</button> */}
                                    </div>

                                    <div class="col-lg-3 pt-3 col-md-12">
                                        <button class="btn button-line" onClick={(e) => handleCourseEnroll(e)}>Pay in Installment</button>
                                        {/* <button class="btn">Part Payment</button> */}
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* <p>{user}</p> */}
                        <br />
                        {/* <span>You will be redirected to payment page after this selection</span> */}
                        <span><p className='text-center pb-2 text-grey'>Our Payment Gateway is Secure and Safe</p></span>
                    </div></center>
            </div>

            {/* <div class="paymentTypePageContainer__image">
                <img src={PaymentHeroImage} alt="" />
            </div> */}
        </div >
    )
}

export default PaymentPage