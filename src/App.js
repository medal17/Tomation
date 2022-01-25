import './assets/dashboard/css/bootstrap.min.css'
import './assets/dashboard/style.css'
import './assets/dashboard/css/responsive.css'
import './assets/dashboard/css/bootstrap-select.css'
import './assets/dashboard/css/perfect-scrollbar.css'



import "./assets/css/animateAndOther.css";
import "./assets/css/main.css"
import HomePage from './pages/homePage/index'
import Signin from './pages/SignUpSIgnIn/Signin';
import SignUp from './pages/SignUpSIgnIn/SignUp';
import { Route,Switch,Link} from  "react-router-dom";
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
import SecureRoute from './ProtectedRoute'
import Tutorindex from './pages/Admin/tutor/tutorIndex'
import DefualtStyle from './component/style/DefualtStyle.style'
import { ThemeProvider } from 'styled-components'
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
        <h1>Hello</h1>
                
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
                    {/* <Route path="/courses" >
                            <Courses_Page />
                    </Route> */}

                    <Route  exact  path='/school/:id'>
                        <SchoolDetail />
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

                    <Route  exact   path='/tutor'>
                        <Tutorindex />
                    </Route>
                </Switch>
                    
                    
    
    
    </ThemeProvider> 
  
            
    )
}
export default App;