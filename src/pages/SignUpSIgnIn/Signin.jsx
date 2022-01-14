import { Link } from 'react-router-dom'
import SideImageOFFORM from '../../assets/images/sign.jpg'
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { login } from '../../redux/actions/userAuthActions';
import { setMessage } from '../../redux/actions/messageAction';
import { MdKeyboardBackspace } from 'react-icons/md';
import Footer from '../../component/footer';
import Nav from '../../component/nav';

const Signin = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();


  const handleLogin = (e) => {

    e.preventDefault();

    dispatch(login(email, password))
      .then(response => {
        // console.log(response)
        let user = JSON.parse(localStorage.getItem('user'))

        setTimeout(() => {
          user.data.user_type == 'student' ?
            history.push('/student')
            : (user.data.user_type == 'hirer') ?
              history.push('/employer')
              :
              // if it none of the above then the person must be a tutor
              history.push("/tutor")
        }, 1000);
      })

      .catch((error) => {
        console.log(error)
        // dispatch(setMessage(err.message,true))
      })

  }
  // EnterPresie Metrics

  return (
    <div className=" className= row justify-content-around" >
      {/* <div className="signIn_signUp_image_container">
        <img src={`${SideImageOFFORM}`} alt="" />
      </div> */}
      <Nav />
      <div className='signIn_signUp col-lg-8'>
        <form onSubmit={handleLogin} className='bg-white px-10 my-5 rounded '>
          <div className="heading-section">

            <div class="react_pageComponent">
              <a onClick={() => history.goBack()} >
                <MdKeyboardBackspace size={25} />
              </a>

            </div>

            <h4 className="form_heading">Welcome Back!!</h4>

          </div>
          <br />
          <div className='col'>
            <div className="form-group col">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control"
                id="exampleInputEmail1" placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
                required />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
          </div>
          <br />
          <div className='col'>
            <div className="form-group col">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                id="exampleInputPassword1" placeholder="Password" required />
            </div>
          </div>
          <br />
          <div className='col'>
            <div className='col'>
              <div style={{ 'display': 'flex', "justifyContent": "space-between", "flexWrap": "wrap" }}>
                <button type="submit" className="btn btn-primary">Submit</button>
                {/* <a >Sign Up</a> */}
                <Link className="btn btn-secondary" to='/signup'>Sign Up </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Signin