import editIdReducer from "./editIdReducer";
import formShowReducer from "./formShowReducer";
import peopleReducer from "./peopleReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  editIdReducer,
  formShowReducer,
  peopleReducer
});

export default rootReducer;
