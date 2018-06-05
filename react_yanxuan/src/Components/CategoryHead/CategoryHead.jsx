import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import './CategoryHead.styl'
class CategoryHead extends Component {
  handleSearch = ()=>{
    this.props.history.push('/search')
  }
  render() {
    return (
      <header className="cate_hd">
        <div className="searchContainer" onClick={this.handleSearch}>
          <i className="iconfont icon-artboard9-copy"></i>
          <span className="search">搜索商品, 共9734款好物</span>
        </div>
      </header>
    )
  }
}
export default withRouter(CategoryHead)