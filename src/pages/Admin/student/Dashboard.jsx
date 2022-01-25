import './customStyle.css'
import image from '../../../assets/images/Group 26.png'
import { useHistory, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from "axios"
import dataService from '../../../services/data.service'
import { setMessage } from '../../../redux/actions/messageAction'
import { useDispatch } from 'react-redux'
import Footer from '../../../component/footer'
import Nav from '../../../component/nav'
import DashboardHeader from '../../../component/DashboardHeader'
import DashboardNavHeader from '../../../component/DashboardNav'
import { FaArrowLeft } from 'react-icons/fa'
    ;


const MainUrl = 'https://emeticslearning-backend.herokuapp.com'


const Dashboard = () => {


    const [studentProfile, setStudentProfile] = useState([]);
    const [isLoading, setIsLoading] = useState(true)



    let studentID = null;
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user)
    if (user && user.data.user_type == 'student') {
        // check if the user is logged and check if he is student 
        studentID = user.data.student_id
    }





    const dispatch = useDispatch()

    // if it a student that is Seeing this Page we will grab his studentID from local Storage (He/SHe Must Be Logged in)
    let { studentid_from_urlParams } = useParams();


    if (studentID == null) {
        // this can only mean the logged in user is not a student
        //  so the fill studentID with the urlparams
        studentID = studentid_from_urlParams
    }
    console.log(studentid_from_urlParams)

    useEffect(() => {

        axios.get(MainUrl + `/api/user/get_student_profile/${studentID}/`, {
            headers: dataService.authHeader()
        })
            .then(response => {
                console.log(response.data.data)
                setStudentProfile(response.data.data)
                setIsLoading(false)
            })
            .catch((error) => {
                let message;
                try {
                    message = (error.response.data.message || error.response.data.detail)
                } catch {
                    message = error.message
                }
                setIsLoading(false)

                dispatch(setMessage(message, false))
                console.log(error)

            })
    }, [])
    const history = useHistory();
    return (
        <div style={{ marginTop: '1rem' }}>
            <DashboardNavHeader />
            <FaArrowLeft size={25} onClick={() => history.goBack()} />
            <h1>{isLoading ? <p>Is loading</p>
                :
                (studentProfile.length != 0) ?

                    <div className="container dashboardIndex" >


                        {
                            studentProfile.is_owner ?
                                <div class="" style={{
                                    display: 'flex', "justifyContent": "space-between",
                                    maxWidth: "600px", "margin": "0 auto", "flexWrap": "wrap"
                                }}>
                                    <button className='btn' onClick={(e) => history.push(`/student/courses/Open`)} style={{ border: "1px solid green", color: "green" }}> Open  courses</button>
                                    <button class="btn" onClick={(e) => history.push(`/student/courses/Ongoing`)} style={{ border: "1px solid gold", backgroundColor: 'gold', color: "black" }}>ongoing course</button>
                                    <button class="btn" onClick={(e) => history.push(`/student/courses/Completed`)} style={{ border: "1px solid red", color: "red" }}>completed course(s) </button>

                                </div>
                                : ""
                        }



                        <div className="row " >
                            <div className='col-7' style={{ backgroundImage: `url(${image})`, height: '200px', width: '100%' }}>
                                <img src={image} style={{ zIndex: 1 }} />
                                <div style={{ backgroundImage: `url(${image})`, height: '200px', }}></div>

                                <p style={{ textAlign: "left", position: 'absolute', top: 50, color: 'white' }} className='ml-5 pt-2'>
                                    <div style={{ fontFamily: 'Quicksand', fontWeight: 500 }}>
                                        Welcome,
                                        <span className='text-lg' style={{ fontFamily: 'Quicksand', fontWeight: 500, fontSize: '20px' }}> {studentProfile.first_name + ' ' + studentProfile.last_name}</span>
                                    </div>
                                    {/* <br /> */}
                                    {/* <div style={{ fontSize: '.9rem' }} className='row'>
                                    <div className='col'><strong>Country:</strong>   Nigera </div>
                                    <div className='col'><strong>State:</strong>   Lagos</div>
                                </div> */}
                                </p>
                            </div>
                            {/* <div className='col-3 bg-white pt-2 mt-3 ml-1' style={{ borderRadius: '20px', height: '20%' }} >
                                <h2>dsisudisudisu</h2>
                            </div> */}



                            {/* <div className="dashboard_intro_pane__image">
                                <img src={image} alt="" />
                            </div> */}
                        </div>


                        <div className="dashboard__more_info ">
                            <br /><br />
                            <div className="dashboard__more_info_grid">

                                <div className="dashboard__info">
                                    <p className="dashboard__info__title_text"><strong>Engagement Status</strong></p>
                                    <ul>
                                        <li>
                                            {studentProfile.Job_Opportunity ?
                                                < p className="dashboard__info__content_text">Open For opportunity</p>
                                                :
                                                < p className="dashboard__info__content_text">Not Open For opportunity</p>

                                            }

                                        </li>

                                    </ul>
                                </div>

                                <div className="dashboard__info">
                                    <p className="dashboard__info__title_text"><strong>Educational Qualification</strong></p>
                                    <ol>
                                        {studentProfile.educational_qualifications != 0 ?
                                            studentProfile.educational_qualifications.map(data => (
                                                <li style={{ padding: ".2rem 0" }}><p>{`${data.degree_type}.,${data.course_name},${data.institutionName}`}</p></li>

                                            )) : <p><li>Nil</li></p>
                                        }
                                    </ol>

                                </div>

                                <div className="dashboard__info">
                                    <p className="dashboard__info__title_text"><strong>Professional Qualification</strong></p>
                                    <ol>
                                        {
                                            studentProfile.professional_qualifications != 0 ?
                                                studentProfile.professional_qualifications.map(data => (
                                                    <li style={{ padding: ".2rem 0" }}><p>{`${data.degree_type}.,${data.course_name},${data.institutionName}`}</p></li>

                                                )) : <p><li>Nil</li></p>
                                        }
                                        {/* <li><p>Bsc Mass Communication from University of lagos</p></li> */}
                                    </ol>

                                </div>

                                <div className="dashboard__info">
                                    <p className="dashboard__info__title_text"><strong>Work Experience</strong></p>
                                    <ol>
                                        {
                                            studentProfile.work_experience != 0 ?
                                                studentProfile.work_experience.map(({ work_experience }) => (

                                                    <li><p>{work_experience}</p></li>
                                                ))
                                                :
                                                <li><p>Nil</p></li>


                                        }

                                    </ol>

                                </div>


                                <div className="dashboard__info">
                                    <p className="dashboard__info__title_text"><strong>DOB</strong></p>

                                    <ul>
                                        <li className="dashboard__info__content_text"><p className="dashboard__info__content_text">{studentProfile.dob}</p></li>

                                    </ul>
                                </div>
                                <div className="dashboard__info">
                                    <p className="dashboard__info__title_text"><strong>Alumni</strong></p>

                                    <ul>
                                        {
                                            studentProfile.alumni.length == 0 ?
                                                <li className="dashboard__info__content_text"><p className="dashboard__info__content_text">Nil</p></li>
                                                :

                                                studentProfile.alumni.map(data => (

                                                    <li className="dashboard__info__content_text"><p className="dashboard__info__content_text">{data.course__name}</p></li>
                                                ))

                                        }
                                    </ul>
                                </div>


                            </div>
                            {/* <div className="dashboard__info">
                   <p className="dashboard__info__title_text"><strong>About ME</strong></p>

               <p className="dashboard__info__content_text">
                    {studentProfile.about_me}
               </p>
</div> */}
                        </div>

                    </div>

                    : <p>Something went wrong make sure u connected to the internet</p>

            }</h1>

            {/* <h1>Hel</h1> */}
            <Footer />
        </div>

    )
}

export default Dashboard