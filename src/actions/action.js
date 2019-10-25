import * as types from './ActionTypes';
import * as link from '../api/ApiLink';
import callApi from '../api/ApiCaller';
import Account from '../models/Account';




export const responseLogin=(data)=>{ //POST StudenID && Reponse Data from Student ID
  return dispatch=>{
    //console.log('data resques: ', data);
      return callApi(link.login,'POST',{data:data}).then(res=>{
      //    console.log('data tu api: ', res.data);
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
        //  console.log('data tu api: ', res.data);
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



export const responseEschedule=(student_id)=>{ //POST StudenID && Reponse Data from Student ID
  return dispatch=>{
    //console.log('data resques: ', student_id);
      return callApi(link.eschedule,'POST',{student_id:student_id}).then(res=>{
         // console.log('data tu api: ', res.data);
          dispatch(saveEschedule(res.data));
      })
  }
}

export const saveEschedule = (data) => {
  return {
    type: types.SAVE_ESCHEDULE,
    payload: data
  }
}