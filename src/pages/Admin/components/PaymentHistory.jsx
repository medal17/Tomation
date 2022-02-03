
import axios from "axios";
import { useEffect, useState } from "react"
import { setMessage } from "../../../redux/actions/messageAction";
import { useDispatch } from "react-redux";
import dataService from "../../../services/data.service";
import DashboardNavHeader from "../../../component/DashboardNav";
import Footer from "../../../component/footer";
const PaymentHistory = () => {

   const [isLoading, setIsLoading] = useState(true);
   const [paymentHistory, setPaymentHistory] = useState(false);

   const dispatch = useDispatch();
   useEffect(() => {


      axios.get('https://emeticslearning-backend.herokuapp.com/api/paymentHistory/', {
         headers: dataService.authHeader()
      })
         .then(response => {
            console.log('This from Payment', response.data)
            setPaymentHistory(response.data.data)
            setIsLoading(false)
         })
         .catch(error => {
            let errorMessage;
            try {
               errorMessage = error.response.message

            }

            catch {
               errorMessage = error.message || error.response.detail
            }
            dispatch(setMessage(errorMessage, false))
            setIsLoading(false)

         })

   }, [])
   return (
      <div className="container-fluid">
         <DashboardNavHeader />
         <br/>
         <br/>
         <br/>
         <div className="row">
            <div className="white_shd full margin_bottom_30">
               <div className="full graph_head">
                  <div className="heading1 margin_0">
                     <h2>Order History</h2>
                  </div>
               </div>
               <div className="table_section padding_infor_info">
                  <div className="table-responsive-sm">
                     {
                        isLoading ? <p>Loading...please wait..</p>
                           :
                           (
                              <table className="table">
                                 <thead>
                                    <tr>
                                       <th>#</th>
                                       <th>Course Name</th>
                                       <th>is Successfull</th>
                                       {/* <th>Example</th> */}
                                    </tr>
                                 </thead>
                                 <tbody>

                                    {(paymentHistory &&

                                       paymentHistory.map(({ course__name, is_successfull }, index) => {

                                          return (
                                             <tr>
                                                <td>1</td>
                                                <td>{course__name}</td>
                                                <td>{is_successfull ? "Yes" : "No"}</td>
                                             </tr>
                                          )

                                       })
                                    )}

                                 </tbody>
                              </table>
                           )
                     }
                  </div>
               </div>
            </div>
            <p className="small_text">You do not have any orders yet</p>
         </div>
         <Footer />
      </div>
   )
}

export default PaymentHistory