import { SAVE_DEADLINE } from '../actions/ActionTypes';

const initialState = {
    data:'',
    isLoading: false
};

const deadlineReducer = (state = initialState, action) => {
  switch(action.type) {
    case SAVE_DEADLINE:     
        return {
            ...state
        };
       
    default:
      return state;
  }
}

export default deadlineReducer;