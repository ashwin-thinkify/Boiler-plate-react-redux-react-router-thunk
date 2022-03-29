import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";
import emailReducer from './emailReducer';

export default combineReducers({ todos, visibilityFilter,emailReducer });
