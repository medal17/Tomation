
import { StyledCard } from './style/StyledCard.style'
import CustomButton from './CustomButton'
const Card = (props) => {

    return (
        <StyledCard>
            <h5>{props.subHead}</h5>

            <h4 className='course-header'>{props.heading}</h4>

            <p>
                {props.content.length <= 200 ? props.content : props.content.substring(0, 210) + '...'}
            </p>
            <a href={props.pry_btn___link}>{props.pry_btn_content}</a>

            {/* <button>Enrol Now</button> */}
            <br />
            {/* <CustomButton link={props.sec_btn__link}
                {props.sec_btn__content}
            >
            </CustomButton> */}

        </StyledCard>
    )
}


export default Card