import ImageOfManINSuite from '../../assets/images/campbell-s-photography-sw0-R8wb0MA-unsplash.jpg'
import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMessage } from '../../redux/actions/messageAction';
import axios from 'axios';
import dataService from '../../services/data.service';
import PaymentPage from '../../component/paymentPage';
import Nav from "../../component/nav"
import Footer from '../../component/footer';
import { FaWhatsapp } from 'react-icons/fa'
import BackButton from '../../component/BackButton';
const CourseDetail = () => {

    const { courseID } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [courseDetail, setCourseDetail] = useState(null);
    const history = useHistory()
    const dispatch = useDispatch()
    // this is a state that allows open and close of the payment Post
    const [showPaymentModal, setShowPaymentModel] = useState(false);


    useEffect(() => {
        const API_URL = 'https://emeticslearning-backend.herokuapp.com';
        const user = JSON.parse(localStorage.getItem("user"));

        axios.get(API_URL + `/api/course_detail/${courseID}/`, {
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
    // console.log(courseDetail.courseDetail[0].brochure ? courseDetail.courseDetail[0].brochure : 'oh')
    return (

        <>
            <Nav />

            {showPaymentModal && <PaymentPage courseId={courseDetail.courseDetail[0].id} setShowPaymentModel={setShowPaymentModel} />}



            {
                isLoading == true ? <div style={{ position: "absolute", top: '200px', left: "100px" }} >Loading...</div>

                    :
                    courseDetail == null ? "" :
                        (
                            <>

                                <div className="container" >
                                    <br /><br />
                                    <div className="courseDetailHeroCard">
                                        <div className="courseDetailHeroCard__content" >
                                            <BackButton />

                                            <p style={{ textTransform: "uppercase", }}>For Experienced Professionals</p>

                                            <h2>{courseDetail.courseDetail[0].name}</h2>
                                            <p className="courseDetailHeroCard__content__little_info">
                                                {courseDetail.courseDetail[0].about}
                                            </p>

                                            <div className="courseDetailHeroCard__content__duration_details_container">
                                                {/* this code below checks if the person has completed the Course if Yes tell them  */}
                                                {
                                                    courseDetail.isCompletedCourse ?
                                                        <p>You Have Completed this Course</p>
                                                        :
                                                        (
                                                            <div className='container'>
                                                                <p className='item'>4 Weeks (Weekends Only)</p>
                                                                <p className='item'>100% Virtual instructor led</p>
                                                            </div>
                                                        )
                                                }
                                            </div>

                                            <div className="courseDetailHeroCard__content__btn_container">

                                                {/* this buttons are dynamic that if a user has paid for this course or not */}

                                                {
                                                    courseDetail.isPaidforCourse == true ?
                                                        <button className="btn btn-primary p-4 py-3">Join Zoom Class</button>
                                                        :
                                                        (
                                                            <>
                                                                <button onClick={(e) => setShowPaymentModel(true)} className="btn btn-primary p-4 py-3" >Enroll For this course</button>

                                                                <button className="btn btn-white p-4 py-3"><a href="whatsapp://send?phone=+2347089199545">Reach us via </a><FaWhatsapp size={23} /></button>
                                                            </>
                                                        )
                                                }


                                            </div>
                                            <p >Enroll for the Next Class  ()</p>

                                        </div>

                                        <div className="courseDetailHeroCard__image_container" >
                                            {/* <img src={ImageOfManINSuite} alt="" style={{boxShadow: "2px -10px 5px 7px rgba(0,0,0,0.09)"}} /> */}
                                            <img src={courseDetail.course_banner} alt="" style={{ boxShadow: "2px -10px 5px 7px rgba(0,0,0,0.09)" }} />

                                            <p>4 Weeks (Weekends Only)</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- </div> --> */}
                                <br /><br /><br /><br />
                                <div className="container danload_brochureContainer" >
                                    <h4>Learn More about {courseDetail.courseDetail[0].name} program</h4>
                                    <a href={courseDetail ? 'https://emeticslearning-backend.herokuapp.com/' + courseDetail.courseDetail[0].brochure : ''} download className="btn btn-primary p-3 py-3">Download Brochure</a>
                                </div>

                                <div className="container courseviewContainer">
                                    <h3 >Course OverView</h3>

                                    <p>

                                        {courseDetail.courseDetail[0].overview}

                                    </p>
                                </div>
                                <br />

                                <div className="container course_outlineContainer">
                                    <div className="row">
                                        {
                                            courseDetail.courseOutline.map(({ id, more_info, outline_title }) => {

                                                return (
                                                    <div className="col-md-3 col-lg-4 aos-init aos-animate" key={id}>
                                                        <div className="courses ">
                                                            <div className="card m-1" style={{ borderRadius: '0px', border: "transparent" }}>
                                                                {/* <!-- <div className="icon"><span className="flaticon-engineer"></span></div> --> */}
                                                                <h5>{outline_title}</h5>
                                                                <span className="author">
                                                                    {more_info}
                                                                </span>

                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }


                                    </div>

                                </div>
                            </>

                        )
            }


            <Footer />
        </>
    )
}


export default CourseDetail