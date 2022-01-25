import Banner from "../../../assets/images/xbg_1.jpg.pagespeed.ic.LEZ7WXICMQ.jpg"

import { Link } from "react-router-dom"
import MainHeader from "../../../component/mainHeader"
const HeroSection = () => {


    {/* data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" */ }
    return (
        // <section className="hero-wrap" style={{backgroundImage:`url(${Banner})`}}>

        //         <div className="overlay"></div>
        //         <div className="container">
        //         <div className="row no-gutters slider-text align-items-center">
        //         <div className="col-lg-5">
        //         <div className="text mt-5 pt-5" >
        //         <span className="subheading">Welcome to E-Learning Suite </span>
        //         <h1 className="mb-4">Best Online Education Expertise </h1>
        //         <p className="mb-4" style={{color:"white"}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        //         <p><Link to='/signup'  className="btn btn-primary p-4 py-3">Get Started Now! <span className="ion-ios-arrow-round-forward"></span></Link> <Link to={'/schools'} className="btn btn-white p-4 py-3">View Schools <span className="ion-ios-arrow-round-forward"></span></Link></p>
        //         </div>
        //         </div>
        //         </div>
        //         </div>
        // </section>
        <MainHeader
            heading={"Savvy Schools "}
            content={`
            The set up of Savvy Schools is built around developing you for the; 
            human resource management, strategy management and business 
            process management work space. Be it that you are changing career 
            or you are interested in further developing yourself in these fields. 
            We are your sure bet for that desired career advancement.


            `}
        />

    )
}

export default HeroSection