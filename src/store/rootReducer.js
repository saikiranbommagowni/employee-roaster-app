import { combineReducers } from "redux";
import employeesReducer from '../slices/employeesSlice';

const rootReducer =combineReducers({
    employees: employeesReducer
});

export default rootReducer;