import actionTypes from "../contants/actionTypes"
import authService from "../../services/auth.service";



export const register = (email, firstName, lastName, password, user_type, callback) => (dispatch) => {
  return authService.register(email, firstName, lastName, password, user_type).then(
    (response) => {
      callback(response.data)

      console.log(response.data)
      //   this Means the Request Went Well
      dispatch({
        type: actionTypes.REGISTER_SUCCESS,
        payload: { user: response.data }
      });


      dispatch({
        type: actionTypes.SET_MESSAGE,
        payload: { message: response.message, isSuccess: true }
      });

      return Promise.resolve();
    },
    //   so if there was some kind of error
    (error) => {
      console.log(error.message)
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: actionTypes.REGISTER_FAIL,
      });

      dispatch({
        type: actionTypes.SET_MESSAGE,
        payload: { message: message, isSuccess: false }

      });

      return Promise.reject();
    }
  );
};



export const login = (email, password, callback) => (dispatch) => {


  return authService.login(email, password)
    .then((response) => {
      console.log(response)
      callback(response)

      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payload: { user: response.data }
      })

      dispatch({
        type: actionTypes.SET_MESSAGE,
        payload: { message: response.message, isSuccess: true }

      })
      return Promise.resolve();
    }


      ,

      (error) => {
        console.log(error.message)
        const message = error.response.data.message;

        dispatch({
          type: actionTypes.LOGIN_FAIL,
        });

        dispatch({
          type: actionTypes.SET_MESSAGE,
          payload: { message: message, isSuccess: false }

        });

        return Promise.reject();
      }
    )
}


export const logout = () => (dispatch) => {


  return authService.logout()
    .then((response) => {

      dispatch({
        type: actionTypes.LOGOUT,
        payload: { user: response.data }
      })

      dispatch({
        type: actionTypes.SET_MESSAGE,
        payload: { message: response.message, isSuccess: true }

      })
      return Promise.resolve();
    }


      ,

      (error) => {
        console.log(error.message)
        const message = error.response.data.message;

        dispatch({
          type: actionTypes.LOGIN_FAIL,
        });

        dispatch({
          type: actionTypes.SET_MESSAGE,
          payload: { message: message, isSuccess: false }

        });

        return Promise.reject();
      }
    )
}








export const isLoggedIN = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  // console.log(user)

  return user ? {
    type: actionTypes.REGISTER_SUCCESS,
    payload: { "user": user }
  } : {
    type: actionTypes.REGISTER_FAIL
  }
}
