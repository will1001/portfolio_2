import { combineReducers } from "redux";
import stylesParameterReducers from "./StylesParameterReducers";

const rootReducer = combineReducers({
  StylesParameter: stylesParameterReducers
});

export default rootReducer;
