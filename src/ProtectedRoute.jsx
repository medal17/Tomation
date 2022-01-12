import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMessage } from "./redux/actions/messageAction";

const SecureRoute=({ allowUserType,component: Component, ...restOfProps })=> {
  const user = JSON.parse(localStorage.getItem('user'));
  const dispatch = useDispatch();
  return (
    <Route
      {...restOfProps}
      render={(props) =>{ 
        
        if(user && user.data.token){
          // now that we know this user is logged in let check what kind of Page he is accessing

          if (allowUserType!=user.data.user_type){
            dispatch(setMessage(`unAuthorized`,false))
            return <Redirect to="/signin" />
          }
          return  <Component {...props} />
          
        
        }
        else{
          dispatch(setMessage("You need to be Logged in",false))
          return <Redirect to="/signin" />
        } 
      }
      }
    />
  );
}

export default SecureRoute;