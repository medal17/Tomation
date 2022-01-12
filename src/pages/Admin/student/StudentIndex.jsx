import ChangePassword from "../components/ChangePassword"
import PaymentHistory from "../components/PaymentHistory"
import Assignment from "./Assignment"
import CoursesList from "./CoursesList"
import Dashboard from "./Dashboard"
import StudentProfile from "./StudentProfile"
import { Switch,Route } from "react-router"
import SecureRoute from "../../../ProtectedRoute"
import StudentNav from "../components/StudentNav"
import ListOfIntrestedHirer from "./ListOfIntrestedHirer"
const StudentIndex =()=>{

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
                            
                            <Route exact  path={"/student/:studentid_from_urlParams?"} >
                                        <Dashboard/>
                            </Route>


                   <SecureRoute allowUserType={'student'}  path={'/student/assignment'}
                   component={Assignment } />



<SecureRoute allowUserType={'student'}   path={'/student/:studentid_from_urlParams?/paymentHistory'}
                   component={PaymentHistory } />

    <Route   path={"/student/:studentid_from_urlParams?/editprofile"}
                    component={StudentProfile } />

<SecureRoute allowUserType={'student'}  path={"/student/:studentid_from_urlParams?/listOfintrestedhirer"}
component={ListOfIntrestedHirer}
/>

{/* courseType meaning is it all Ongoing courses is it Completed Course or open courses */}
<SecureRoute allowUserType={'student'}   path={'/student/:studentid_from_urlParams?/courses/:filterCourseBy'}
                   component={CoursesList } />

                    
                       

                 


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
// Noctis obscuro

}

export default StudentIndex