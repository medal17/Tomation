import './customStyle.css'
import image from '../../../assets/images/christina-wocintechchat-com-L85a1k-XqH8-unsplash.jpg'
import { useHistory, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from "axios"
import dataService from '../../../services/data.service'
import { setMessage } from '../../../redux/actions/messageAction'
import { useDispatch } from 'react-redux'

const MainUrl = 'https://emeticslearning-backend.herokuapp.com'


const Dashboard = () => {


    const [studentProfile, setStudentProfile] = useState([]);
    const [isLoading, setIsLoading] = useState(true)



    let studentID = null;
    const user = JSON.parse(localStorage.getItem("user"));
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
        <>
            <h1>{isLoading ? <p>Is loading</p>
                :
                (studentProfile.length != 0) ?

                    <div className="container dashboardIndex" >


                        {
                            studentProfile.is_owner ?
                                <div class="paymentType__btn" style={{
                                    display: 'flex', "justifyContent": "space-between",
                                    maxWidth: "600px", "margin": "0 auto", "flexWrap": "wrap"
                                }}>
                                    <button class="btn" onClick={(e) => history.push(`/student/courses/Ongoing`)}>ongoing course</button>
                                    <button class="btn" onClick={(e) => history.push(`/student/courses/Completed`)}>completed course(s) </button>
                                    <button className='btn' onClick={(e) => history.push(`/student/courses/Open`)} style={{ border: "1px solid green", color: "green" }}> Open  courses</button>
                                </div>
                                : ""
                        }



                        <div className="dashboard__intro_pane">
                            <p style={{ textAlign: "left" }}>Name: {studentProfile.first_name + ' ' + studentProfile.last_name} <br /> <br />
                                <div style={{ fontSize: '.9rem' }}>
                                    <strong>Country:</strong>Nigera   <br />
                                    <strong>State:</strong>Lagos
                                </div>
                            </p>

                            <div className="dashboard_intro_pane__image">
                                <img src={image} alt="" />
                            </div>
                        </div>


                        <div className="dashboard__more_info ">
                            <br /><br />
                            <div className="dashboard__more_info_grid">

                                <div className="dashboard__info">
                                    <p className="dashboard__info__title_text"><strong>Engament Status</strong></p>
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
                                    <p className="dashboard__info__title_text"><strong>Education Qualification</strong></p>
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
        </>

    )
}

export default Dashboard