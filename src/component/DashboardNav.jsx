import { useEffect, useState } from "react"
import NavImage from '../assets/images/christina-wocintechchat-com-L85a1k-XqH8-unsplash.jpg'
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { isLoggedIN } from "../redux/actions/userAuthActions";
import { setMessage } from "../redux/actions/messageAction";
import { getAllCourses } from "../redux/actions/courseAction";
import axios from "axios";
import { CgMenu } from "react-icons/cg";
import dataService from "../services/data.service";
import LOGO from '../assets/images/savvy2.png'
import Swal from "sweetalert2";


const DashboardNavHeader = () => {
    // const [activeLink,SetactiveLink] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [dropDown, setDropdown] = useState(false);
    const [rDropDown, setRDropdown] = useState(false);
    const [isActive, setActive] = useState(2);
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

    const handleRDropDown = (dropDownState, dropDownSetState) => {
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
        <nav className="navbar navbar-expand-lg ftco-navbar-light " style={{ marginTop: "-60px" }} >
            <div className="container-xl subNav col-md-12 pt-1" style={{ backgroundColor: "white" }}>

                {
                    // user.isLoggedIn == true ?
                    //     <>
                    //         <Link to={user.user.data.user_type == 'student' ? "/student" :
                    //             (user.user.data.user_type == 'hirer') ? "employer/" : (user.user.data.user_type == 'tutor') ? "tutor/" :
                    //                 "#"
                    //         } className="order-lg-last" style={{ cursor: "pointer" }}>

                    //             <div className="nav-link" href="intern.html" style={{ color: '#fff', backgroundColor: '#052B38', padding: '0.3rem 1rem', borderRadius: '50px', textAlign: 'center' }}>{user.user.data.first_name[0]}</div>
                    //         </Link>
                    //     </>
                    //     :
                    // ()
                    <>
                        {/* <Link to='/signin' className="btn-custom order-lg-last" style={{ cursor: "pointer" }}>
                                Sign in
                            </Link>
                            <Link to='/signup' className="btn-custom order-lg-last" style={{ cursor: "pointer" }}>
                                Sign up
                            </Link> */}
                        {/* <div className="nav-item order-lg-last"><Link to="/signin" className="nav-link" href="intern.html" style={{ color: '#fff', backgroundColor: '#052B38', padding: '0.6rem 2rem', borderRadius: '15px', textAlign: 'center' }}>Login</Link></div> */}

                    </>
                }

                <button className="navbar-toggler" type="button"
                    onClick={() => handleDropDown(mobileDropDown, SetmobileDropDown)}
                //  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                //   aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"

                >
                    <span style={{ color: "black", marginRight: '1rem' }}><CgMenu size='30' /></span>
                    {/* <span style={{ color: "black" }}>Menu</span> */}
                </button>
                <div className={`collapse navbar-collapse  ${mobileDropDown == true ? "show" : ""}`} id="navbarSupportedContent"
                    style={{ transition: "all .7s ease-in-out" }}
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        {/* <li className="nav-item"><Link to="/" className="nav-link active">Home</Link></li> */}
                        <li className="nav-item"><Link to="/" className="nav-link" style={{ marginLeft: '2rem', textAlign: 'center', color: '#052B38', fontSize: '1.4rem', textDecoration: 'bold' }}>
                            <img src={LOGO} height='30rem' />
                        </Link></li>
                        <div>

                        </div>
                        {/* <li className="nav-item"><Link to="/intern" className="nav-link" href="intern.html" style={{ color: 'black' }}>Intern</Link></li> */}

                    </ul>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item order-lg-last"><Link to="/" className={isActive == 0 ? "nav-link active" : "nav-link text-dark"}>Home</Link></li>


                        <li className="nav-item order-lg-last">
                            <a className={isActive == 1 ? "nav-link active" : "nav-link text-dark"} href="#" id="custom_dropdown" style={{ color: 'black' }}
                                // onMouseOver={()=>handleDropDown(dropDown,setDropdown)}
                                // onMouseLeave={()=>handleDropDown(dropDown,setDropdown)}
                                onClick={() => { handleDropDown(dropDown, setDropdown); setActive(1) }}
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


                        <li className="nav-item order-lg-last">
                            <div class="" id="navbarNavDarkDropdown">
                                {/* <div class="collapse navbar-collapse" id="navbarNavDarkDropdown"> */}
                                <ul class="navbar-nav">
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Solutions
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-dark " aria-labelledby="navbarDarkDropdownMenuLink">
                                            <li><a class="dropdown-item nav-item" href="https://savvyng.com/solution-detail/1/" target="_blank">Performance Management</a></li>
                                            <li><a class="dropdown-item" href="https://savvyng.com/solution-detail/2/" target="_blank">Internship and Workforce Placement</a></li>
                                            <li><a class="dropdown-item" href="https://savvyng.com/solution-detail/3/" target="_blank">Recruitment</a></li>
                                            <li><a class="dropdown-item" href="https://savvyng.com/solution-detail/4/" target="_blank">Training</a></li>
                                            <li><a class="dropdown-item" href="https://savvyng.com/solution-detail/5/" target="_blank">Appraisal Data Generational Framework</a></li>
                                            <li><a class="dropdown-item" href="https://savvyng.com/solution-detail/6/" target="_blank">Key Performance Indicators Analytics (KPI)</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>




                        {/* <li className="nav-item order-lg-last"><Link to="/" className={isActive == 2 ? "nav-link active" : "nav-link text-dark"} onClick={() => setActive(2)} href="intern.html" style={{ color: 'black' }}>Solutions</Link></li> */}
                        {/* <li className="nav-item order-lg-last"><Link to="/" className={isActive == 3 ? "nav-link active" : "nav-link text-dark"} onClick={() => setActive(3)} href="intern.html" style={{ color: 'black' }}>Insight &#38; Research</Link></li> */}

                        {/* <li className="nav-item order-lg-last">
                            <div class="dropdown">
                                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown link
                                </a>

                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </li> */}
                        <li className="nav-item order-lg-last">
                            <div class="" id="navbarNavDarkDropdown">
                                {/* <div class="collapse navbar-collapse" id="navbarNavDarkDropdown"> */}
                                <ul class="navbar-nav">
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Insight &amp; Research
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-dark " aria-labelledby="navbarDarkDropdownMenuLink">
                                            <li><a class="dropdown-item nav-item" href="https://savvyng.com/insight-detail/1/" target="_blank">Radical Thinking for Growth</a></li>
                                            <li><a class="dropdown-item" href="https://savvyng.com/insight-detail/2/" target="_blank">Achieving Maximum Performance through Employee Motivation</a></li>
                                            <li><a class="dropdown-item" href="https://savvyng.com/insight-detail/3/" target="_blank">Establishing The Right Business Eco-System</a></li>
                                            <li><a class="dropdown-item" href="https://savvyng.com/insight-detail/4/" target="_blank">Gaining Strategic Competitive Advantage</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        {/* <li className="nav-item order-lg-last">
                            <a className={isActive == 1 ? "nav-link active" : "nav-link text-dark"} href="#" id="" style={{ color: 'black' }}
                                // onMouseOver={()=>handleDropDown(dropDown,setDropdown)}
                                // onMouseLeave={()=>handleDropDown(dropDown,setDropdown)}
                                onClick={() => { handleRDropDown(rDropDown, setRDropdown); setActive(1) }}
                            >
                                Insight &amp; Research
                            </a>
                            <div id="rcustom-Navdropdown"
                                className={`${rDropDown == true ? "show" : ""}`}
                            // className={`show`} 
                            // onMouseOver={}
                            >
                                <div className="">

                                    <Link to={`/school/`} >
                                        <div className="">
                                            <h4>Hey</h4>
                                            <p style={{ color: "black" }}>

                                            </p>
                                        </div>
                                    </Link>

                                </div>


                            </div>
                        </li> */}
                        {/* <li className="nav-item order-lg-last"><Link to="/" className={isActive == 4 ? "nav-link active" : "nav-link text-dark"} onClick={() => setActive(4)} href="intern.html" style={{ color: 'black' }}>About</Link></li> */}
                        <li className="nav-item order-lg-last"><Link to="/" className={isActive == 5 ? "nav-link active" : "nav-link text-dark"} onClick={() => setActive(5)} href="intern.html" style={{ color: 'black' }}>Contact</Link></li>

                        {/* <li className="nav-item nav-link"><a className="nav-link" href="contact.html">Contact</a></li> */}
                        {<div className="nav-item order-lg-last px-2"><Link onClick={() => Swal.fire({
                            title: 'Wish to Logout?',
                            text: "Confirm you wish to Log out",
                            icon: 'question',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Yes'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                localStorage.clear();
                                window.location.href = "/"
                            }
                            // if (result.isConfirmed) {
                            //     Swal.fire(
                            //         'Deleted!',
                            //         'Your file has been deleted.',
                            //         'success'
                            //     )
                            // }
                        })
                        } className="nav-link" href="intern.html" style={{ color: '#fff', backgroundColor: '#139DCA', padding: '0.6rem 2rem', borderRadius: '15px', textAlign: 'center' }}>Logout</Link>
                        </div>

                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default DashboardNavHeader