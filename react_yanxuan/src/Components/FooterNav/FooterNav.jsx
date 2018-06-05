import React, {Component} from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'

import './FooterNav.styl'

class FooterNav extends Component {
  state = {
    menu: [
      {
        path: '/home',
      }
    ]
  }
  static propTypes = {
    user:PropTypes.object.isRequired
  }

  render() {
    const {user} = this.props
    const pathName = this.props.location.pathname
    const sysloginPath = '/login/sysLogin'
    const loginPath = '/login'
    const pwdloginPath = '/login/pwdLogin'
    const searchPath = '/search'
    if (pathName===sysloginPath||pathName===loginPath||pathName===pwdloginPath||pathName===searchPath){
        return <nav></nav>
    }
    return (
      <nav className="m-tabBar">
        <NavLink className="item" to="/home">
          <i name="tabBar-index" className="iconfont icon-home"></i>
          <span>首页</span>
        </NavLink>
        <NavLink className="item" to="/shiwu">
          <i name="tabBar-topic" className="iconfont icon-square-two"></i>
          <span>识物</span>
        </NavLink>
        <NavLink className="item" to="/category">
          <i name="tabBar-cate" className="iconfont icon-category"></i>
          <span>分类</span>
        </NavLink>
        <NavLink className="item" to="/shopcart">
          <i name="tabBar-cart" className="iconfont icon-cart"></i>
          <span>购物车</span>
        </NavLink>
        <NavLink className="item" to={user.userId?'/profile':'/login/pwdLogin'}>
          <i name="tabBar-ucenter" className="iconfont icon-icon-personal-default"></i>
          <span>个人</span></NavLink>
      </nav>
    )
  }
}

export default withRouter(FooterNav)