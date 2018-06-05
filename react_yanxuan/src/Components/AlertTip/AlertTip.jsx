import React,{Component} from 'react'
import PropTypes from 'prop-types'
import './AlterTip.styl'
export default class AlertTip extends Component{
  state = {
    errMsg:''
  }
  //声明PwdLogin组件传递的标签属性
  static propTypes = {
    errMsg:PropTypes.string.isRequired,//用于弹框的消息提示信息
    clearErrMsg:PropTypes.func.isRequired
  }
  componentWillReceiveProps(newProps){ //传递过来的标签属性发生变化的时候会调用该回调
    this.setState({
      errMsg:newProps.errMsg
    })
  }
  handleConfirm = ()=>{//处理弹框组件中的确认按钮
    this.setState({
      errMsg:''
    })
    this.props.clearErrMsg()//调用父组件中传递过来的函数属性，作用就是清空state中的errMsg
  }
  render(){
    const {errMsg} = this.state
    return (
      <div className="alert_container" style={{display:errMsg?'block':'none'}}>
        <section className="tip_text_container">
          <div className="tip_icon">
            <span></span>
            <span></span>
          </div>
          <p className="tip_text">{errMsg}</p>
          <div className="confrim" onClick={this.handleConfirm}>确认</div>
  </section>
  </div>
    )
  }
}