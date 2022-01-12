import SecureRoute from "../../../ProtectedRoute"
import StudentNav from "../components/StudentNav"
import { Switch,Route } from "react-router"
import HandledCourses from "./HandledCourses"



const Tutorindex = ()=>{


    return (
        
    <div classNameName="dashboard dashboard_1">



    <div className="full_container">
            <div className="inner_container">
                {/* <!-- Sidebar  --> */}
    {/* <!-- Sidebar  --> */}
    <StudentNav/>
    {/* <!-- end sidebar --> */}
            {/* <!-- right content --> */}
            <div id="content">
                {/* <!-- topbar --> */}
                
                {/* <!-- end topbar --> */}
                    <div className="midde_cont">
                    <div className="container-fluid">
                        <div className="row column_title">
                            
                        </div>
                        


                        <Switch>
                            
                       


                   <SecureRoute  allowUserType={'tutor'} exact  path={'/tutor'}
                   component={HandledCourses } />


                        </Switch>


                        {/* dashboard */}
                      
                        {/* student Profile */}
                        {/* <ChangePassword /> */}



                    </div>
                            
                    </div>
                    {/* <!-- end dashboard inner --> */}
                </div>
                    
                </div>
                </div>

    </div>

    )
}


export default Tutorindex