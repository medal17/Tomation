import actionTypes from "../contants/actionTypes"
import authService from "../../services/auth.service";



export const register = (email, firstName, lastName, password, agentCode, isCorper,state, callUp, user_type, callback) => (dispatch) => {
  return authService.register(email, firstName, lastName, password, agentCode,isCorper, state, callUp, user_type).then(
    (response) => {
      callback(response)
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
      callback(error.message)
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


export const registerAgent = (email, firstName, lastName, password, user_type, callback) => (dispatch) => {
  return authService.registerAgent(email, firstName, lastName, password, user_type).then(
    (response) => {
      //   this Means the Request Went Well
      callback(response)
      // window.location.relhref('/agent')

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
      callback(error.message)
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
      // console.log(response)
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
        callback(error.message)
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

export const uploadImage = (data,config, callback) => (dispatch) => {
  // alert("yeah")
  return authService.uploadImage(data, config).then(
    (response) => {
      //   this Means the Request Went Well
      dispatch({
        type: actionTypes.REGISTER_SUCCESS,
        payload: { user: response.data }
      });
      callback(response)

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
