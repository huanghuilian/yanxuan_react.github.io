import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import './ShiwuTop.styl'
class ShiwuTop extends Component{
  handleSearch = ()=>{
    this.props.history.push('/search')
  }
  handleShopCart = ()=>{
    this.props.history.replace('/shopcart')
  }
  render(){
    return (
      <header className="head">
        <a href="/" className="home">
          <i className="iconfont icon-home"></i>
        </a>
        <span className="title">网易严选</span>
        <div className="head-right">
          <i className="iconfont icon-artboard9-copy" onClick={this.handleSearch}></i>
        <i className="iconfont icon-cart" onClick={this.handleShopCart}></i>
      </div>
  </header>
    )
  }
}
export default withRouter(ShiwuTop)