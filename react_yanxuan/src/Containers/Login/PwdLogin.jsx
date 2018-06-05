import React,{Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import './Login.styl'
import {pwdLoginMethod} from '../../redux/actions'
import AlertTip from '../../Components/AlertTip/AlertTip'
class PwdLogin extends Component{
  state = {
    isShowPwd:false,
    uName:'',//用户名
    password:'',//密码
    captcha:'',//验证码
    errMsg:'',//错误提醒信息
    user:{}
  }
  static propTypes = {
    pwdLoginMethod:PropTypes.func.isRequired,
    user:PropTypes.object.isRequired,
}
componentWillReceiveProps(newProps){
    this.setState({
      user:newProps.user
    })
}
  clearErrMsg = ()=>{
    this.setState({
      errMsg:''
    })
  }
  handleShowPwd = ()=>{
    const {isShowPwd} = this.state
    this.setState({
      isShowPwd:!isShowPwd
    })
  }
  //受控表单数据：自动收集用户名密码，验证码的数据
  handleDataCollected(name,event){
    const val = event.target.value
    console.log(val)
    this.setState({
      [name]:val
    })
  }
  //提交表单收集的登录信息
  handlePwdLogin = ()=>{
    const {uName,password,captcha} = this.state
    if (!uName.trim()){//进入该判断表示用户名输入为空
      this.setState({
        uName:'',//用户名
        password:'',//密码
        captcha:'',//验证码
        errMsg:'用户名不能为空'
      })
      return
    }
    if (!password.trim()) {
      this.setState({
        captcha:'',//验证码
        errMsg:'密码不能为空'
      })
      return
    }
    if (!captcha.trim()) {
      this.setState({
        errMsg:'验证码不能为空'
      })
      return
    }else if(!(/^[a-zA-Z0-9]{4}$/g.test(captcha))){
      this.setState({
        errMsg:'验证码输入有误，请重新输入'
      })
      return
    }else if (captcha!=='6EF8'){
      this.setState({
        captcha:'',//验证码
        errMsg:'验证码输入有误，请重新输入'
      })
      return
    }
    //分发异步action提交登录请求
    const userInfo = {uName,password,captcha}
    this.props.pwdLoginMethod(userInfo,()=>{
      const {user} = this.state
      if (user.errorMsg) {
        this.setState({
          errMsg:user.errorMsg
        })
        return
      }
      console.log(user)
      if (user.userId){
        console.log('****')
        this.props.history.replace('/home')
      }
    })
  }
  render(){
    const {isShowPwd,password,errMsg,captcha} = this.state
    return (
      <div className={this.props.location.pathname==='/login/pwdLogin'||this.props.location.pathname==='/login'?'on':''}>
        <section>
          <section className="login_message">
            <input type="text" maxLength="11" placeholder="手机/邮箱/用户名"
                   onChange={val => this.handleDataCollected('uName',val)}/>
          </section>
          <section className="login_verification">

            <input type="password" placeholder="密码" value={password}
                   style={{display:isShowPwd?'none':'block'}}
                   onChange={val=>this.handleDataCollected('password',val)}/>
            <input type="text" placeholder="密码" value={password}
                   style={{display:!isShowPwd?'none':'block'}}
                   onChange={val=>this.handleDataCollected('password',val)}/>
            <div className={isShowPwd?'switch_button on':'switch_button'} onClick={this.handleShowPwd}>
              <div className={isShowPwd?'switch_circle right':'switch_circle'}>
              </div>

              <span className="switch_text">{isShowPwd?'abc':''}</span>
            </div>
          </section>
          <section className="login_message">
            <input type="text" maxLength="11" value={captcha} placeholder="验证码" onChange={val=>this.handleDataCollected('captcha',val)}/>
            <div ref="captcha" className="get_verification captcha"
                alt="captcha"/>
          </section>
        </section>
        <input type="submit" value="登录" className="login_submit" onClick={this.handlePwdLogin}></input>
        <AlertTip errMsg={errMsg} clearErrMsg={this.clearErrMsg}/>
      </div>
    )
  }
}

export default connect(
  (state)=>({user:state.users}),
  {pwdLoginMethod}
)(PwdLogin)