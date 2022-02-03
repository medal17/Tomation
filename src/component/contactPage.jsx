import { FlexWap } from "./style/flexWap.style"
import {
    StyledHeaderImage, Spacer,
    StyledImageHeaderContainer, StyledTestimonialHeader,
    StyledmainHeaderWrapper, StyledmainHeaderContentPane, StyledButton, StyledGreenButton, OutlineButton, ButtonContainer
} from "./style/mainHeader.style"
import svgLine from '../assets/svg/line.svg'
import imageHeader from '../assets/images/herobg.jpg'
import heroRight from '../assets/images/Contact Us Vector Illustration Part 02.jpg'
import MtnImage from '../assets/images/mtnImage.png'
import zenithImage from '../assets/images/zenith.png'
import { BsFillVinylFill, BsFillLightbulbFill, BsPhone, BsEnvelopeOpenFill, BsFacebook, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import Nav from "./nav"
import { MdLocationPin } from "react-icons/md"
import { AiFillTwitterCircle } from "react-icons/ai"
const ContactPage = ({ heading, content }) => {

    const history = useHistory()
    return (

        <>
            {/* <Spacer /> */}
            <Nav/>
            <StyledmainHeaderWrapper>

                <StyledmainHeaderContentPane >


                    <h1>Contact Us</h1>
                    <p>
                        {content}
                    </p>
                    {/* <img src={svgLine} alt="" style={{postion:'absolute',top:0}} /> */}

                    <div style={{

                    }}>
                        <p > <MdLocationPin color="#F55608" size={28} style={{ marginRight: '0.5rem' }} /> 
                        5, Adeboye Solanke Avenue, Off Allen Avenue, Ikeja, Lagos </p>
                        
                        <p className='text-lg'><BsPhone color="#F55608" size={28} style={{ marginRight: '0.5rem' }} /> +2347089199545
                        </p>
                        <p className='text-lg'><BsEnvelopeOpenFill color="#F55608" size={26} style={{ marginRight: '0.5rem' }} /> info@savvyschools.online
                        </p>
                        <div className='row ml-lg-5 mr-lg-5 mt-2'>
                            <a href='' className='text-lg col'><BsFacebook color="#0000FF" size={30} style={{ marginRight: '0.5rem' }} />
                            </a>
                            <a href='' className='text-lg col'><AiFillTwitterCircle color="#187bcd" size={35} style={{ marginRight: '0.5rem' }} />
                            </a>
                            <a href="whatsapp://send?phone=+2347089199545" className='text-lg col'><BsWhatsapp color="#00FF00" size={29} style={{ marginRight: '0.5rem' }} />
                            </a>
                        </div>
                    </div>
                    {/* <ButtonContainer>

                        <StyledButton style={{ cursor: "pointer" }} onClick={() => history.push('/signup')}>Get Started</StyledButton>
                        <OutlineButton style={{ cursor: "pointer" }}> <BsFillLightbulbFill color="#22596B" size={21} style={{ marginRight: '0.5rem' }} /> Contact Support</OutlineButton>
                    </ButtonContainer>
                    <ButtonContainer>
                        <StyledGreenButton className="mt-2" style={{ cursor: "pointer" }} onClick={() => history.push('/agent-signup')}>Register as an Agent</StyledGreenButton>
                    </ButtonContainer> */}
                </StyledmainHeaderContentPane>

                <StyledImageHeaderContainer>
                    <StyledHeaderImage src={heroRight} className='ball' />

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


export default ContactPage