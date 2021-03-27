import editIdReducer from "./editIdReducer";
import formShowReducer from "./formShowReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  editIdReducer,
  formShowReducer
});

export default rootReducer;
