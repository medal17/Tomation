import { useEffect, useState } from 'react'
import TutorPics from '../../assets/images/xauthor-1.jpg.pagespeed.ic.gWpEzQ4x3B.jpg'
import LandingPageCard from '../../component/LandingPageCard'
import { useDispatch } from 'react-redux';
import axios from "axios";
import { setMessage } from '../../redux/actions/messageAction';
import { useHistory } from 'react-router-dom';
import { CgBackspace, CgArrowLeftR } from "react-icons/cg";
import Card from '../../component/Card';
import Nav from '../../component/nav';

const Schools = () => {
    const API_URL = 'https://emeticslearning-backend.herokuapp.com/';
    const [isLoading, setIsLoading] = useState(true)
    const [schools, SetSchools] = useState([])
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        axios.get(API_URL + `api/get_schools/`).then((response) => {
            console.log(response.data.data)
            SetSchools([...response.data.data])

            setIsLoading(false)
        }).catch((error) => {
            dispatch(setMessage(error.message, false))
            console.log(error.message)
            setIsLoading(false)

        })
    }, [])

    return (
        <>
            <Nav />
            <div className="react_pageComponent">
                <a onClick={(e) => { e.preventDefault(); return history.goBack() }}>
                    <i className="backArrowIcon fas fa-arrow-left"><CgArrowLeftR size={30} /></i>
                </a>

                <div className="container">
                    <section className="ftco-section courses-section">
                        <div className="container">
                            <div className="row">
                                {/* data-aos="flip-left" data-aos-delay="100" data-aos-duration="1000" */}

                                {
                                    isLoading == true ? "Loading..."
                                        :
                                        schools.length == 0 ? "" : (
                                            schools.map((data, index) => {

                                                return (

                                                    <div className="col-md-6 col-lg-4">
                                                        <LandingPageCard
                                                            id={data.id}
                                                            name={data.name}
                                                            about={data.about} />
                                                    </div>
                                                )
                                            })

                                        )
                                }
                            </div>
                            {/* <div className="row mt-5">
        <div className="col text-center">
        <div className="block-27">
        <ul>
        <li><a href="#">&lt;</a></li>
        <li className="active"><span>1</span></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">&gt;</a></li>
        </ul>
        </div>
        </div>
        </div> */}
                        </div>
                    </section>




                </div>
            </div>
            {/* <!-- end of react_pageComponent  --> */}

        </>
    )
}


export default Schools