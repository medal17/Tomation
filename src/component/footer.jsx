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
                    <img src={SavvyLogo} alt="" />
                    <p>
                        The set up of Savvy School is built around developing you for the;
                        human resource management, strategy management and business process
                        management work space. Be it that you are changing career or you are
                        interested in further development yourself in these feilds. We are your
                        sure bet for that desired career advancement.
                    </p>

                </StyledFooterIntroContent>

                <StyledFooterNavLinkContainer>
                    <ul>
                        <h4>PROGRAMS</h4>
                        <li className="list">Human Resource System </li>
                        <li className="list">Recruitment Management</li>
                        <li className="list">Employee Egagement</li>
                        <li className="list">Key Performance Indicator Analytics</li>
                        <li className="list">Employee Appraisal Management</li>
                        {/* <li><a href="">Enterprice</a></li> */}
                    </ul>


                    <ul>
                        <h4>PROGRAMS</h4>
                        <li className="list">Business Process Modelling &amp; Analysis</li>
                        <li className="list"> Business Process Management</li>
                        <li className="list">Customer Experience Management</li>
                        <li className="list">Business Process Modelling &amp; Analysis</li>
                        <li className="list">Strategy Development</li>
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
                        <li><a href="">Performance Mangement</a></li>
                        <li><a href="">Internship and Workforce Placement</a></li>
                        <li><a href="">Recruitement</a></li>
                        <li><a href="">Training</a></li>
                        <li><a href="">Appraisal Data Genrational Framework</a></li>
                        <li><a href="">Key Performance Indicators Analytics(KPI)</a></li>
                        {/* <li><a href="">Enterprice</a></li> */}
                    </ul>

                    <ul>
                        <h4>INSIGHT &amp; LEARNING</h4>
                        <li><a href="">Radical Thinking for Growth</a></li>
                        <li><a href="">Achieving Maximum Performance through Employee Motivation</a></li>
                        <li><a href="">Establishing The Right Business Eco-System</a></li>
                        <li><a href="">Gaining Strategic Competitive Advantage</a></li>
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

                <p>@2021 Elearning.All right reserved.</p>
            </StyledFooterSectionBPart>
        </StyledfooterContainer>
    )
}

export default Footer