import React from "react";
import { MdWifiOff } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { useHistory, withRouter  } from "react-router";
import { StyledGreenButton } from "../component/style/mainHeader.style";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }



  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });

    // Log error info somewhere
  }

//   var history = useHistory();

  render() {
    if (this.state.errorInfo) {
      return  <div className='text-center col-lg-12 bg-light row' style={{height:'50vh', margin:'0 auto', }}>
      {/* <center> */}
      <div style={{position:'relative', top:'35%'}}>
          <MdWifiOff size='30%' color='grey' />
          {/* <Lottie  animationData={AnimationData}
          options={
              loop
          }
          />  */}
          {/* <button style={buttonStyle} onClick={() => this.setState({isStopped: true})}>stop</button>
          <button style={buttonStyle} onClick={() => this.setState({isStopped: false})}>play</button>
          <button style={buttonStyle} onClick={() => this.setState({isPaused: !this.state.isPaused})}>pause</button> */}

          <br/>
          <br/>

          <h4 style={{color:'grey'}}>Oops Something Went Wrong</h4>
          <br/>
          <br/>
          {/* <ButtonContainer>Go Back</ButtonContainer> */}
          <StyledGreenButton style={{ cursor: "pointer" }} onClick={() => this.props.history.push('/')}>
           <AiOutlineHome size={20} className='between'/>  Home
          </StyledGreenButton>
      </div>
      {/* </center> */}
  </div>;
    }
    return this.props.children;
  }
}