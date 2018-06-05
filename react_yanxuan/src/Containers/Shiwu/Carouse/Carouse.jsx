import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Swiper from 'swiper'
import './Carouse.styl'
export default class Carouse extends Component {
  static propTypes = {
    bannerData:PropTypes.array.isRequired
  }
  componentDidUpdate(){//保证swiper实例是在数据获取之后并且界面已经更新完成之后
  if (!this.swiperObj) {
    this.swiperObj = new Swiper('#shiwuSwiper',{
      loop: true,
      autoplay:true
    })
  }
  }
  render() {
    const {bannerData} =this.props
    return (
      <div className="bannerWrap">
        <div className="slideContainer swiper-container" id="shiwuSwiper">
          <ul className="swiper-wrapper shiwu_list">
            {
              bannerData.map((banner,index)=>(
                <li className="swiper-slide shiwu_item" key={index}>
                  <a href="javascript:;">
                    <img className='img_slide' src={banner.picUrl} alt="图片"/>
                    <div className="content">
                      <div className="subTitle">{banner.subTitle}</div>
                      <div className="title">{banner.title}</div>
                      <div className="desc">{banner.desc}</div>
                    </div>
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }


}