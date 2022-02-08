import './customStyle.css'
import image from '../../../assets/images/Group 26.png'
import { useHistory, useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from "axios"
import dataService from '../../../services/data.service'
import { setMessage } from '../../../redux/actions/messageAction'
import { useDispatch } from 'react-redux'
import Footer from '../../../component/footer'
import DashboardNavHeader from '../../../component/DashboardNav'
import { FaArrowLeft } from 'react-icons/fa';
import { MdOutlineCheck } from 'react-icons/md'
import { GiOpenBook } from 'react-icons/gi'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import DashbordCard from '../components/DashbordCard'
import { getAllCoursesCallback, getCount, getCourseCount } from '../../../redux/actions/courseAction'


const MainUrl = 'https://emeticslearning-backend.herokuapp.com'


const Dashboard = () => {


    const [studentProfile, setStudentProfile] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [courseCount, setCourseCount] = useState('');
    const [course, setCourse] = useState('')

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
    // console.log(courseCount)

    const callback =(response)=>{
        // console.log(response)
        if(response.data){
            setCourseCount(response.data)
        }

    }

    const courseCallback =(response)=>{
        if(response){
            // console.log(response)
            setCourse(response)
        }
    }

    useEffect(() => {

        dispatch( getCourseCount(callback));
        dispatch(getAllCoursesCallback(courseCallback))
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
            <DashboardNavHeader /><br />
            <h1>{isLoading ?
                <div className='row'>
                    <div className=' pt-3 center col-lg-8 col-md-12 ml-lg-9 bg-load' >
                        <div class="card bg-light loading pt-4 col-12 " >
                            <div class="image pb-5">

                            </div>
                            <div className='row mt-3'>
                                <div class="content col-4">
                                    {/* <h4></h4> */}
                                    <div class="description" style={{ height: '150px', borderRadius: '40px' }}>

                                    </div>
                                </div>

                                <div class="content col-4">
                                    {/* <h4></h4> */}
                                    <div class="description" style={{ height: '150px', borderRadius: '40px' }}>

                                    </div>
                                </div>
                                <div class="content col-4">
                                    {/* <h4></h4> */}
                                    <div class="description" style={{ height: '150px', borderRadius: '40px' }}>

                                    </div>
                                </div>

                            </div>



                        </div>


                    </div>
                    <div className='col-lg-2 col-md-12 bg-white side loading'>
                        <div class="content col-12">
                            <h4></h4>
                            <h4></h4>
                            <h4></h4>
                            <h4></h4>
                            <h4></h4>
                            <h4></h4>
                            <h4></h4>
                            <h4></h4>
                            <h4></h4>
                            {/* <h4></h4>
                            <h4></h4> */}

                        </div>
                    </div>
                    <div className='row loading bg-white mt-5 col-md-10 table-skel' style={{ borderRadius: '20px' }}>
                        <div class="decsription pt-5">

                        </div>
                        <div className='row'>
                            <div class="content col-12">
                                <h4></h4>
                                <h4></h4>
                                <h4></h4>
                                <h4></h4>
                                <h4></h4>
                                <h4></h4>

                            </div>

                        </div>
                    </div>
                </div>
                :
                (studentProfile.length != 0) ?

                    <div className="container dashboardIndex" >


                        {/* {
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
 */}


                        <div className="row" >
                            <div className='col-lg-9 pt-5'>

                                <img src={image} className='dash-image' style={{ zIndex: 1, width: '100%' }} />
                                {/* <div style={{ backgroundImage: `url(${image})`, height: '200px', }}></div> */}

                                <p style={{ textAlign: "left", position: 'absolute', top: 120, color: 'white' }} className='ml-5 pt-2'>
                                    <div style={{ fontFamily: 'Quicksand', fontWeight: 500 }}>
                                        <FaArrowLeft size={20} onClick={() => history.goBack()} /> &nbsp;

                                        Welcome,
                                        <span className='text-lg' style={{ fontFamily: 'Quicksand', fontWeight: 500, fontSize: '20px' }}> {studentProfile.first_name + ' ' + studentProfile.last_name}</span>
                                    </div>
                                    {/* <br /> */}
                                    {/* <div style={{ fontSize: '.9rem' }} className='row'>
                                    <div className='col'><strong>Country:</strong>   Nigera </div>
                                    <div className='col'><strong>State:</strong>   Lagos</div>
                                </div> */}
                                </p>
                                {
                                    studentProfile.is_owner ?
                                        <div className='row '>
                                            <div className='col-lg-12 row'>
                                                <DashbordCard title={'Open Courses'} icon={<GiOpenBook size={25} color='#F55608' />} link='/student/courses/Open' count={courseCount?courseCount.open:0} />
                                                <DashbordCard title={'Ongoing Courses'} icon={<AiOutlineLoading3Quarters size={23} color='#F55608' />} link='/student/courses/Ongoing' count={courseCount?courseCount.ongoing:0} />
                                                <DashbordCard title={'Completed Courses'} icon={<MdOutlineCheck size={25} color='#F55608' />} link='/student/courses/Completed' count={courseCount?courseCount.completed:0} />
                                            </div>

                                        </div>
                                        : ""
                                }


                            </div>
                            <div className='col-lg-3 pt-5'  >
                                <div className='bg-white p-2 mt-4 ml-2 text-center' style={{ borderRadius: '20px' }}>
                                    <div className='center' style={{ fontWeight: '500', fontSize: '1.3rem', fontFamily: 'Quicksand !important' }}>Student Data</div>
                                    <hr />
                                    <div>
                                        <p>Engagement Status:</p>
                                        {studentProfile.Job_Opportunity ?
                                            < p className="dashboard__info__content_text data-info">Open For opportunity</p>
                                            :
                                            < p className="dashboard__info__content_text data-info">Not Open For opportunity</p>

                                        }
                                    </div>

                                    <div>
                                        <p>Educational Qualification:</p>
                                        {studentProfile.educational_qualifications != 0 ?
                                            studentProfile.educational_qualifications.map(data => (
                                                <p className='data-info'>{`${data.degree_type}.,${data.course_name},${data.institutionName}`}</p>

                                            )) : <p className='data-info'>Nil</p>
                                        }
                                    </div>


                                    <div>
                                        <p>Professional Qualification:</p>
                                        {
                                            studentProfile.professional_qualifications != 0 ?
                                                studentProfile.professional_qualifications.map(data => (
                                                    <p className='data-info'>{`${data.degree_type}.,${data.course_name},${data.institutionName}`}</p>

                                                )) : <p className='data-info'>Nil</p>
                                        }
                                    </div>
                                    <div>
                                        <p>Work Experience</p>
                                        {
                                            studentProfile.work_experience != 0 ?
                                                studentProfile.work_experience.map(({ work_experience }) => (

                                                    <p className='data-info'>{work_experience}</p>
                                                ))
                                                :
                                                <p className='data-info'>Nil</p>
                                        }
                                    </div>
                                    <div>
                                        <p>Professional Qualification:</p>
                                        <p className='data-info'>{studentProfile.dob ? studentProfile.dob : 'Nil'}</p>
                                    </div>

                                    <div>
                                        <p>Alumni</p>
                                        {
                                            studentProfile.alumni.length == 0 ?
                                                <p className="dashboard__info__content_text data-info">Nil</p>
                                                :

                                                studentProfile.alumni.map(data => (

                                                    <p className="dashboard__info__content_text text-bold data-info">{data.course__name}</p>
                                                ))

                                        }
                                    </div>
                                </div>
                            </div>



                            {/* <div className="dashboard_intro_pane__image">
                                <img src={image} alt="" />
                            </div> */}
                        </div>


                        {/* <div className="dashboard__more_info ">
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
                                        } */}
                        {/* <li><p>Bsc Mass Communication from University of lagos</p></li> */}
                        {/* </ol>

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


                            </div> */}
                        {/* <div className="dashboard__info">
                   <p className="dashboard__info__title_text"><strong>About ME</strong></p>

               <p className="dashboard__info__content_text">
                    {studentProfile.about_me}
               </p>
</div> */}
                        {/* </div> */}

                      { course ?  
                      <div className='row bg-white py-3 px-2 my-4' style={{ borderRadius: '20px' }} >
                            <h4>Available Courses</h4><hr className='col-lg-10' />
                            {course.map((e)=>
                            <div className=' row py-2 mx-1 mt-3' style={{ borderRadius: '7px' }}>
                                <p className='col-lg-8 bg-white py-2' style={{ fontWeight: '500' }}>
                                    {e.name}
                                </p>
                                <div className='col-lg-3 flex '>
                                    <Link className='row ml-lg-3' to={`/course-detail/${e.id}`}>
                                        <p className='col-lg-12 bg-dark text-white text-center py-2 px-3 rounded '>View Outline</p>
                                        {/* <p className=' shadow-lg col-lg-5 bg-white text-center py-2 px-3 ml-lg-1 rounded border'>Pay</p> */}
                                    </Link>
                                </div>
                            </div>)}
                            
                        </div>:''}

                    </div>

                    : <p>Something went wrong make sure u connected to the internet</p>

            }</h1>

            {/* <h1>Hel</h1> */}
            <Footer />
        </div>

    )
}

export default Dashboard