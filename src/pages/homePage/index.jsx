import HeroSection from "./component/hero_section"

import LearnAnything from "./component/learnAnything"
import OurCourses from "./component/ourCourses"
import Testimonial from "./component/testimonial"
import Lecturers from "./component/Lecturers"
// import Nav from "./component/nav"
import Nav from "../../component/nav"
import Footer from "../../component/footer"
const HomePage = () => {


    return (
        <>
            <Nav />

            <HeroSection />

            <OurCourses />
            <LearnAnything />
            <br />
            {/* <Testimonial /> */}
            {/* <Lecturers  /> */}
            <Footer />
        </>
    )
}


export default HomePage