import './customStyle.css'
import image from '../../../assets/images/Group 26.png'
import { useHistory, useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from "axios"
import dataService from '../../../services/data.service'
import { setMessage } from '../../../redux/actions/messageAction'
import { useDispatch } from 'react-redux'
import Footer from '../../../component/footer'
import Nav from '../../../component/nav'
import DashboardHeader from '../../../component/DashboardHeader'
import DashboardNavHeader from '../../../component/DashboardNav'
import { FaArrowLeft } from 'react-icons/fa';
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import DashbordCard from '../components/DashbordCard'
import { getAllCourses, getAllCoursesCallback, getCount } from '../../../redux/actions/courseAction'


const MainUrl = 'https://emeticslearning-backend.herokuapp.com'


const Dashboard = () => {


    const [studentProfile, setStudentProfile] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [count, setCount] = useState('')
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
    console.log(studentid_from_urlParams)

    const callback=(response)=>{
        if(response.data){
            setCount(response.data)
        }
    }

    const courseCallback=(response)=>{
        if(response){
            setCourse(response)
            // alert('yeah')
            console.log(response)
        }
    }

useEffect(() => {
    dispatch(getCount(callback))
    dispatch(getAllCoursesCallback(courseCallback))
}, [])
    const history = useHistory();
    return (
        <div style={{ marginTop: '1rem' }}>
            <DashboardNavHeader /><br />
            <h1>
            {/* <h1>{isLoading ?
                <div className='row'>
                    <div className=' pt-3 center col-lg-8 col-md-12 ml-lg-9 bg-load' >
                        <div class="card bg-light loading pt-4 col-12 " >
                            <div class="image pb-5">

                            </div>
                            <div className='row mt-3'>
                                <div class="content col-4">
                                    <div class="description" style={{ height: '150px', borderRadius: '40px' }}>

                                    </div>
                                </div>

                                <div class="content col-4">
                                    <div class="description" style={{ height: '150px', borderRadius: '40px' }}>

                                    </div>
                                </div>
                                <div class="content col-4">
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
                            <h4></h4>
                            <h4></h4>

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
                : */}
                {/* (studentProfile.length != 0) ? */}

                    <div className="container dashboardIndex" >
                        <div className="row" >
                            <div className='col-lg-9 pt-5'>

                                <img src={image} className='dash-image' style={{ zIndex: 1, width: '100%' }} />
                                {/* <div style={{ backgroundImage: `url(${image})`, height: '200px', }}></div> */}

                                <p style={{ textAlign: "left", position: 'absolute', top: 120, color: 'white' }} className='ml-5 pt-2'>
                                    <div style={{ fontFamily: 'Quicksand', fontWeight: 500 }}>
                                        <FaArrowLeft size={20} onClick={() => history.goBack()} /> &nbsp;

                                        Welcome, &nbsp;
                                        <span className='text-lg' style={{ fontFamily: 'Quicksand', fontWeight: 500, fontSize: '20px' }}> {'Agent '+ user.data.first_name}</span>
                                    </div>
                                   
                                </p>
                                
                                        <div className='row '>
                                            <div className='col-lg-12 row'>
                                                <DashbordCard title={'Registered Students'} icon={<AiOutlineUsergroupAdd size={25} color='#F55608' />} link='#' count={count?count.count:''} />
                
                                            </div>

                                        </div>
                                        

                            </div>
                            <div className='col-lg-3 pt-5'  >
                                <div className='bg-white p-2 mt-4 ml-2 text-center' style={{ borderRadius: '20px' }}>
                                    <div className='center' style={{ fontWeight: '500', fontSize: '1.3rem', fontFamily: 'Quicksand !important' }}> Agent Code</div>
                                    <hr />
                                    <div>
                                        {/* <p>Agent Code:</p> */}
                                        {user.data.agent_code ?
                                            < p className="dashboard__info__content_text data-info">{user.data.agent_code}</p>
                                            :
                                            < p className="dashboard__info__content_text data-info">Nil</p>

                                        }
                                    </div>
                                    
                                </div>
                            </div>

                        </div>


                    { course ?
                        <div className='row bg-white py-3 px-2 my-2' style={{ borderRadius: '20px' }} >
                            <h4>Available Courses</h4><hr className='col-lg-10' />
                            {course.map((e)=>
                                <div className=' row py-2 mx-1' style={{ borderRadius: '7px' }}>
                                <p className='col-lg-9 bg-white py-2' style={{ fontWeight: '500' }}>
                                    {e.name}
                                </p>
                                <div className='col-lg-3 flex '>
                                    <Link className='row ml-lg-3' to={`/course-detail/${e.id}`}>
                                        {/* <p className='col-lg-12 bg-dark text-white text-center py-2 px-3 rounded '>View Outline</p> */}
                                        {/* <p className=' shadow-lg col-lg-5 bg-white text-center py-2 px-3 ml-lg-1 rounded border'>Pay</p> */}
                                    </Link>
                                </div>
                            </div>)}
                        </div>:
                         <div className='col-lg-12 col-md-12 mt-5 bg-white loading' style={{borderRadius:'20px'}}>
                         <div class="content col-12">
                             <h4 className='col-3'></h4>
                             <h4></h4>
                             <h4></h4>
                             <h4></h4>
                             <h4></h4>
                             <h4></h4>
                            
 
                         </div>
                     </div>
                        }

                    </div>

                    {/* : <p>Something went wrong make sure u connected to the internet</p> */}

            {/* } */}
            </h1>

            {/* <h1>Hel</h1> */}
            <Footer />
        </div>

    )
}

export default Dashboard