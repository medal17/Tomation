import Staticuser_image from '../../../assets/images/xperson_1.jpg.pagespeed.ic.P4pHl6glbj.jpg'

import CustomSlider from '../../../component/CustomSlider'

const Lecturers = ()=>{
    return (
    <section className="ftco-section testimony-section bg-light">
        <div className="container-xl">
        <div className="row justify-content-center pb-4">
        <div className="col-md-7 text-center heading-section" >
        <span className="subheading">Our Lecturer</span>
        <h2 className="mb-5">Meet our in-demand and industry highly rated tutors</h2>
        </div>
        </div>
        <div className="row">
        <div className="col-md-12" >
        <div className="carousel-testimony">

            <CustomSlider>
               {     [1,2,3,4,5,6,6].map(()=>{
                       return (
                        <div className="item">
                        <div className="testimony-wrap">
                        <div className="text">
                        <div className="d-flex align-items-center mb-4">
                        <div className="user-img" style={{backgroundImage:`url(${Staticuser_image})`}}>
                        <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-quote-left"></span></div>
                        </div>
                        <div className="ps-3 tx">
                        <p className="name">Roger Scott</p>
                        <span className="position">Marketing Manager</span>
                        </div>
                        </div>
                        <p className="mb-4 msg">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                        </div>
                        </div>  
                       ) 
                    })}
            </CustomSlider>
            
        </div>
        </div>
        </div>
        </div>
    </section>
    )
}


export default Lecturers