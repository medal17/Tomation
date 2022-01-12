import Nav from "../../component/nav"
import Footer from "../../component/footer"
import dataService from "../../services/data.service"
import { useHistory } from "react-router"
const InterPage = ()=>{

    const history = useHistory()
    let user = JSON.parse(localStorage.getItem('user'))
    if(!user){
        user={"data":{'user_type':"nothing"}}
    }
    return (
        <>
        <Nav />
        <section className="ftco-section">
<div className="container">
<div className="row g-lg-5">
<div className="col-lg-12 blog-single">
  <h2 className="mb-3">
    E-learning Intern package 
    <div className="paymentType__btn">
      {user.data.user_type=='hirer'?
    <button className='btn'
    onClick={()=>{
      // dataService.getUsertype()==
        history.push('/employer')

    }}
    >Login to Your dashboard</button>:
      <button className='btn'
      onClick={()=>{
        // dataService.getUsertype()==
          history.push('/signup')

      }}
      >Create Employer Account</button> 
    }
      
    </div>
    </h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.</p>
<p>
{/* <img src="images/xbg_1.jpg.pagespeed.ic.LEZ7WXICMQ.jpg" alt="" className="img-fluid" /> */}
</p>
<p>Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!</p>

<p>Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.</p>



</div> 

</div>
</div>
</section> 
<Footer/>
        </>
    )
}

export default InterPage