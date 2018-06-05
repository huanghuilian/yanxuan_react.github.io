import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Manufactory.styl'

export default class Manufactory extends Component {
  static propTypes = {
    tagList:PropTypes.array.isRequired
  }
  render() {
    const {tagList} = this.props
    const tags = tagList.slice(0,4)
    return (
      <div className="m_floor ">
        <header className="m_hd">
          <a href="javascript:;">
            <span>品牌制造商直销</span>
            <i className="iconfont icon-arrow-right"></i>
          </a>
        </header>
        <div className="m_ManufacturersSupplying">
          <ul className="list">
            {
              tags.map((tag,index)=>(
                <li className="item" key={index}>
                  <a href="javascript:;">
                    <div className="manufacturer_price">
                      <h4 className="title">{tag.name}</h4>
                      <div>
                        <span className="price1">{tag.floorPrice}</span>
                        <span className="price2">元起</span>
                      </div>
                      <i className="iconfont icon-shangxin"></i>
                    </div>
                    <img className='manuPic' src={tag.picUrl} alt="图片"/>
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