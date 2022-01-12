import { useHistory } from 'react-router-dom'
import {StyleCustomButton} from './style/CustomButton.style'

const CustomButton =({link})=>{

    const history = useHistory()



return (

    <StyleCustomButton onClick={()=>history.push(link)}>
        Enroll Now
        <i class="fas fa-arrow-right"></i>
    </StyleCustomButton>
)


}
export default CustomButton