import React from "react";
import { MdWifiOff } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { useHistory } from "react-router";
import { ButtonContainer, StyledButton, StyledGreenButton } from "./style/mainHeader.style";


const ErrorPage =() =>{
    const history = useHistory();
    return(
        <div className='text-center col-lg-12 bg-light row' style={{height:'50vh', margin:'0 auto', }}>
            {/* <center> */}
            <div style={{position:'relative', top:'35%'}}>
                <MdWifiOff size='30%' color='grey' />
                <br/>
                <br/>

                <h2>Oops Something Went Wrong</h2>
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