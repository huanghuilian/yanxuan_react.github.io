import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import './SearchHead.styl'

 class SearchHead extends Component{
  handSubmit = (ev)=>{
    ev.preventDefault()
  }
  render(){
    return (
      <header className="head">
        <div className="search_top">
          <form onSubmit={this.handSubmit}>
            <div className="searchInput">
              <i className="iconfont icon-artboard9-copy"></i>
              <input type="text" placeholder="户外轻薄防晒衣短裤99元起"/>
            </div>
          </form>
          <span className="cancel" onClick={this.props.history.goBack}>取消</span>
      </div>
  </header>
  )
  }
  }
export default withRouter(SearchHead)
