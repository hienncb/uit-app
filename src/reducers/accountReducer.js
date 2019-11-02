import { SAVE_ACCOUNT } from '../actions/ActionTypes';

const initialState = {
    username: '',
    password:'',
    isLoading: true,
    flag: false
};

const accountReducer = (state = initialState, action) => {
  switch(action.type) {
    case SAVE_ACCOUNT:
      //state = action.data
      state = action.payload
      return {
        //count: count + 1,
        isLoading: false,
         ...state
      }
    default:
      return state;
  }
}

export default accountReducer;