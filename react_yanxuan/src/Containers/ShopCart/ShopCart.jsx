import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import './ShopCart.styl'
 class ShopCart extends Component {
  render() {
    const {user} = this.props
    return (
      <div className="shopCart">
        <header className="head">
          <div className="head_top">
            <h3>购物车</h3>
          </div>
        </header>
        <div className="supplyContainer">
          <ul className="list">
            <li className="item">
              <span>30天无忧退货</span>
            </li>
            <li className="item">
              <span>48小时快速退款</span>
            </li>
            <li className="item">
              <span>满88元免邮费</span>
            </li>
          </ul>
        </div>
        <div className="content">
          <div className="img">
            <i className="iconfont"></i>
            <div className="text">去添加点什么吧</div>
          </div>
          <Link to="/login/pwdLogin" className="login" style={{display:user.userId?'none':'block'}}>登录</Link>
        </div>
      </div>
    )
  }
}
export default connect(
  (state)=>({user:state.users})
)(ShopCart)