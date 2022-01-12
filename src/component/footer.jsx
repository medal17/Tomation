import SavvyLogo from "../assets/images/Savvy Hr Logo.svg"
import {
    StyledfooterContainer,
    StyledFooterSectionAPart,
    StyledFooterSectionBPart,
    StyledFooterSocial,
    StyledFooterIntroContent,
    StyledFooterNavLinkContainer,
}from "../component/style/StyledFooter.style"

const Footer =()=>{


    return (
<StyledfooterContainer>
        <StyledFooterSectionAPart>
                <StyledFooterIntroContent>
                <img src={SavvyLogo} alt="" />
                    <p>
                        we are thre leading Education company in Africa that helps
                        people learn premium technology skills virually and help companies hire the best talents.
                    </p>
                    
                </StyledFooterIntroContent>

            <StyledFooterNavLinkContainer>
                <ul>
                    <h4>PROGRAMMS</h4>
                    <li><a href="">Enterprice</a></li>
                    <li><a href="">Utiva Business Network</a></li>
                    <li><a href="">Be A Trainer</a></li>
                    <li><a href="">Ubunto</a></li>
                    <li><a href="">Scholarship</a></li>
                    {/* <li><a href="">Enterprice</a></li> */}
                </ul>


                <ul>
                <h4>PROGRAMMS</h4>
                    <li><a href="">Enterprice</a></li>
                    <li><a href="">Utiva Business Network</a></li>
                    <li><a href="">Be A Trainer</a></li>
                    <li><a href="">Ubunto</a></li>
                    <li><a href="">Scholarship</a></li>
                    {/* <li><a href="">Enterprice</a></li> */}
                </ul>


                <ul>
                <h4>PROGRAMMS</h4>
                    <li><a href="">Enterprice</a></li>
                    <li><a href="">Utiva Business Network</a></li>
                    <li><a href="">Be A Trainer</a></li>
                    <li><a href="">Ubunto</a></li>
                    <li><a href="">Scholarship</a></li>
                    {/* <li><a href="">Enterprice</a></li> */}
                </ul>

                <ul>
                <h4>CONTACT</h4>
                    <li><a href="">info@elearning.com</a></li>
                    <li><a href="">+2333434434</a></li>
                    <li><a href="">+233434</a></li>
                    <li><a href="">245 uptown strret,ikrd.</a></li>
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