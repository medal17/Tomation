import mainImage from '../../../assets/images/linkedin-sales-solutions-u3hmzw5U-SI-unsplash.jpg'
import { FaAward, FaChalkboardTeacher } from 'react-icons/fa'
import { IoSchool } from 'react-icons/io5'
import { MdOndemandVideo } from 'react-icons/md'
import { RiComputerFill, RiWechatLine } from 'react-icons/ri'
// 

const LearnAnything = () => {


    return (
        <>
            <section className="ftco-section ftco-no-pt ftco-no-pb row  m-2 col-lg-11 align-items-stretch" >
                <h1 className='h1 font-weight-bold text-lg-center'>Benefits of Savvy School learning expertise</h1>
                <div className=" py-5 d-flex ml-lg-5">


                    <div className="row g-xl-5  ml-lg-1">
                        {/* data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" */}
                        <div className="col-md-3 col-sm-10 col-xs-12 d-flex align-items-stretch ml-lg-5" >
                            <div className="img w-100" style={{ backgroundImage: `url(${mainImage})` }}>
                            </div>
                        </div>

                        {/* data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" */}
                        <div className='container col-md-8 '>
                            <div className='row  mt-2' >
                                <div className="col-lg-6  align-items-stretch services-wrap mb-2">
                                    <div className="services row ">
                                        <div className="icon center">
                                            <span><i className="flaticon-award"><FaAward /></i></span>
                                        </div>
                                        {/* <!-- <div className="icon"><span className="flaticon-scientist"></span></div> --> */}
                                        <div className="text mb-3">
                                            <h2 className='text-center'>Our years of experience</h2>
                                            <p className="mb-0 text-center">Our organization has been in the industry for more than 17 years which has made us one of the major players in the business process and performance industry.  Consequently, we have produced students who now hold major positions in various organizations across the length and breadth of Nigeria.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6  align-items-stretch services-wrap mb-2 h-100">
                                    <div className="services row h-100">
                                        <div className="icon center">
                                            <span><i className="flaticon-scientist"></i></span>
                                        </div>
                                        {/* <!-- <div className="icon"><span className="flaticon-scientist"></span></div> --> */}
                                        <div className="text">
                                            <h2 className='text-center'>Internship Opportunity</h2>
                                            <p className="mb-0 text-center">As an organization, we are not only interested in impacting knowledge; we are also concerned about the employment status of all participants. Based on this, we have a list of companies who are in constant contact with us for paid interns who have undergone any of our trainings. We will not hesitate to link up any unemployed participants for such opportunities.</p>
                                        </div>
                                    </div>
                                </div>



                                {/* <div className="col-lg-4 d-flex align-items-stretch services-wrap mb-2">
                            <div className="services row">
                                <div className="icon center">
                                    <span><i className="font-awesome-comment"></i></span>
                                </div>
                                <div className="text">
                                    <h2>Access to post lecture videos</h2>
                                    <p className="mb-0">Because we are very interested in fully understanding whatever that has been taught very well, the lecture videos will be made available for a period of five days post lecture after which access to the video will be denied.</p>
                                </div>
                            </div>
                        </div> */}
                                {/* </div> */}

                                {/* <div className='row  mt-2' > */}


                                <div className="col-lg-6 align-items-stretch services-wrap h-100">
                                    <div className="services row mb-2 mh-100 h-100">
                                        <div className="icon center">
                                            <span><i ><IoSchool /></i></span>
                                        </div>
                                        {/* <!-- <div className="icon"><span className="flaticon-scientist"></span></div> --> */}
                                        <div className="text">
                                            <h2 className='text-center'>Highly experienced faculty members</h2>
                                            <p className="mb-0 text-center">We have a pool of faculty members who are industry experts with over a decade of practical knowledge. With this, our faculty members are able to impact industry needed knowledge in you to help you advance your career and profession.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 align-items-stretch services-wrap h-100">
                                    <div className="services row  pb-2" >
                                        <div className="icon center">
                                            <span><i className=""><FaChalkboardTeacher /></i></span>
                                        </div>
                                        {/* <!-- <div className="icon"><span className="flaticon-scientist"></span></div> --> */}
                                        <div className="text">
                                            <h2 className='text-center'>Teaching method</h2>
                                            <p className="mb-0 text-center">Our teaching method is structured in such a way that allows practical sessions to be organized. This is because, we don’t just teach theories; we practicalize what we teach. Our modus operandi thus is a practical one with real work related examples for proper understanding of what is being taught.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="col-lg-4 d-flex align-items-stretch services-wrap mb-2">
                            <div className="services row">
                                <div className="icon center">
                                    <span><i className="font-awesome-comment"></i></span>
                                </div>
                                <div className="text">
                                    <h2>Access to post lecture videos</h2>
                                    <p className="mb-0">Because we are very interested in fully understanding whatever that has been taught very well, the lecture videos will be made available for a period of five days post lecture after which access to the video will be denied.</p>
                                </div>
                            </div>
                        // </div> */}
                            </div>
                        </div>



                    </div>


                </div>
                <div className='container d-flex justify-contents-center ml-lg-5'>
                    <div className='row  mt-2 m-lg-5' >
                        <div className="col-lg-4  align-items-stretch services-wrap mb-2 ">
                            <div className="services row h-100">
                                <div className="icon center">
                                    <span><i className=""><RiComputerFill /></i></span>
                                </div>
                                {/* <!-- <div className="icon"><span className="flaticon-scientist"></span></div> --> */}
                                <div className="text">
                                    <h2 className='text-center'>Learning in the comfort of your home</h2>
                                    <p className="mb-0 text-center">The novel corona virus has pushed the frontiers of online teaching and learning an all-time high level. It made people world over realize the importance of technology. Our courses are strictly online and that means that, they can be taken in any part of Nigeria, Africa and the world as a whole at your comfort zone.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 align-items-stretch services-wrap h-lg-100 mb-2">
                            <div className="services row h-100">
                                <div className="icon center">
                                    <span><i className=""><RiWechatLine /></i></span>
                                </div>
                                {/* <!-- <div className="icon"><span className="flaticon-scientist"></span></div> --> */}
                                <div className="text">
                                    <h2 className='text-center'>Chat Room</h2>
                                    <p className="mb-0 text-center">Our platform has provided the opportunity for all participants to discuss what has been taught in the class, ask questions and seek clarifications among fellow participants. The platform also facilitates networking opportunities.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 d-flex align-items-stretch services-wrap mb-2  h-lg-100">
                            <div className="services row  h-lg-100">
                                <div className="icon center">
                                    <span><i className="font-awesome-comment"><MdOndemandVideo /></i></span>
                                </div>
                                {/* <!-- <div className="icon"><span className="flaticon-scientist"></span></div> --> */}
                                <div className="text">
                                    <h2 className='text-center'>Access to post lecture videos</h2>
                                    <p className="mb-0 text-center">Because we are very interested in fully understanding whatever that has been taught very well, the lecture videos will be made available for a period of five days post lecture after which access to the video will be denied.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}


export default LearnAnything