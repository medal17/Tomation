import { Link } from 'react-router-dom'
import SideImageOFFORM from '../../assets/images/login.jpg'
import { useState, useEffect } from 'react';
import { useHistory, } from "react-router-dom";
import PopUpMessage from '../../component/PopUpMessage'
import { useDispatch, useSelector } from "react-redux";
import { setMessage, clearMessage } from '../../redux/actions/messageAction';
import { registerAgent } from '../../redux/actions/userAuthActions';
import { MdKeyboardBackspace } from 'react-icons/md'
import Footer from '../../component/footer';
import Nav from '../../component/nav';
import state from '../../component/states.json'


const AgentsSignUp = () => {
  const history = useHistory();
  // use state states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [stateOfOrigin, setOrigin] = useState("");
  const [statOfRes, setResident] = useState("");
  const [jobOpportunity, setJobOpportunity] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isHirer, setIsHirer] = useState(false);
  const [isLoadings, setLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));

  console.log(state)

  // redux states
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  const HandlePassword = () => {


    return password === confirmPassword;
  }


  const callback = (response) => {
    // console.log(response)
    if(response.data) {
      history.push('/agent')
      window.location.reload()      

      setLoading(false)
    }  
    setLoading(false)
  }
  // useEffect(() => {
  // }, [user])

  const handleRegistration = (e) => {
    e.preventDefault();

    setLoading(true)


    if (!HandlePassword()) {

      dispatch(setMessage("Password and Confirm Password Are Not The Same!", false))

      return false
    }

    // dispatch()
    // If Nothing Is Wrong THen Clear the Messages
    dispatch(clearMessage())


    // this is a Redux SetState Which Has Axios in it to Send Request to Create user In the Server and also to save
    // the data in the localHost
    dispatch(registerAgent(
      email,
      firstName,
      lastName,
      password,
      stateOfOrigin,
      statOfRes,
      "agent",
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
              <h4 className="form_heading">Register as an Agent</h4>



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

              {/* <div className='row'>
                <label htmlFor="exampleInputEmail2 " className=' '>State of Origin</label>
                <div className='col'>
                  <input type="email"
                    value={stateOfOrigin} onChange={(e) => setOrigin(e.target.value)}
                    className="form-control bg-light rounded" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email" required />
                </div>
              </div> */}

              <div className='col-11 ml-lg-2 '>
                <label className='row py-2'>
                  State of Origin:
                  <select className='py-2 form-control bg-light' value={stateOfOrigin} onChange={(e)=>setOrigin(e.target.value)}>            
                  
                  {state.map((e)=><option value={e}>{e}</option>)
                    }
                    {/* <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option> */}
                  </select>
              </label>
              </div>

              <div className='col-11 ml-lg-2 '>
                <label className='row '>
                  State of Service:
                  <select className='py-2 form-control bg-light' value={statOfRes} onChange={(e)=>setResident(e.target.value)}>            
                  
                  {state.map((e)=><option value={e}>{e}</option>)
                    }
                    {/* <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option> */}
                  </select>
              </label>
              </div>

              {/* <div className='row'>
                <label htmlFor="serviceState " className=' '>State of Service</label>
                <div className='col'>
                  <input type="email"
                    value={statOfRes} onChange={(e) => setResident(e.target.value)}
                    className="form-control bg-light rounded" id="serviceState" aria-describedby="emailHelp" placeholder="Enter email" required />
                </div>
              </div> */}

            </div>
            {/* <br /> */}







            {/* <div className="col">
                <small id="emailHelp" className="form-text text-muted">Degree Type</small>
                <input
                  value=''
                    onChange={(e) => handleUpdateEducation(e, data.uiID, 'degree_type')}
                    value={data.degree_type == 'Nil'?'':data.degree_type}
                    list="educational_qualification" 
                    className="form-control" /> */}
                {/* <datalist type="text" id="educational_qualification"  > */}
                    {/* this is for the educatioanl Qualification */}
                    {/* <option value={"BSC"} />
                    <option name="" id="" value={'BA'}>BA</option>
                    <option name="" id="" value={'BAed'}>BAed</option>
                    <option name="" id="" value={'MSC'}>MSC</option>
                    <option name="" id="" value={'MBA'}>MBA</option>
                </datalist>
              </div> */}

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
            {
              !isLoadings ?
            <button type="submit" className="btn btn-primary">Submit</button>
            :
            <button type="button"  className="btn">Loading</button>
            
            }
            

              <Link className="btn btn-secondary" to="/signin">Already Have An Account?</Link>
            </div>
          </form></div>
      </div>
      <Footer />

    </>
  )
}

export default AgentsSignUp