import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './MoreContent.styl'
export default class MoreContent extends Component {
  static propTypes = {
    findMore:PropTypes.array.isRequired
  }
  render() {
    const {findMore} = this.props
    return (
      <div className="moreInfo">
        <div className="moreInner">
          <div className="hd">
            <div className="title">更多精彩</div>
          </div>
          {
            findMore.map((item,index)=>(
              <div key={index}>
                <div className="content" style={{display:item.picList.length>3?'none':'block'}}>
                  <a href="javascript:;">
                    <div className="item">
                      <div className="imgContainer">
                        <img src={item.itemPicUrl}
                             alt="图片"/>
                      </div>
                      <div className="desc">{item.subtitle}</div>
                    </div>
                  </a>
                </div>
                <div className="content" style={{display:item.picList.length>3?'block':'none'}}>
                  <a href="javascript:;">
                    <div className="item">
                      <div className="pics">
                        <img src={item.picList[0]} alt="图片"
                             className="left_pic"/>
                        <div className="pic_right">
                          <img src={item.picList[1]} alt="图片"/>
                          <img src={item.picList[2]} alt="图片"/>
                        </div>
                      </div>
                      <div className="desc">{item.subtitle}</div>
                    </div>
                  </a>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    )
  }
}