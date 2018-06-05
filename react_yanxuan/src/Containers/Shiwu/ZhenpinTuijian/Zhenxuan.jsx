import React,{Component} from 'react'
import './Zhenxuan.styl'
import PropTypes from "prop-types";
export default class Zhenxuan extends Component{
  static propTypes = {
    zhenOne:PropTypes.object.isRequired,
    zhenTwo:PropTypes.object.isRequired,
    zhenThree:PropTypes.object.isRequired
  }
  render(){
    const {zhenOne,zhenTwo,zhenThree} = this.props
    return (
      <div className="recommend">
        <div className="line"></div>
        <div className="container">
          <div className="hd">为你推荐</div>
          <a className="topR" href="javascript:;">
            <div className="imgContainer">
              <img src={zhenOne.picUrl} alt="图片"/>
              <div className="flag_recommend">{zhenOne.typeName}</div>
            </div>
            <div className="desc">
              <h4 className="title">{zhenOne.title}</h4>
              <div className="price">{zhenOne.priceInfo}元起</div>
              <p className="txt">{zhenOne.subTitle}</p>
            </div>
          </a>
          <a className="bottomR" href="javascript:;">
            <div className="recmList">
              <div className="recmItem">
                <div className="itemLeft">
                  <div className="author">
                    <img src={zhenTwo.avatar}  alt="tx" className="avatar"/>
                    <span className="name">{zhenTwo.nickname}</span>
                  </div>
                  <div className="content">
                    <h4 className="title">{zhenTwo.title}</h4>
                    <p className="txt">{zhenTwo.subTitle}</p>
                  </div>
                </div>
                <div className="itemRight">
                  <div className="imgContainer">
                    <img src={zhenTwo.picUrl} alt="图片"/>
                    <div className="flag_recommend">{zhenTwo.typeName}</div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a className="bottomR" href="javascript:;">
            <div className="recmList">
              <div className="recmItem">
                <div className="itemLeft">
                  <div className="author">
                    <img src={zhenThree.avatar} alt="tx" className="avatar"/>
                    <span className="name">{zhenThree.nickname}</span>
                  </div>
                  <div className="content">
                    <h4 className="title">{zhenThree.nickname}</h4>
                    <p className="txt">{zhenThree.subTitle}</p>
                  </div>
                </div>
                <div className="itemRight">
                  <div className="imgContainer">
                    <img src={zhenThree.picUrl} alt="图片"/>
                    <div className="flag_recommend">{zhenThree.typeName}</div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    )
  }
}