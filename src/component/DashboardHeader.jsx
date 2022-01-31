
import { FaArrowLeft } from 'react-icons/fa';




const DashboardHeader = ({ title, history }) => (

    // let history = useHistory();

    <div className="col-md-12" style={{ marginTop: "-60px" }}>
        <div className="page_title row">
            <FaArrowLeft size={20} onClick={() => history.goBack()} className='col-2' /> &nbsp;

            <h2 className='col-9'>{title} Courses</h2>
        </div>
    </div>
)


export default DashboardHeader