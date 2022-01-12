import { combineReducers } from "redux";
import user from "./userAuthReducer";
import message from "./messageReducer";
import courses from "./coursesReducer"
import schoolDetail from "./schoolDetailReducer";

const reducer = combineReducers({
    user,
    message,
    courses,schoolDetail
})

export default reducer