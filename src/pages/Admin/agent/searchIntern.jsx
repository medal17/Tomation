import { Link, useHistory } from "react-router-dom"
import DashboardHeader from "../../../component/DashboardHeader"
import { useEffect, useState } from 'react'
import axios from "axios"
import dataService from '../../../services/data.service'
import { useDispatch } from "react-redux";
import { setMessage } from "../../../redux/actions/messageAction"

const mainURl = 'https://emeticslearning-backend.herokuapp.com/'

const SearchIntern = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [allAlumni, setAllAlumni] = useState([]);
    const [ListOfCourseNames, setListOfCourseNames] = useState([])
    const history = useHistory()
    // this state is the manipulated data if the use filters by select or search bar
    const [filterData, setFilterData] = useState([])
    const dispatch = useDispatch()
    const handleSendingRequest = (studentID) => {
        // this will trigger sending Email to the Intrested Body
        console.log(studentID)
        axios.post(mainURl + 'api/admin_intrestedInStudent/', { "student": studentID }, { headers: dataService.authHeader() })
            .then(response => {
                // this will create a request forIntern Instance in the back end
                // console.log(response.data)
                dispatch(setMessage("We have recieved your request!", true))

            })
            .catch((error) => {
                console.log(error)
                let message;
                try {
                    message = (error.response.data.message || error.response.data.message)
                } catch {
                    message = error.message
                }


                dispatch(setMessage(message, false))
            })
    }

    const filterByCourse = (course_name) => {
        // this filter using the drop down
        if (course_name == 'all') {
            setFilterData([...allAlumni])

        }
        else {

            setFilterData([...allAlumni.filter(data => data.course__name == course_name)])
        }

    }

    const filterByStudentName = (student_name) => {

        setFilterData([...allAlumni.filter(data => data.student__user__first_name.includes(student_name) || data.student__user__last_name.includes(student_name))])
    }





    useEffect(() => {
        axios.get(mainURl + 'api/all_alumni/', {

            headers: dataService.authHeader()
        }).then((response) => {
            //  console.log(response.data.data)
            setAllAlumni(response.data.data)
            setFilterData(response.data.data)

            //  this will be the drop down
            setListOfCourseNames([...new Set(response.data.data.map(data => data.course__name))])
            setIsLoading(false)
        }).catch((error) => {
            console.log(error)
            let message;
            try {
                message = (error.response.data.message || error.response.data.message)
            } catch {
                message = error.message
            }
            setIsLoading(false)

            dispatch(setMessage(message, false))
        })
    }, [])

    return (

        <>
            <DashboardHeader title='Search for Interns' history={history} />





            <div class="container table-responsive py-5">
                <div >


                    <div className="input-group mb-3" style={{ width: "80%" }}>
                        <div className="input-group-prepend">
                            <label className="input-group-text" for="inputGroupSelect01">Search by courses</label>
                        </div>


                        <select className="custom-select" id="inputGroupSelect01"
                            onClick={(e) => filterByCourse(e.target.value)}
                        >
                            <option value="all">All</option>
                            {isLoading ? <option value="">...</option>
                                :
                                (ListOfCourseNames.length == 0) ?
                                    <p>No Data Found</p>
                                    :

                                    ListOfCourseNames.map((course__name, index) => {


                                        return (
                                            <option value={course__name} key={index}>{course__name}</option>
                                        )
                                    })
                            }

                        </select>
                    </div>


                    <div className="form-group">
                        <input type="search"
                            onChange={(e) => filterByStudentName(e.target.value)}
                            placeholder="search by student name"
                            className="form-control" style={{ width: "40%" }} />
                    </div>
                </div>
                <table class="table table-bordered ">
                    <thead class="thead-dark">
                        {/* this the header of the table*/}
                        <tr>
                            {/* <th scope="col">#</th> */}
                            <th scope="col">Course Title</th>
                            <th scope="col">Student Name</th>
                            <th scope="col">View Student Detail</th>
                            <th scope="col">Send Request </th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            isLoading ? <p>Loading.. please wait</p>
                                :

                                (filterData.length == 0) ? <p>No Data Found</p>
                                    :
                                    filterData.map((data, index) => {


                                        return (
                                            <tr key={index}>
                                                <th scope="row" >{data.course__name}</th>
                                                <td>{data.student__user__first_name + ' ' + data.student__user__last_name}</td>
                                                <td><Link className="btn" to={`/student/${data.student__id}`}>View</Link></td>
                                                <td><button className="btn" onClick={(e) => handleSendingRequest(data.student__id)}>Send</button></td>
                                            </tr>
                                        )
                                    })
                        }



                    </tbody>
                </table>
            </div>





        </>
    )
}

export default SearchIntern