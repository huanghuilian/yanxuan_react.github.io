import React, {Component} from 'react'
import ShiwuTop from '../../Components/ShiwuTop/ShiwuTop'
import AlertTip from '../../Components/AlertTip/AlertTip'
import {NavLink,Switch,Route} from 'react-router-dom'

import PwdLogin from './PwdLogin'
import SysLogin from './SysLogin'
import './Login.styl'
/* <AlertTip style={{display:'none'}}/>*/
export default class Login extends Component {
  state={

  }
  loginSuccess = ()=>{
    this.props.history.replace('/profile')
  }
  handleSubmit = (ev)=>{
    ev.preventDefault()
  }
  render() {

    return (
      <div>
        <ShiwuTop/>
        <div className="loginContainer">
          <div className="loginInner">
            <div className="login_header">
              <h2 className="login_logo">登录注册</h2>
              <div className="login_header_title">
                <NavLink to="/login/sysLogin" className={this.props.location.pathname==='/login/sysLogin'?'on':'off'}>短信登录
                </NavLink>
                <NavLink to="/login/pwdLogin" className={this.props.location.pathname==='/login/pwdLogin'||this.props.location.pathname==='/login'?'on':'off'}>密码登录
                </NavLink>
              </div>
            </div>
            <div className="login_content">
              <form onSubmit={this.handleSubmit}>
                <Switch>
                  <Route path='/login/sysLogin' component={SysLogin}></Route>
                  <Route path='/login/pwdLogin' component={PwdLogin}></Route>
                  <Route component={PwdLogin}></Route>
                </Switch>
              </form>
              <NavLink to="/login" className="about_us">关于我们</NavLink>
            </div>
            <span href="javascript:" className="go_back">
    <i className="iconfont icon-jiantou2"></i>
  </span>
          </div>
        </div>
      </div>
    )
  }
}