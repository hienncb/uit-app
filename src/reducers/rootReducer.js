import {combineReducers} from 'redux';
import accountReducer from './accountReducer';
import deadlineReducer from './deadlineReducer';
import escheduleReducer from './escheduleReducer';


const rootReducer = combineReducers({
    accountReducer,
    deadlineReducer,
    escheduleReducer
});

export default rootReducer;
