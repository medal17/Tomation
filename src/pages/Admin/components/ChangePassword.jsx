

const ChangePassword = ()=>{


    return (

        <div class="midde_cont">
        <div class="container-fluid">
         
           {/* <!-- row --> */}
           <div class="row column1">
              {/* <!-- <div class="col-md-0"></div> --> */}
              <div class="col-md-11" style={{"margin":"0 auto"}}>
                 <div class="white_shd full margin_bottom_30 " >
                    <div class="full graph_head">
                       <div class="heading1 margin_0">
                          <h2>Change Password</h2>
                       </div>
                    </div>
                    <div class="full price_table padding_infor_info">
                       <div class="row">
                          {/* <!-- user profile section --> 
                          <!-- profile image --> */}
                          <div class="col-lg-12">
                             <div class="full">
                                {/* <!-- <div class="profile_img"><img width="180" class="rounded-circle" src="../images/user_img.jpg" alt="#" /></div> --> */}
                                <div class="profile_contant">
                                   <div class="contact_inner">
                                   
                                      
                                      <div class="form-group">
                                         <label for="changePassword">Change Password</label>
                                         <input type="password" class="form-control" id="changePassword" aria-describedby="changePassword" placeholder="***" />
                                         {/* <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> --> */}
                                      </div>

                                      <div class="form-group">
                                         <label for="Retypepassword"><strong>Retype Password</strong></label>
                                         <input type="password" class="form-control" id="Retypepassword" aria-describedby="Retypepassword" placeholder="***" />
                                         {/* <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> --> */}
                                      </div>

                                      
                                      <div class="form-group">
                                         <label for="current-tpassword">Current Password</label>
                                         <input type="password" class="form-control" id="current-tpassword" aria-describedby="current-tpassword" placeholder="***" />
                                {/* /      <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> --> */}
                                      </div>

                                      
                                      

                                      <div class="button_block"><button type="button" class="btn cur-p btn-outline-success">Success</button></div>



                                   
                                </div>
                             </div>
                             {/* <!-- end user profile section --> */}
                          </div>
                       </div>
                    </div>
                 </div>
                 <div class="col-md-2"></div>
              </div>
              {/* <!-- end row --> */}
           </div>
       
        </div>
        {/* <!-- end dashboard inner --> */}
     </div>
        
     </div>
    )
}


export default ChangePassword