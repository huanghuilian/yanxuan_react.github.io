import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BScroll from 'better-scroll'
import {withRouter} from 'react-router-dom'
import './HeadTop.styl'
class HeadTop extends Component {
  state = {
    currentIndex:-1,
    headCateList:[]
  }
  static propTypes = {
    headCateList:PropTypes.array.isRequired
  }
  componentWillReceiveProps(newProps){
    this.setState({
      headCateList:newProps.headCateList
    })
  }
  componentDidMount(){ //创建主页头部导航的bscroll实例
    if(!this.headNav){
      this.headNav = new BScroll('.nav_container',{
        scrollX:true,
        click:true
      })
    }
  }
  handleClick = (index)=>{
    const {headCateList} = this.props
    this.setState({//设置当前点中的那个下标
      currentIndex:index
    })
    this.props.history.replace(`/item/list?categoryId=${headCateList[index].id}`)
  }
  handleSearch = ()=>{
    this.props.history.push('/search')
  }
  render() {
    const {headCateList} = this.props
    const {currentIndex} = this.state
    return (
      <header className="head">
        <div id="homeHead">
          <div className="header_top">
            <a href="javascript:;" className="logo">网易严选</a>
            <div className="search" onClick={this.handleSearch}>
              <i className="iconfont icon-artboard9-copy"></i>
              <span className="placeHolder">搜索商品，共9877款好物</span>
            </div>
          </div>
          <div className="header_navigator  border-1px">
            <div className="nav_container">
              <ul className="list">
                <li className="tab" onClick={()=>this.props.history.push('/home')}>
                  <a href="javascript:;" className={(this.props.match.path==='/home'||this.props.match.path==='/')?'active txt':'txt'}>推荐</a>
                </li>
                {
                    headCateList.map((headCate, index) => (
                    <li className="tab" key={headCate.id} onClick={(val)=>this.handleClick(index)}>
                    <a href="javascript:;" className={this.props.location.search===`?categoryId=${headCate.id}`?'active txt':'txt'}>{headCate.name}</a>
                    </li>
                    ))
                }
              </ul>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default withRouter(HeadTop)