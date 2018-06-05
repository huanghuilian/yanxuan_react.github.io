import {combineReducers} from 'redux'
import {
  RECEIVE_HEADNAV,
  RECEIVE_USERINFO,
  ACK_USER_SUCCESS,
  ACK_USER_FAIL
}from './action-types'
const iniHeadNav = []
function m_HeadNav(state=iniHeadNav,action){
  switch (action.type){
    case RECEIVE_HEADNAV:
      const {data} = action
      return data
    default:
      return state
  }
}
const initUser = {
  userId:'',
  userName:'',
  password:'',
  phone:'',
  errorMsg:''
}
function users(state=initUser,action){
  switch (action.type){
    case RECEIVE_USERINFO:
      const {data}=action//userInfo
      const {pwd,userId,userName} = data
      return {...initUser,userId:userId,password:pwd,userName:userName}
    case ACK_USER_FAIL:
        return {...initUser,errorMsg:action.errMessage}
    default:
      return state
  }
}
export default combineReducers({
  m_HeadNav,
  users
})