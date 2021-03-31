import editIdReducer from "./editIdReducer";
import toggleFormShowReducer from "./toggleFormShowReducer";
import peopleReducer from "./peopleReducer";
import formReducer from "./formReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  editIdReducer,
  toggleFormShowReducer,
  peopleReducer,
  formReducer
});

export default rootReducer;
