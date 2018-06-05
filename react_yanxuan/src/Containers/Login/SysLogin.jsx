import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import './Login.styl'
import AlertTip from '../../Components/AlertTip/AlertTip'
import {sysLogin} from '../../redux/actions'
class SysLogin extends Component{
  state = {
    isShowPwd:false,
    tel:'',//手机号
    ack_code:'',//手机验证码
    errMsg:'',//错误提醒信息
    user:{},
    isDisabled:true
  }
  static propTypes = {
    user:PropTypes.object.isRequired,
    sysLogin:PropTypes.func.isRequired
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
  handleDataCollected(name,event){
    const val = event.target.value
    console.log(val)
    this.setState({
      [name]:val
    })
  }
  handleSysLogin = ()=>{
    const {tel,ack_code} = this.state
    if (!tel.trim()) {
      this.setState({
        errMsg:'手机号不能为空'
      })
    }
    if (!ack_code.trim()) {
      this.setState({
        errMsg:'验证码不能为空'
      })
    }else if (!(/^\d{6}$/gi.test(ack_code))){
      this.setState({
        errMsg:'验证码错误，重新输入！！！'
      })
    }
    //发送ajax请求
    this.props.sysLogin({tel,ack_code},()=>{
      const {user} = this.state
      if (user.errorMsg) {
        this.setState({
          errMsg:user.errorMsg
        })
        return
      }
      if (user.userId){
        this.props.history.replace('/home')
      }
    })
  }
  render(){
    const {errMsg} =this.state
    return (
      <div className={this.props.location.pathname==='/login/sysLogin'?'on':''}>
        <section className="login_message">
          <input type="tel" maxLength="11" placeholder="手机号"
                 onChange={(val)=>this.handleDataCollected('tel',val)}/>
          <button className="get_verification right_phone_number">获取验证码</button>
          <button disabled="disabled" className="get_verification">获取验证码</button>
        </section>
        <section className="login_verification">
          <input type="text" maxLength="8" placeholder="验证码"
                 onChange={(val)=>this.handleDataCollected('ack_code',val)}/>
        </section>
        <section className="login_hint">
          温馨提示：未注册严选帐号的手机号，登录时将自动注册，且代表已同意
          <Link to="/login">《用户服务协议》</Link>
        </section>
        <input type="submit" value="登录" className="login_submit" onClick={this.handleSysLogin}></input>
        <AlertTip errMsg={errMsg} clearErrMsg={this.clearErrMsg}/>
      </div>
    )
  }
}
export default connect(
  (state)=>({user:state.users}),
  {sysLogin}
)(SysLogin)