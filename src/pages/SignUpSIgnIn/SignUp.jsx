import { Link } from 'react-router-dom'
import SideImageOFFORM from '../../assets/images/login.jpg'
import { useState, useEffect } from 'react';
import { useHistory, } from "react-router-dom";
import PopUpMessage from '../../component/PopUpMessage'
import { useDispatch, useSelector } from "react-redux";
import { setMessage, clearMessage } from '../../redux/actions/messageAction';
import { register } from '../../redux/actions/userAuthActions';
import { MdKeyboardBackspace } from 'react-icons/md'
import Footer from '../../component/footer';
import Nav from '../../component/nav';


const SignUp = () => {
  const history = useHistory();
  // use state states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [agentCode,setAgentCode] = useState("");
  const [state, setState] = useState("");
  const [callUp, setCallUp] = useState("");
  const [jobOpportunity, setJobOpportunity] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isHirer, setIsHirer] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));
  const [isCorper, setCorper] = useState(false)



  // redux states
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  const HandlePassword = () => {


    return password === confirmPassword;
  }


  const callback = (response) => {
    // console.log(response)
    window.location.reload();
    if (response.data) {
      response.data.user_type == 'student' ?
        history.push('/student')
        : (response.data.user_type == 'hirer') ?
          history.push('/employer')
          :
          // if it none of the above then the person must be a tutor
          history.push("/tutor")
    } else {
      history.push('/signup')
    }
  }

  useEffect(() => {
    if (user) {
      console.log(user)
      user.data.user_type == 'student' ?
        history.push('/student')
        : (user.data.user_type == 'hirer') ?
          history.push('/employer')
          :
          // if it none of the above then the person must be a tutor
          history.push("/tutor")
    } else { history.push('/signup') }
  }, [user])

  const handleRegistration = (e) => {
    e.preventDefault();


    if (!HandlePassword()) {

      dispatch(setMessage("Password and Confirm Password Are Not The Same!", false))

      return false
    }

    // dispatch()
    // If Nothing Is Wrong THen Clear the Messages
    dispatch(clearMessage())


    // this is a Redux SetState Which Has Axios in it to Send Request to Create user In the Server and also to save
    // the data in the localHost
    dispatch(register(
      
      email,
      firstName,
      lastName,
      password,
      agentCode,
      isCorper,
      state,
      callUp,
      isHirer ? "hirer" : "student",
      callback


    ))
    // .then((resp) => {
    //   let user = JSON.parse(localStorage.getItem('user'))

    //   setTimeout(() => {
    //     user.data.user_type == 'student' ?
    //       history.push('/student')
    //       : (user.data.user_type == 'hirer') ?
    //         history.push('/employer')
    //         :
    //         // if it none of the above then the person must be a tutor
    //         history.push("/tutor")
    //   }, 1000);
    // })
    //   .catch(() => {
    //     console.log("Some Error Occrded")
    //   })



  }




  return (
    <>
      <div className=" row justify-content-around" style={{
        backgroundImage: `url(${SideImageOFFORM})`, backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }} >
        <Nav />

        {/* <div className="signIn_signUp_image_container">
        <img src={SideImageOFFORM} alt="" />
      </div> */}
        <div className='signIn_signUp col-lg-8' >
          <form onSubmit={(e) => handleRegistration(e)}
            className='bg-white px-10 my-5 rounded '
          >


            <div className="heading-section">
              <div class="react_pageComponent">
                <a onClick={() => history.goBack()}>
                  <MdKeyboardBackspace size={25} />
                </a>

              </div>
              <h4 className="form_heading">Create a new account</h4>



            </div>
            <br />
            <div className="form-group row">

              <div className="row">
                <div className="col">

                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1 " className='fs-4'>First Name </label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="form-control bg-light rounded" id="exampleInputPassword1" placeholder="First Name" required />
                  </div>
                </div>
                <div className="col">

                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text"
                      value={lastName} onChange={(e) => setLastName(e.target.value)}
                      className="form-control bg-light rounded" id="lastName" placeholder="Last Name" required />
                  </div>
                </div>
              </div>

              {/* <br /> */}
              <div className='row'>
                <label htmlFor="exampleInputEmail1 " className=' '>Email address</label>
                <div className='col'>
                  <input type="email"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    className="form-control bg-light rounded" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                </div>
              </div>
            </div>
            {/* <br /> */}

            {
              isCorper ?
                <>
                  <div className='row'>
                    <label htmlFor="exampleInputEmail1 " className=' '>Call up Number </label>
                    <div className='col'>
                      <input type="number"
                        value={callUp} onChange={(e) => setCallUp(e.target.value)}
                        className="form-control bg-light rounded" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Call up Number" required />
                    </div>
                  </div>

                  <div className='row'>
                    <label htmlFor="exampleInputEmail1 " className=' '>Agent's Referral Code </label>
                    <div className='col'>
                      <input type="text"
                        value={agentCode} onChange={(e) => setAgentCode(e.target.value)}
                        className="form-control bg-light rounded" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Agent's code" required />
                    </div>
                  </div>

                  <div className='row'>
                    <label htmlFor="exampleInputEmail1 " className=' '>State of Service</label>
                    <div className='col'>
                      <input type="text"
                        value={state} onChange={(e) => setState(e.target.value)}
                        className="form-control bg-light rounded" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter State of service" required />
                    </div>
                  </div><br />
                </>
                : ''}

            {
              isHirer == false ?
                <div className="form-group">

                  {/* {jobOpportunity} */}
                  <label htmlFor="">Are you Open For Job Opportunity</label>
                  <input type="checkbox"
                    defaultChecked={jobOpportunity}
                    onChange={(e) =>
                      setJobOpportunity(!jobOpportunity)}

                    style={{ marginLeft: "10px" }}

                  />

                  <br />
                  <small id="emailHelp" className="form-text text-muted">You can Change this Data in your Profile</small>
                </div>
                :
                ""
            }

            <div className="form-group">
              {/* {jobOpportunity} */}
              <label htmlFor="">Are you a Corps Member?</label>
              <input type="checkbox"
                defaultChecked={isHirer}
                onChange={(e) =>
                  setCorper(!isCorper)}

                style={{ marginLeft: "10px" }}

              />

              {/* <br />
              <small id="emailHelp" className="form-text text-muted">
                If you want to employ, please check this box. Kindly correct this
              </small> */}
            </div>

            <div className="form-group">
              {/* {jobOpportunity} */}
              <label htmlFor="">Create Employer Account</label>
              <input type="checkbox"
                defaultChecked={isHirer}
                onChange={(e) =>
                  setIsHirer(!isHirer)}

                style={{ marginLeft: "10px" }}

              />

              <br />
              <small id="emailHelp" className="form-text text-muted">
                If you want to employ, please check this box. Kindly correct this
              </small>
            </div>




            <div className="row">
              <div className='col'>
                <div className="row">

                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password"
                      value={password} onChange={(e) => setPassword(e.target.value)}

                      className="form-control bg-light rounded" id="exampleInputPassword1" placeholder="Password"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className='row'>
                  <div className="form-group row">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password"
                      value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}

                      className="form-control bg-light rounded" id="exampleInputPassword1" placeholder="Confirm Password" required />
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div style={{ 'display': 'flex', "justifyContent": "space-between", "flexWrap": "wrap" }}>

              <button type="submit" className="btn btn-primary">Submit</button>

              <Link className="btn btn-secondary" to="/signin">Already Have An Account?</Link>
            </div>
          </form></div>
      </div>
      <Footer />

    </>
  )
}

export default SignUp