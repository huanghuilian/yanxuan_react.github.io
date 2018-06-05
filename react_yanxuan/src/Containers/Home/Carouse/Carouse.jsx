import React, {Component} from 'react'
import PropTypes from "prop-types"

import './Carouse.styl'
import Swiper from "swiper";
export default class Carouse extends Component {
  state={
    focusList:[]
  }
  static propTypes = {
    focusList: PropTypes.array.isRequired
  }
  componentWillReceiveProps(newProps){
    this.props = newProps
    this.setState({
      focusList:newProps.focusList
    })
  }
  componentDidUpdate(){
    if (!this.sw){
      this.sw = new Swiper('#m_slide',{
        loop: true,
        autoplay:true,
        pagination: {
          el: '.swiper-pagination',
        }
      })
    }
  }
  componentWillUnmount(){
    this.sw.destroy()
  }
  render() {
    const {focusList} = this.props
    return (
      <div className="banner">
        <div className="swiper-container slideWrap" id='m_slide'>
          <ul className="list swiper-wrapper">
            {
              focusList.map((focus,index)=>(
                <li className="item swiper-slide" key={index}>
                  <a href="javascript:;">
                    <img
                      src={focus.picUrl}
                      alt="slide"/>
                  </a>
                </li>
                ))

            }

          </ul>
        </div>
        <div className="swiper-pagination"></div>
        <div className="m-indexServicePolicy">
          <ul className="serverList ">
            <li className="item ">
              <a href="javascript:;">
                <i className="iconfont icon-dagou1"></i>
                <span className="text">网易自营商品</span>
              </a>
            </li>
            <li className="item">
              <a href="javascript:;">
                <i className="iconfont icon-dagou1"></i>
                <span className="text">30天无忧退货</span>
              </a>
            </li>
            <li className="item">
              <a href="javascript:;">
                <i className="iconfont icon-dagou1"></i>
                <span className="text">48小时快速退款</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}