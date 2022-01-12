import {StyledIntroToCardList} from './style/StyledIntroToCardList.style'
import Card from './Card'
import CourseCard from './CourseCard'
const IntroToCardList = ({contentList=[],isSchoolDetail,School_detail})=>{


    return (
        <>
            <StyledIntroToCardList>
                            <h4>
                                All Available Courses
                            </h4>

                    <p>
                        We are a platform that helps you learn skills and turn projects into hiring visibility.   
                    </p>


            {
                isSchoolDetail?


                contentList.map(data=><CourseCard data={data}/>)
            :

            <ul>
          {contentList.map(data=> <Card 
          
            subHead={data.school__name}
            heading={data.name}
            content={data.about}
            pry_btn___link={`/course-detail/${data.id}`}
            pry_btn_content={"Learn More"}
            sec_btn__link={`/course-detail/${data.id}`}
            sec_btn__content={'dkd'}
          />)} 
        </ul>
            }

                
            
            </StyledIntroToCardList>

        </>
    )
}
export default IntroToCardList