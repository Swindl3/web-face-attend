import {combineReducers} from 'redux';
import AttendReducer from './AttendReducer'

const rootReducer = combineReducers({
    attends:AttendReducer
});

export default rootReducer;