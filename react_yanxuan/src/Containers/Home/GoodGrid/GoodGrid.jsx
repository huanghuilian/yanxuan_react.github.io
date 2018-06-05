import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './GoodGrid.styl'
export default class GoodGrid extends Component {
  static propTypes = {
    cateList: PropTypes.array.isRequired
  }
  render() {
    const {cateList} = this.props
    return (
      <div>
        <div className="m_floor">
          {
            cateList.map((cate,index) => (
              <div className="m-titleGoodGrid" key={cate.id}>
                <h3 className="title">{cate.name}</h3>
                <div className="m-goodGrid">
                  <ul className="list">
                    {
                      cate.itemList.map((cateItem,index)=>(
                        <li className="item" key={index} style={{display:index<7?'block':'none'}}>
                          <a href="javascript:;" className="good">
                            <div className="good_hd">
                              <div className="wraper">
                                <img src={cateItem.primaryPicUrl} alt="good"/>
                              </div>
                              <div className="desc">{cateItem.simpleDesc}</div>
                            </div>
                            <div className="name">
                              <span>{cateItem.name}</span>
                            </div>
                            <div className="price">
                              <span>￥100</span>
                            </div>
                            <div className="specification" style={{display:cateItem.colorNum?'block':'none'}}>
                              <div>{cateItem.colorNum}</div>
                              <div>色</div>
                              <div>可</div>
                              <div>选</div>
                            </div>
                          </a>
                        </li>
                      ))
                    }
                    <li className="item">
                      <a href="javascript:;" className="more">
                        <p className="txt">更多居家好物</p>
                        <i className="iconfont icon-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}