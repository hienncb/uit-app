import {combineReducers} from 'redux';
import accountReducer from './accountReducer'
import deadlineReducer from './deadlineReducer'

const rootReducer = combineReducers({
    accountReducer,
    deadlineReducer

});

export default rootReducer;
