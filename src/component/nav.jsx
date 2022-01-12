import { useEffect, useState } from "react"
import NavImage from '../assets/images/christina-wocintechchat-com-L85a1k-XqH8-unsplash.jpg'
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { isLoggedIN } from "../redux/actions/userAuthActions";
import { setMessage } from "../redux/actions/messageAction";
import { getAllCourses } from "../redux/actions/courseAction";
import axios from "axios";
import dataService from "../services/data.service";

const Nav = () => {
    // const [activeLink,SetactiveLink] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [dropDown, setDropdown] = useState(false);
    const [mobileDropDown, SetmobileDropDown] = useState(false)
    const dispatch = useDispatch()
    const { user } = useSelector(state => state)
    const history = useHistory()
    const [schools, setSchools] = useState([])
    // const { courses } = useSelector(state=>state.courses)
    // console.log(courses,"Courses From Redux")

    const handleDropDown = (dropDownState, dropDownSetState) => {
        if (dropDownState == false) {
            dropDownSetState(true)
        }
        else {
            dropDownSetState(false)
        }
    }
    const handleNavEnrollBtn = () => {
        console.log(user.isLoggedIn)
        if (user.isLoggedIn) {
            history.push('/')
        }
        else {
            dispatch(setMessage("You Need To Sign Up To Enroll", false))
            history.push('/signin')
        }
    }


    useEffect(() => {
        const API_URL = 'https://emeticslearning-backend.herokuapp.com';
        const user = JSON.parse(localStorage.getItem("user"));

        axios.get(API_URL + `/api/get_schools/`, {
            headers: dataService.authHeader(),
        }).then((response) => {
            console.log(response.data)
            setSchools([...response.data.data])
            setIsLoading(false)


        }).catch((error) => {
            console.log(error.message)
            setIsLoading(false)
            dispatch(setMessage(error.response.message, false))
        })
    }, [])


    return (
        <nav className="navbar navbar-expand-lg  ftco-navbar-light " >
            <div className="container-xl subNav pt-4" style={{ backgroundColor: "white" }}>

                {
                    user.isLoggedIn == true ?
                        <>
                            <Link to={user.user.data.user_type == 'student' ? "/student" :
                                (user.user.data.user_type == 'hirer') ? "employer/" : (user.user.data.user_type == 'tutor') ? "tutor/" :
                                    "#"
                            } className="btn-custom order-lg-last" style={{ cursor: "pointer" }}>
                                Dashboard
                            </Link>
                        </>
                        :
                        // ()
                        <>
                            {/* <Link to='/signin' className="btn-custom order-lg-last" style={{ cursor: "pointer" }}>
                                Sign in
                            </Link>
                            <Link to='/signup' className="btn-custom order-lg-last" style={{ cursor: "pointer" }}>
                                Sign up
                            </Link> */}
                        </>
                }

                <button className="navbar-toggler" type="button"
                    onClick={() => handleDropDown(mobileDropDown, SetmobileDropDown)}
                //  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                //   aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"

                >
                    <span className="fa fa-bars" style={{ color: "black" }}></span>
                    <span style={{ color: "black" }}>Menu</span>
                </button>
                <div className={`collapse navbar-collapse  ${mobileDropDown == true ? "show" : ""}`} id="navbarSupportedContent"
                    style={{ transition: "all .7s ease-in-out" }}
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        {/* <li className="nav-item"><Link to="/" className="nav-link active">Home</Link></li> */}
                        <li className="nav-item"><Link to="/" className="nav-link" style={{ marginLeft: '2rem', textAlign: 'center', color: '#052B38', fontSize: '1.4rem', textDecoration: 'bold' }}>Savvy HR Solutions</Link></li>
                        <div>

                        </div>
                        {/* <li className="nav-item"><Link to="/intern" className="nav-link" href="intern.html" style={{ color: 'black' }}>Intern</Link></li> */}

                    </ul>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item order-lg-last"><Link to="/" className="nav-link active">Home</Link></li>
                        <li className="nav-item order-lg-last">
                            <a className="nav-link " href="#" id="custom_dropdown" style={{ color: 'black' }}
                                // onMouseOver={()=>handleDropDown(dropDown,setDropdown)}
                                // onMouseLeave={()=>handleDropDown(dropDown,setDropdown)}
                                onClick={() => handleDropDown(dropDown, setDropdown)}
                            >
                                Schools
                            </a>
                            <div id="custom-Navdropdown"
                                className={`${dropDown == true ? "show" : ""}`}
                            // className={`show`} 
                            // onMouseOver={}
                            >
                                <div className="custom-Nav__LinksGrid">
                                    {
                                        isLoading == true ? "" :

                                            schools.length != 0 ? (


                                                schools.map(data => (
                                                    <Link to={`/school/${data.id}`} >
                                                        <div className="custom-Nav_LinksGrid__container">
                                                            <h4>{data.name}</h4>
                                                            <p style={{ color: "black" }}>
                                                                {data.about}
                                                            </p>
                                                        </div>
                                                    </Link>
                                                ))


                                            ) : (<a href="courseDetail.html">
                                                <div className="custom-Nav_LinksGrid__container">
                                                    <h4>No Network</h4>
                                                    {/* <p style={{color: "black"}}>Become a Data Analyst through our learning programm.</p> */}
                                                </div>
                                            </a>)

                                        // <h4>Loading</h4>
                                    }




                                </div>

                                <div className="custom_dropdownView_more">
                                    <div className="custom_dropdownImage">
                                        <img src={`${NavImage}`} alt="" />
                                    </div>
                                    <p>We offer learning programs that are designed by industry knowledge experts and co-created with leading companies.</p>
                                    {/* <a ></a> */}
                                    <Link to="/schools">View all Schools</Link>
                                </div>
                            </div>
                        </li>

                        <li className="nav-item order-lg-last"><Link to="/" className="nav-link" href="intern.html" style={{ color: 'black' }}>Solutions</Link></li>
                        <li className="nav-item order-lg-last"><Link to="/" className="nav-link" href="intern.html" style={{ color: 'black' }}>Insight &#38; Research</Link></li>
                        <li className="nav-item order-lg-last"><Link to="/" className="nav-link" href="intern.html" style={{ color: 'black' }}>About</Link></li>
                        <li className="nav-item order-lg-last"><Link to="/" className="nav-link" href="intern.html" style={{ color: 'black' }}>Contact</Link></li>
                        <li className="nav-item order-lg-last"><Link to="/signin" className="nav-link" href="intern.html" style={{ color: '#fff', backgroundColor: '#052B38', padding: '1rem 2rem', borderRadius: '15px', marginLeft: '2rem', textAlign: 'center' }}>Login</Link></li>
                        {/* <li className="nav-item nav-link"><a className="nav-link" href="contact.html">Contact</a></li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav