import { useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom"
import UserImage from "../../../assets/images/xperson_2.jpg.pagespeed.ic.yyrmjBH91b.jpg"
import { setMessage } from "../../../redux/actions/messageAction";
import { GoDashboard, GoListOrdered, GoPerson } from 'react-icons/go'
import { FaShoppingCart, FaUserCircle, FaBackward } from 'react-icons/fa'
import { MdSchool, MdLogout } from 'react-icons/md'
import Swal from 'sweetalert2'
import { getImage, logout, uploadImage } from "../../../redux/actions/userAuthActions";
import { useState, useEffect } from "react";

const StudentNav = () => {
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('user'));
    const [ImageUploaded, setImageUploaded] = useState('')
    const [localURL, setLocalURL] = useState({ imgPreview: null });
    const [image, setImage] = useState('')


    let userType = null
    // the user type is Gotten  From the LocalStorage
    if (user) {
        userType = user.data.user_type
    }
    else {
        dispatch(setMessage('You need to Login', false))
        window.location.href = "/signin"
    }

    const fileUpload = () => {
        document.getElementById("file").click();
    };

    useEffect(()=>{
        dispatch(getImage(callback))
    },[])
    // ,{headers:{ Authorization: 'Token ' + user.data.token }}

    const config = {
        headers: {
            'content-type': 'multipart/form-data',
            Authorization: 'Token ' + user.data.token
        },
    };
    const formData = new FormData();
    const changeImage = (event) => {
        if (event.target.files && event.target.files[0]) {
            const img = event.target.files[0];
            setLocalURL({ imgPreview: URL.createObjectURL(img) })
            // this.setState({
            //     image: URL.createObjectURL(img)
            // });
            console.log(img.name)
            
            formData.append('image', event.target.files[0]);
            dispatch(uploadImage(formData,config, callback))
        }else{alert('No')}
    }

    const callback =(response)=>{
        setImage(response.data.image)
        // console.log(response)
    }

    return (
        <nav id="sidebar">

            <div className="sidebar_blog_1">
                <div className="sidebar-header">
                    <div className="logo_section">
                        <a href="/students/dashboard.html">
                            <img className="logo_icon img-responsive" src="images/logo/logo_icon.png" alt="#" />
                        </a>
                    </div>
                </div>
                <div className="sidebar_user_info">
                    <div className="icon_setting"></div>
                    <div className="user_profle_side">
                            <div className="user_img">
                            
                            {image ?
                                <img className="img-responsive" src={image} alt="#" />
                                :
                                <FaUserCircle size={70} />
                            }
                        </div>
                        <div className="user_info">
                            <h6>{`${user.data.first_name}  ${user.data.last_name}`}</h6>
                            <p><span className="online_animation"> </span> &nbsp;
                                {userType == 'student' ? "Student" : (userType == "hirer") ? "Employer": (userType=="agent")?"Agent" : "tutor" }
                            </p>
                        </div>
                    </div>
                    <input type='file' id='file' multiple="false" accept="image/*" style={{ display: 'none' }} onChange={changeImage} />
                    <button className="btn btn-warning" onClick={(event) => fileUpload(event)} style={{ backgroundColor: 'white', width: '100%', color: 'green' }}>Upload Picture</button>
                </div>
            </div>
            <div className="sidebar_blog_2">
                {/* <!-- <h4>General</h4> --> */}
                <ul className="list-unstyled components">


                    {/* // specific for student ony */}

                    <li className="active">
                        <Link to={
                            userType == 'student' ?
                                "/student" :
                                (userType == 'hirer') ?
                                    "/employer" : "/tutor"} >
                            <GoDashboard size={20} style={{ marginRight: '0.4rem' }} /> &nbsp;
                            <span>Dashboard</span></Link>

                    </li>


                    <li className="active">
                        <Link to="/student/9/editprofile" >
                            <GoPerson size={20} style={{ marginRight: '0.9rem' }} />
                            <span>Profile</span></Link>

                    </li>

                    {/* <li className="active">
                <a href="" >
                    <i className="fas fa-key"></i>
                    <span>Password</span></a>
              
            </li> */}
                    {/* {
                        userType == 'student' ?
                            (
                                <li className="active">
                                    <Link to="/student/1/listOfintrestedhirer" >
                                        <GoListOrdered size={20} style={{ marginRight: '0.9rem' }} />
                                        <span>List Of intrested Employers</span></Link>

                                </li>
                            ) : ""
                    } */}




                    {
                        userType == 'student' ?
                            <li className="active">
                                <Link to="/student/9/paymentHistory" >
                                    <FaShoppingCart size={20} style={{ marginRight: '0.9rem' }} />
                                    <span>Order History</span></Link>
                            </li>
                            :
                            (userType == "hirer") ?
                                <li className="active">
                                    <Link to="/employer/student-of-intrest" >
                                        <MdSchool size={20} style={{ marginRight: '0.9rem' }} />
                                        <span>List of intrested Alumni</span></Link>
                                </li>
                                : ""
                    }

                    <li className="active">
                        <Link onClick={() => Swal.fire({
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
                        }>
                            <MdLogout size={20} style={{ marginRight: '0.9rem' }} />
                            <span>Logout</span></Link>

                    </li>


                </ul>
            </div>
        </nav>
    )
}


export default StudentNav