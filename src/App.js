import './assets/dashboard/css/bootstrap.min.css'
import './assets/dashboard/style.css'
import './assets/dashboard/css/responsive.css'
import './assets/dashboard/css/bootstrap-select.css'
import './assets/dashboard/css/perfect-scrollbar.css'
import { Container, Button, Link } from 'react-floating-action-button'
import { FaFacebook, FaFacebookF, FaPlus } from 'react-icons/fa'


import "./assets/css/animateAndOther.css";
import "./assets/css/main.css"
import HomePage from './pages/homePage/index'
import Signin from './pages/SignUpSIgnIn/Signin';
import SignUp from './pages/SignUpSIgnIn/SignUp';
import { Route,Switch} from  "react-router-dom";
import { isLoggedIN } from './redux/actions/userAuthActions';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { clearMessage } from './redux/actions/messageAction';
import Schools from './pages/Schools/Schools';
import PopUpMessage  from './component/PopUpMessage'
import SchoolDetail from './pages/Courses/Courses_Page';
import CourseDetail from './pages/CourseDetail/CourseDetail';
import InterPage from './pages/InterPage/InterPage';
import CallBack from './CallBack';
import StudentIndex from './pages/Admin/student/StudentIndex'
import EmployeIndex from './pages/Admin/hirer/EmployeIndex'
import ContactPage from './component/contactPage' 
import SecureRoute from './ProtectedRoute'
import Tutorindex from './pages/Admin/tutor/tutorIndex'
import DefualtStyle from './component/style/DefualtStyle.style'
import { ThemeProvider } from 'styled-components'
import AgentsSignUp from './pages/SignUpSIgnIn/AgentsSignUp'
import { RiTwitterLine } from 'react-icons/ri'
import {  BsWhatsapp } from 'react-icons/bs'
import AgentIndex from './pages/Admin/agent/AgentIndex'
// import AgentIndex from './pages/Admin/student/AgentIndex'
const App =()=>{

    const { message } = useSelector(state=>state.message)
    const dispatch  = useDispatch()
    
    if(message){
        setTimeout(()=>{
            dispatch(clearMessage())
        },3000)
    }
    useEffect(()=>{
        console.log("sss")
        dispatch(isLoggedIN())
    },[])



    const theme = {

        usingGreenBackground:{
            mainColor:'whitesmoke',
            secondaryColor:'#c5d3d8c1',
            bg:'#22596B'
        }
    }

    return (
    <ThemeProvider theme={theme}> 
            <DefualtStyle />
        {  
            message &&
        
    (
            <PopUpMessage 
            message={message.message}
            isSuccess={message.isSuccess}
            />)
        }

{/* <Container style={{position:'absolute', top:0, right:0}}>
            <Link href="#"
                tooltip="Create note link"
                icon="far fa-sticky-note" />
            <Link href="#"
                tooltip="Add user link"
                icon="fas fa-user-plus" 

                // className="fab-item btn btn-link btn-lg text-white"
                // style={{position:'absolute', top:0}}
                />
            <Button
                tooltip="The big plus button!"
                icon={"fas fa-plus"}
                rotate={true}
                onClick={() => alert('FAB Rocks!')} />
        </Container> */}
        {/* <h1>Hello</h1> */}
                
                <Switch >
                            <Route exact path ='/'>
                                    <HomePage/>
                            </Route>

                    <Route  exact  path="/signin">
                        <Signin />
                    </Route>

                    <Route exact   path='/signup'>
                        <SignUp />
                    </Route>
                    <Route exact   path='/agent-signup'>
                        <AgentsSignUp />
                    </Route>
                    {/* <Route path="/courses" >
                            <Courses_Page />
                    </Route> */}

                    <Route  exact  path='/school/:id'>
                        <SchoolDetail />
                    </Route>

                    <Route exact path ='/contact'  >
                        <ContactPage/>  
                    </Route>

                    {/* <Route exact   path="/course/:schoolID">
                        <Schools / >
                    </Route> */}

                    <Route  exact  path="/course-detail/:courseID">
                        <CourseDetail />
                    </Route>

                    <Route exact   path={`/intern`} >
                    <InterPage />
                    </Route>
                    

                    <Route  exact  path="/wow">
                        <CallBack />
                    </Route>

                    <Route    path={"/student/(:studentid_from_urlParams)?"}>
                    <StudentIndex/>
                    </Route>

                    <Route    path='/employer'>
                        <EmployeIndex/>
                    </Route>

                    <Route    path='/agent'>
                        <AgentIndex/>
                    </Route>

                    <Route  exact   path='/tutor'>
                        <Tutorindex />
                    </Route>
                </Switch>
                    
                <div className='ml-lg-5 mr-lg-5 mt-2' style={{position:'fixed', top:'15%', right:0, zIndex:200 }}>

                            <a href='' className='text-lg  bg-white ph-5' style={{borderRadius:'50px'}}>
                                <p className='text-center pl-2 pt-2' style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.18), 0 6px 20px 0 rgba(0, 0, 0, 0.16)',height:'2.5rem', width:'2.5rem', backgroundColor:'white', borderRadius:'50px'}}>
                                    <FaFacebookF color="#0000FF" size={20} style={{ marginRight: '0.5rem'}} />
                                </p>
                            </a>
                            <a href='' className='text-lg '>
                                <p className='text-center pl-2 pt-2' style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.18), 0 6px 20px 0 rgba(0, 0, 0, 0.16)',height:'2.5rem', width:'2.5rem', backgroundColor:'white', borderRadius:'50px'}}>
                                    <RiTwitterLine color="#187bcd" size={20} style={{ marginRight: '0.5rem' }} />
                                </p>
                            </a>
                                {/* <p className='text-center pl-2 pt-2' style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.18), 0 6px 20px 0 rgba(0, 0, 0, 0.16)',height:'2.5rem', width:'2.5rem', backgroundColor:'white', borderRadius:'50px'}}> */}

                            <a href="whatsapp://send?phone=+2347089199545" className='text-lg'>
                                <p className='text-center pl-2 pt-2' style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.18), 0 6px 20px 0 rgba(0, 0, 0, 0.16)',height:'2.5rem', width:'2.5rem', backgroundColor:'white', borderRadius:'50px'}}>
                                    <BsWhatsapp color="#00FF00" size={20} style={{ marginRight: '0.5rem' }} />
                                </p>
                            </a>
                        </div>
                
    </ThemeProvider> 
  
            
    )
}
export default App;