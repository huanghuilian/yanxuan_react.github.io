import React, {Component} from 'react'
import {NavLink,Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import './RightItemList.styl'
export default class RightItemList extends Component{
  static propTypes = {
    currentItemObj:PropTypes.object.isRequired
  }
  state={
    currentItemObj:{},
    subCateList:[]
  }
  componentWillReceiveProps(nextProps){
    this.props = nextProps
    const {currentItemObj} = nextProps
    const {subCateList} = currentItemObj
    this.setState({
      currentItemObj,
      subCateList
    })
  }
/*
*  style={{display:currentItemObj.subCateList?'block':'none'}}
*    {
                  currentItemObj.subCateList.map((subCate,index)=>(
                    <li className="item" key={index}>
                      <Link to="javascript:;">
                        <div className="imgContainer">
                          <img src={subCate.bannerUrl} alt="tupian"/>
                        </div>
                        <div className="ItemTitle">{subCate.name}</div>
                      </Link>
                    </li>
                  ))
                }
*  */
  render() {
    const {currentItemObj,subCateList}=this.state
    return (
      <div className="right_menu_container">
        <div className="banner">
          <img src={currentItemObj.bannerUrl} alt="bg"/>
          <div className="categoryList">
            <h4 className="title">{currentItemObj.name}</h4>
            <div className="listWrap">
              <ul className="list" style={{display:subCateList.length>0?'block':'none'}}>
                {
                  subCateList.map((subCate,index)=>(
                    <li className="item" key={index}>
                      <Link to="javascript:;">
                        <div className="imgContainer">
                          <img src={subCate.wapBannerUrl} alt="tupian"/>
                        </div>
                        <div className="ItemTitle">{subCate.name}</div>
                      </Link>
                    </li>
                  ))
                }
            </ul>
          </div>
        </div>
      </div>
  </div>
  )
  }
  }