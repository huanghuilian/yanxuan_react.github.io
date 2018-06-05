import {
  RECEIVE_HEADNAV,
  RECEIVE_USERINFO,
  ACK_USER_SUCCESS,
  ACK_USER_FAIL
}from './action-types'
import {ReqHeadNav,pwdLogin,smsLogin} from '../api'
const receiveHeadNav = (headNavList)=>({type:RECEIVE_HEADNAV,data:headNavList})
const receive_userinfo = ({userInfo})=>({type:RECEIVE_USERINFO,data:userInfo})
const ack_user_fail = (errMessage)=>({type:ACK_USER_FAIL,errMessage})

//用于获取首页头部导航数据的异步action
export function getHeadCateList() {
  return async (dispatch)=>{
    const res = await ReqHeadNav()
    if (res.code===0){
      dispatch(receiveHeadNav(res.data))
    }
  }
}
//用户名密码登录的异步action
export const pwdLoginMethod =(pwdLogin_userInfo,callback)=> {
  return async (dispatch)=>{
    //发送异步请求的验证用户登录
    const result = await pwdLogin() //成功的数据：{code:0,data:Logindata.users}，由于没有后台，只能用此方法进行模拟一下
    /*"users":[
    {"userId":2018052901,"userName":"aaa","pwd":"123"},
    {"userId":2018052902,"userName":"bbb","pwd":"123"},
    {"userId":2018052903,"userName":"ccc","pwd":"123"}],*/
    if (result.code===0){//标识获取数据成功
      const users = result.data
      const userInfo = users.find((user,index)=>{
        const {userName,pwd} = user
        const {uName,password} = pwdLogin_userInfo
        return userName===uName&pwd===password
      })
      dispatch(receive_userinfo({userInfo}))
      callback&&callback()
    }else {
      const errMessage = '登录失败！！！'
      dispatch(ack_user_fail(errMessage))
      callback&&callback()
    }
  }
}

//短信登录的异步action
export const sysLogin = (sysLogin_userInfo,callback)=> {
  return async (dispatch)=>{
    //发送异步请求的验证用户登录
    const result = await smsLogin() //成功的数据：{code:0,data:Logindata.users}，由于没有后台，只能用此方法进行模拟一下
    /*  "phoneUsers":[
    {"userId":2018052904,"phone":15210671942, "code":123456},
    {"userId":2018052905,"phone":15259926932,"code":123123},
    {"userId":2018052906,"phone":13328942690,"code":456456}
  ]*/
    if (result.code===0){//标识获取数据成功
      const phoneUsers = result.data //phoneUsers
      const userInfo = phoneUsers.find((phoneUser,index)=>{
        const {phone,code} = phoneUser
        const {tel,ack_code} = sysLogin_userInfo
        return phone*1===tel*1&code*1===ack_code*1
      })
      dispatch(receive_userinfo({userInfo}))
      callback&&callback()
    }else{
      const errMessage = '登录失败！！！'
      dispatch(ack_user_fail(errMessage))
      callback&&callback()
    }
  }
}
