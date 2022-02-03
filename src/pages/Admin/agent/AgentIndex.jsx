import SearchIntern from "./searchIntern"
import StudentNav from "../components/StudentNav"
import StudentOfIntrest from './StudentOfIntrest'
import { Switch,Route } from "react-router"
import SecureRoute from "../../../ProtectedRoute"
import Dashboard from "./Dashboard"
const AgentIndex = ()=>{


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
                        <div className="">
                            <div className="row column_title">
                                
                            </div>
                            
    
    
                            <Switch>
                            <Dashboard/>
{/* 
                            <SecureRoute allowUserType={'hirer'} exact  path={'/employer'}
                   component={SearchIntern } />
 
                                        
            <SecureRoute allowUserType={'hirer'}  exact  path={'/employer/student-of-intrest'}
                            component={StudentOfIntrest } /> */}
{/*             
            <Route path='/employer/student-of-intrest'>
                <StudentOfIntrest />
            </Route> */}

                        
                            </Switch>
    
    
    
    
                        </div>
                                
                        </div>
                        {/* <!-- end dashboard inner --> */}
                    </div>
                        
                    </div>
                    </div>
    
        </div>

    )
}

export default AgentIndex