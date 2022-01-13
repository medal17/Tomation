import { FlexWap } from "./style/flexWap.style"
import {
    StyledHeaderImage, Spacer,
    StyledImageHeaderContainer, StyledTestimonialHeader,
    StyledmainHeaderWrapper, StyledmainHeaderContentPane, StyledButton, OutlineButton, ButtonContainer
} from "./style/mainHeader.style"
import svgLine from '../assets/svg/line.svg'
import imageHeader from '../assets/images/herobg.jpg'
import heroRight from '../assets/images/hero-right.jpg'
import MtnImage from '../assets/images/mtnImage.png'
import zenithImage from '../assets/images/zenith.png'
import { BsFillVinylFill, BsFillLightbulbFill } from 'react-icons/bs';
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
const MainHeader = ({ heading, content }) => {

    const history = useHistory()
    return (

        <>
            <Spacer />
            <StyledmainHeaderWrapper>

                <StyledmainHeaderContentPane >


                    <h1>Welcome to {heading}</h1>
                    <p>
                        {content}
                    </p>
                    {/* <img src={svgLine} alt="" style={{postion:'absolute',top:0}} /> */}

                    <div style={{

                    }}>
                        <p><BsFillVinylFill color="#F55608" size={21} style={{ marginRight: '0.5rem' }} /> Our courses are offered 100% online
                        </p>
                        <p > <BsFillVinylFill color="#F55608" size={21} style={{ marginRight: '0.5rem' }} /> You will also have the option of a flexible payment arrangement</p>
                    </div>
                    <ButtonContainer>

                        <StyledButton style={{ cursor: "pointer" }} onClick={() => history.push('/signup')}>Get Started</StyledButton>
                        <OutlineButton style={{ cursor: "pointer" }}> <BsFillLightbulbFill color="#22596B" size={21} style={{ marginRight: '0.5rem' }} /> Contact Support</OutlineButton>
                    </ButtonContainer>
                </StyledmainHeaderContentPane>

                <StyledImageHeaderContainer>
                    <StyledHeaderImage src={heroRight} />

                    {/* <StyledTestimonialHeader>
                        <p>
                            Where our students come from
                        </p>

                        <div>
                            <img src={MtnImage} alt="" />
                            <img src={MtnImage} alt="" />
                            <img src={MtnImage} alt="" />
                            <img src={zenithImage} alt="" />
                            <img src={MtnImage} alt="" />
                            <img src={zenithImage} alt="" />

                        </div>
                    </StyledTestimonialHeader> */}

                </StyledImageHeaderContainer>

            </StyledmainHeaderWrapper>
            <Spacer />

        </>

    )
}


export default MainHeader