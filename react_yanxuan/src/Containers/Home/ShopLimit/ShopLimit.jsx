import React,{Component} from 'react'
import PropTypes from 'prop-types'

import './ShopLimit.styl'
export default class ShopLimit extends Component{
  static propTypes = {
    flashSale:PropTypes.object.isRequired
  }
  render(){
    return (
      <div className="shopLimit">
        <a href="javascript:;">
          <div className="m_indexFlash">
            <div className="left_item">
              <div className="title">严选限时购</div>
              <div className="m_countDown">
                <span className="hour">02</span>
                <span className="colon">:</span>
                <span className="mins">00</span>
                <span className="colon">:</span>
                <span className="secs">00</span>
              </div>
              <div className="next-title">
                <div>
                  <span>下一场</span>
                  <span>18:00</span>
                  <span>开始</span>
                </div>
              </div>
            </div>
            <div className="right_item">
              <div className="goodPic">
                <img src={this.props.flashSale.primaryPicUrl} alt="限时购"/>
              </div>
              <div className="price">
                <div className="priceNow">
                  <span className="rmb1">￥</span>
                  <span>208</span>
                </div>
                <div className="priceOld">
                  <span className="rmb2">￥</span>
                  <span>334</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    )
  }
}