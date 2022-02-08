import React from "react";
import { MdWifiOff } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { useHistory } from "react-router";
import { StyledGreenButton } from "./style/mainHeader.style";


const ErrorPage =() =>{
    const history = useHistory();
    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true, 
    //     animationData: animationData,
    //     rendererSettings: {
    //       preserveAspectRatio: 'xMidYMid slice'
    //     }
    //   };

    return(
        <div className='text-center col-lg-12 bg-light row' style={{height:'50vh', margin:'0 auto', }}>
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
                <StyledGreenButton style={{ cursor: "pointer" }} onClick={() => history.push('/')}>
                 <AiOutlineHome size={20} className='between'/>  Home
                </StyledGreenButton>
            </div>
            {/* </center> */}
        </div>
    );
}
export default ErrorPage