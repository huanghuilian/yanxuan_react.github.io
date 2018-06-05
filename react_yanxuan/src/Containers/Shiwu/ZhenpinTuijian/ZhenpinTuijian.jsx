import React,{Component} from 'react'
import PropTypes from 'prop-types'

import './ZhenpinTuijian.styl'
export default class ZhenpinTuijian extends Component{
  static propTypes = {
    recommendOne:PropTypes.object.isRequired,
    recommendTwo:PropTypes.object.isRequired,
    recommendThree:PropTypes.object.isRequired
  }
  render(){
    const {recommendOne,recommendTwo,recommendThree} = this.props
    return (
      <div className="recommend">
        <div className="line"></div>
        <div className="container">
          <div className="hd">严选甄品</div>
          <a className="topR" href="javascript:;">
            <div className="imgContainer">
              <img src={recommendOne.picUrl} alt="图片"/>
              <div className="flag_recommend">{recommendOne.typeName}</div>
            </div>
            <div className="desc">
              <h4 className="title">{recommendOne.title}</h4>
              <p className="txt">{recommendOne.subTitle}</p>
            </div>
          </a>
          <a className="bottomR" href="javascript:;">
            <div className="recmList">
              <div className="recmItem">
                <div className="itemLeft">
                  <div className="author">
                    <img
                      src={recommendTwo.avatar}
                      alt="tx" className="avatar"/>
                    <span className="name">{recommendTwo.nickname}</span>
                  </div>
                  <div className="content">
                    <h4 className="title">{recommendTwo.title}</h4>
                    <p className="txt">{recommendTwo.subTitle}</p>
                  </div>
                </div>
                <div className="itemRight">
                  <div className="imgContainer">
                    <img src={recommendTwo.picUrl}
                         alt="图片"/>
                    <div className="flag_recommend">{recommendTwo.typeName}</div>
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
                    <img
                      src={recommendThree.avatar}
                      alt="tx" className="avatar"/>
                    <span className="name">{recommendThree.nickname}</span>
                  </div>
                  <div className="content">
                    <h4 className="title">{recommendThree.title}</h4>
                    <p
                      className="txt">{recommendThree.subTitle}</p>
                  </div>
                </div>
                <div className="itemRight">
                  <div className="imgContainer">
                    <img src={recommendThree.picUrl}
                         alt="图片"/>
                    <div className="flag_recommend">{recommendThree.typeName}</div>
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