import SavvyLogo from "../assets/images/Savvy Hr Logo.svg"
import {
    StyledfooterContainer,
    StyledFooterSectionAPart,
    StyledFooterSectionBPart,
    StyledFooterSocial,
    StyledFooterIntroContent,
    StyledFooterNavLinkContainer,
} from "../component/style/StyledFooter.style"

const Footer = () => {


    return (
        <StyledfooterContainer>
            <StyledFooterSectionAPart>
                <StyledFooterIntroContent>
                    <img src={SavvyLogo} alt="" height='20px' width='10px' />
                    <div style={{ fontSize: 12, color: '#fff', marginTop: -5 }}>
                        The set up of Savvy School is built around developing you for the;
                        human resource management, strategy management and business process
                        management work space. Be it that you are changing career or you are
                        interested in further development yourself in these feilds. We are your
                        sure bet for that desired career advancement.
                    </div>

                </StyledFooterIntroContent>

                <StyledFooterNavLinkContainer>
                    <ul>
                        <h4>SCHOOLS</h4>
                        <li className="list"><a href="">Human Resource System</a> </li>
                        <li className="list"><a href="">Recruitment Management</a></li>
                        <li className="list"><a href="">Employee Egagement</a></li>
                        <li className="list"><a href="">Key Performance Indicator Analytics</a></li>
                        {/* <li><a href="">Enterprice</a></li> */}
                    </ul>


                    <ul>
                        <h4>SOLUTIONS</h4>
                        <li className="list"><a href="">Performance Mangement</a></li>
                        <li className="list"><a href="">Internship and Workforce Placement</a></li>
                        <li className="list"><a href="">Recruitement</a></li>
                        {/* <li><a href="">Enterprice</a></li> */}
                    </ul>
                    {/* Performance mangement
                    internship and workforce placement
                    Recruitement
                    Training
                    Appraisesal Data Genrational Framework
                    KEY PERFORMANCE INDICATORS ANALYTICS(KPI) */}

                    <ul>
                        <h4>SOLUTIONS</h4>

                        <li className="list"><a href="">Training</a></li>
                        <li className="list"><a href="">Appraisal Data Genrational Framework</a></li>
                        <li className="list"><a href="">Key Performance Indicators Analytics(KPI)</a></li>
                        {/* <li><a href="">Enterprice</a></li> */}
                    </ul>

                    <ul>
                        <h4>INSIGHT &amp; LEARNING</h4>
                        <li className="list"><a href="">Radical Thinking for Growth</a></li>
                        <li className="list"><a href="">Achieving Maximum Performance through Employee Motivation</a></li>
                        {/* <li><a href="">Establishing The Right Business Eco-System</a></li> */}
                        {/* <li><a href="">Gaining Strategic Competitive Advantage</a></li> */}
                        {/* <li><a href="">Scholarship</a></li> */}
                        {/* <li><a href="">Enterprice</a></li> */}
                    </ul>


                </StyledFooterNavLinkContainer>
            </StyledFooterSectionAPart>


            <StyledFooterSectionBPart>
                {/* <StyledFooterSocial>
                    <li><i class="fab fa-facebook"></i></li>
                    <li><i></i></li>
                    <li><i></i></li>
                    <li><i></i></li>
                </StyledFooterSocial> */}

                <p className="pt-5">@2021 Elearning.All right reserved.</p>
            </StyledFooterSectionBPart>
        </StyledfooterContainer>
    )
}

export default Footer