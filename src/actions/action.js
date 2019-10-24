import * as types from './ActionTypes';
import * as link from '../api/ApiLink';
import callApi from '../api/ApiCaller';
import Account from '../models/Account';




export const responseLogin=(data)=>{ //POST StudenID && Reponse Data from Student ID
  return dispatch=>{
      return callApi(link.login,'POST',{data:data}).then(res=>{
          console.log('data tu api: ', res.data);
          dispatch(saveAccount(res.data));
      })
  }
}

export const saveAccount = (data) => {
  return {
    type: types.SAVE_ACCOUNT,
    payload: data
  }
}


export const responseDeadline=(data)=>{ //POST StudenID && Reponse Data from Student ID
  return dispatch=>{
      return callApi(link.deadline,'POST',{data:data}).then(res=>{
          //console.log('data tu api: ', res.data);
          dispatch(saveDeadline(res.data));
      })
  }
}

export const saveDeadline = (data) => {
  return {
    type: types.SAVE_DEADLINE,
    payload: data
  }
}


