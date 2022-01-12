import {
    StyledCourseCardContainer,
    StyledSmallInfo,
} from '../component/style/StyledCourseCard.style'
import RandomImage from '../assets/images/ximage_1.jpg.pagespeed.ic.UgmmPhXrdT.jpg'
import { Link } from 'react-router-dom'

const CourseCard =({data})=>{



    return (

        <StyledCourseCardContainer>
            <h1>{data.name}</h1>
            <img src={RandomImage} alt="" />

            <p>
                {data.about}
            </p>

            <Link to={`/course-detail/${data.id}`} >Read More</Link>
<br />
        <div>
            <StyledSmallInfo>{data.duration}</StyledSmallInfo>
            {/* <StyledSmallInfo>For Starters</StyledSmallInfo> */}
        </div>
        </StyledCourseCardContainer>
    )
}


export default CourseCard