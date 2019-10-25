import { SAVE_ACCOUNT } from '../actions/ActionTypes';

const initialState = {
    username: '',
    password:'',
    isLoading: false,
    flag: true
};

const accountReducer = (state = initialState, action) => {
  switch(action.type) {
    case SAVE_ACCOUNT:
      //state = action.data
      state = action.payload
      return {
       
        isLoading: true,
         ...state
      }
    default:
      return state;
  }
}

export default accountReducer;