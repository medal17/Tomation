import TutorPics from '../../assets/images/xauthor-1.jpg.pagespeed.ic.gWpEzQ4x3B.jpg'

import { useEffect, useState } from 'react'
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { setMessage } from '../../redux/actions/messageAction';
import LandingPageCard from '../../component/LandingPageCard';
import MainHeader from "../../component/mainHeader"
import Footer from '../../component/footer';
import IntroToCardList from '../../component/IntroToCardList'

const SchoolDetail =()=>{
    const {id} = useParams();
    const [School_detail,setSchool_detail]= useState([])
    const dispatch = useDispatch();
    const [isLoading,setIsLoading] = useState(true)
    const history = useHistory();

    useEffect(()=>{
    const API_URL = 'https://emeticslearning-backend.herokuapp.com';

        axios.get(API_URL+`/api/get_course_basedOnSchool/${id}/`).then((response)=>{
            console.log(response.data.data,'sss')
            setSchool_detail({...response.data.data})

            setIsLoading(false)
        }).catch((error)=>{
            dispatch(setMessage(error.message,false))
            console.log(error.message)
            setIsLoading(false)

        })
    },[])
    return (
        <>
 <div className="react_pageComponent">
 <a onClick={(e)=>{e.preventDefault(); return history.goBack()}}>
     <i className="backArrowIcon fas fa-arrow-left"></i>
 </a>

    <br /><br /> <br />
    {!isLoading?
    <>
        <MainHeader
        heading={School_detail.name}
        content={School_detail.about}
        />
            <IntroToCardList isSchoolDetail={true} contentList={School_detail.courses} />
        </>
:""
}


</div>

<Footer/>
        </>
    )
}


export default SchoolDetail




// <div className="react_pageComponent">
// <a onClick={(e)=>{e.preventDefault(); return history.goBack()}}>
//     <i className="backArrowIcon fas fa-arrow-left"></i>
// </a>

// <div className="container">
//   <section className="ftco-section courses-section">
//     <div className="container">
//     <div className="row">
//     {/* data-aos="flip-left" data-aos-delay="100" data-aos-duration="1000" */}

//             {
//                 isLoading==true?"Loading..."
//                 :
                
//                 courses.length==0?
//                <h1>Course Currently Unavailable please come back!</h1>
                
//                 :
                
//                 (
//                     courses.map((data,index)=>{
                        
//                         return( 
                            
//                             <div className="col-md-6 col-lg-4">
//                                     <LandingPageCard
//                                     key={data.id}
//                                     id={data.id}
//                                     name={data.name}
//                                     about={data.about} 
//                                     isCourse={true}
//                                     />
//                         </div>
//                  )
//                 })
                
//                 )
//             } 
//     </div>
//     {/* <div className="row mt-5">
//     <div className="col text-center">
//     <div className="block-27">
//     <ul>
//     <li><a href="#">&lt;</a></li>
//     <li className="active"><span>1</span></li>
//     <li><a href="#">2</a></li>
//     <li><a href="#">3</a></li>
//     <li><a href="#">4</a></li>
//     <li><a href="#">5</a></li>
//     <li><a href="#">&gt;</a></li>
//     </ul>
//     </div>
//     </div>
//     </div> */}
//     </div>
//     </section>

    
 
  
// </div>
// </div>
{/* <!-- end of react_pageComponent  --> */}
