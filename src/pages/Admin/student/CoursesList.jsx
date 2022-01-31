import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { setMessage } from "../../../redux/actions/messageAction";
import dataService from "../../../services/data.service"
import { Link, useHistory, useParams } from 'react-router-dom'
import DashboardHeader from "../../../component/DashboardHeader";
import PaymentPage from "../../../component/paymentPage";
import Footer from "../../../component/footer";
import MainHeader from "../../../component/mainHeader";


let MainUrl = 'https://emeticslearning-backend.herokuapp.com'

const CoursesList = () => {
  const [tableData, setTableData] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showPaymentModal, setShowPaymentModel] = useState(false);

  const dispatch = useDispatch();

  const history = useHistory();
  const { filterCourseBy } = useParams();

  console.log(tableData)
  let FormToRender = null;
  let endPoint = '';
  if (filterCourseBy == 'Ongoing') {
    endPoint = '/api/filter_course_by_status/ongoing/'
    FormToRender = (
      <>
        <tr>
          <th scope="col">Course Outline</th>
          <th scope="col">Course Title</th>
          <th scope="col">Date</th>
          <th scope="col">Start Time</th>
          <th scope="col">End Time</th>
          <th scope="col">Download Course Material</th>
          <th scope="col">Download Assignment</th>
          <th scope="col">Upload Assignment</th>

          <th scope="col">Join Training</th>

        </tr>
      </>)
  }

  else if (filterCourseBy == 'Completed') {
    endPoint = '/api/filter_course_by_status/completed/'

    FormToRender = (
      <>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Course Outline</th>
          <th scope="col">Download Certificate</th>
          <th scope="col">Date of Completion</th>
        </tr>
      </>)
  }




  else if (filterCourseBy == 'Open') {
    endPoint = '/api/filter_course_by_status/open/'

    FormToRender = (
      <>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Start Date</th>
          <th scope="col">End Date</th>

          <th scope="col">Course Outline</th>
          <th scope="col">Payment</th>

        </tr>
      </>)
  }

  useEffect(() => {
    // console.log("Effect")
    axios.get(MainUrl + endPoint, {
      headers: dataService.authHeader()
    }).then(resp => {

      // console.log()
      setIsLoading(false)
      setTableData(resp.data.data)
    })
      .catch(error => {
        setIsLoading(false)
        let message = undefined;
        try {
          message = error.response.data.detail
        }
        catch {
          message = error.message

        }
        dispatch(
          setMessage(message, false)
        )

      })
  }, [])



  const handleSubmitingAssigment = (e, courseID) => {
    console.log(courseID)
    // this handles submiting the assginment file
    const formData = new FormData()
    let Assignmentdata = e.target.files[0]
    formData.append('student_assignment', Assignmentdata)

    axios.post(MainUrl + `/api/student_upload_assignment/${courseID}/`, formData, {

      headers: dataService.authHeader(),
    })

      .then(response => {

        dispatch(setMessage(response.data.message, true))
      })
      .catch(error => {
        let message = ''
        try {
          message = (error.response.data.message || error.response.data.detail)
        }
        catch {
          message = error.message
        }



        dispatch(setMessage(message, false))
      })


  }


  return (

    <>

      {/* filterCourseBy is Gotten from the useParams  */}
      <DashboardHeader title={filterCourseBy} history={history} />
      <MainHeader />
      <div class="container table-responsive table-striped py-5 bg-white rounded">
        <table class="table rounded">
          <thead class="thead-dark rounded">
            {/* this the header of the table*/}
            {FormToRender}
          </thead>
          <tbody>


            {
              isLoading ?
                <tr >
                  <td colSpan={9}>
                    <div className=' bg-dark loading row bg-white mt-5 col-12' style={{ borderRadius: '20px' }}>
                      <div class="decsription pt-5 col-md-12 " style={{ width: '100%' }}>

                      </div>
                      <div className='row col-12'>
                        <div class="content col-12">
                          <h4></h4>
                          <h4></h4>
                          <h4></h4>
                          <h4></h4>
                          <h4></h4>
                          <h4></h4>
                          <h4></h4>
                          <h4></h4>
                          <h4></h4>

                        </div>

                      </div>
                    </div>
                  </td>
                </tr>
                :
                tableData ?
                  tableData.map((data, index) => {


                    if (filterCourseBy == 'Ongoing') {
                      return (
                        <tr>
                          <th scope="row" key={index}>{index + 1}</th>
                          <td>{data.name}</td>
                          {/* <td>{data.date ? data.date : ''}</td> */}
                          <td>{data.start_date}</td>
                          <td>{data.end_date}</td>
                          {
                            data.assignmentFIle == "" ?
                              <td>No file at the moment</td>
                              :
                              <td><Link onClick={() => window.location.href = data.assignmentFIle} className="btn" >Download Now</Link></td>
                          }
                          {
                            data.assignmentFIle == "" ?
                              <td>No file at the moment</td>
                              :
                              <td><Link onClick={() => window.location.href = data.assignmentFIle} className="btn" >Download Now</Link></td>
                          }
                          {/* form */}
                          <td><input type='file' className="btn" placeholder="Upload Now" onChange={(e) => handleSubmitingAssigment(e, data.id)} /> </td>

                          <td><a href={data.is_live ? data.zoom_class_link : "#"}>
                            {/* <p>Class Not live yet</p> */}

                            {data.is_live ? "attend class" : "Check back not Live yet"}
                          </a></td>
                        </tr>
                      )

                    }


                    if (filterCourseBy == 'Completed') {
                      return (
                        <tr>
                          <th scope="row" key={index}>{index + 1}</th>
                          <td></td>
                          <td><Link to={`/course-detail/${data.course_id}`}>View Course Outline</Link></td>
                          <td><Link className="btn" onClick={(e) => window.location.href = data.certificate_image} >Download Now</Link></td>
                          <td>{data.end_date ? data.end_date : ''}</td>

                        </tr>
                      )
                    }

                    if (filterCourseBy == 'Open') {
                      return (
                        <>
                          {showPaymentModal && <PaymentPage courseId={data.id} setShowPaymentModel={setShowPaymentModel} />}

                          <tr>
                            <th scope="row" key={index}>{index + 1}</th>
                            <th>{data.name}</th>
                            <th >{data.start_date}</th>
                            <th >{data.end_date}</th>
                            <td><Link to={`/course-detail/${data.id}`}>View Course Outline</Link></td>

                            <th ><button className="btn" onClick={e => { e.preventDefault(); setShowPaymentModel(true) }}>Pay now</button></th>

                          </tr>

                        </>
                      )
                    }


                  })
                  : <p>You Dont have Any Ongoing Course at the moment</p>
            }




          </tbody>
        </table>
      </div>
      <Footer className='pt-5' />
    </>
  )
}

export default CoursesList