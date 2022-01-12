import { useDispatch } from "react-redux";
import { Link ,Redirect} from "react-router-dom"
import UserImage from "../../../assets/images/xperson_2.jpg.pagespeed.ic.yyrmjBH91b.jpg"
import { setMessage } from "../../../redux/actions/messageAction";

const StudentNav =()=>{
    const dispatch = useDispatch()
    const user =JSON.parse(localStorage.getItem('user'));
    let userType = null
    // the user type is Gotten  From the LocalStorage
    if(user){
        userType = user.data.user_type
    }
    else{
        dispatch(setMessage('You need to Login',false))
        window.location.href="/signin"
    }

    return (
        <nav id="sidebar">
        <div className="sidebar_blog_1">
        <div className="sidebar-header">
            <div className="logo_section">
                <a href="/students/dashboard.html"><img className="logo_icon img-responsive" src="images/logo/logo_icon.png" alt="#" /></a>
            </div>
        </div>
        <div className="sidebar_user_info">
            <div className="icon_setting"></div>
            <div className="user_profle_side">
                <div className="user_img"><img className="img-responsive" src={UserImage} alt="#" /></div>
                <div className="user_info">
                    <h6>{`${user.data.first_name}  ${user.data.last_name}`}</h6>
                    <p><span className="online_animation"></span>
                     {userType=='student'?"Student":(userType=="hirer")?"Employer":"tutor"}
                    </p>
                </div>
            </div>
        </div>
        </div>
        <div className="sidebar_blog_2">
        {/* <!-- <h4>General</h4> --> */}
        <ul className="list-unstyled components">


{/* // specific for student ony */}

<li className="active">
<Link to={
    userType =='student'?
    "/student":
    (userType =='hirer')?
    "/employer":"/tutor"} >
    <i className="fas fa-chess-board"></i>
    <span>Dashboard</span></Link>

</li>


            <li className="active">
                <Link to="/student/9/editprofile" >
                    <i className="fas fa-user"></i>
                    <span>Profile</span></Link>
            
            </li>

            {/* <li className="active">
                <a href="" >
                    <i className="fas fa-key"></i>
                    <span>Password</span></a>
              
            </li> */}
{
    userType =='student'?
    (
        <li className="active">
                <Link to="/student/1/listOfintrestedhirer" >
                    <i className="fas fa-book"></i>
                    <span>List Of intrested Employers</span></Link>
              
            </li>
    ):""
}
      



{
    userType =='student'?
    <li className="active">
                <Link to="/student/9/paymentHistory" >
                    <i className="fas fa-sort-numeric-up"></i>
                    <span>Order History</span></Link>
            </li>
:
(userType=="hirer")?
<li className="active">
<Link to="/employer/student-of-intrest" >
    <i className="fas fa-users"></i>
    <span>List of intrested Alumni</span></Link>
</li> 
:"" 
}

            
            
        </ul>
        </div>
    </nav>
    )
}


export default StudentNav