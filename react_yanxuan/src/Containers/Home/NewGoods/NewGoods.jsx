import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BScroll from 'better-scroll'
import './NewGoods.styl'

export default class NewGoods extends Component {
  static propTypes = {
    newItemList:PropTypes.array.isRequired,
    popularItem:PropTypes.array.isRequired
  }
  componentDidMount(){
    if(!this.slide){
      this.slide = new BScroll('.slideContainer',{
        scrollX:true,
        click:true
      })
    }
    if (!this.popularSlide){
      new BScroll('#popularContainer',{
        scrollX:true,
        click:true
      })
    }

  }
  render() {
    const {newItemList,popularItem} = this.props
    if (!newItemList){
      return
    }
    return (
      <div>
        <div className="m_floor m_newItems">
          <header className="hd">
            <a href="javascript:;" className="more">
              <span>新品首发</span>
              <div className="all">
                <div className="wrap">
                  <span>查看全部</span>
                  <i className="iconfont icon-arrow-right1"></i>
                </div>
              </div>
            </a>
          </header>
          <div className="m_goodGrid">
            <div className="slideContainer">
              <ul className="list">
                {
                  newItemList.map((newItem,index)=>(
                    <li className="item" key={index}>
                      <a href="javascript:;" className="good">
                        <div className="picWrap">
                          <img src={newItem.primaryPicUrl} alt="newGood"/>
                        </div>
                        <div className="des">
                          <p className="status gradientPrice">
                            满赠
                          </p>
                          <div className="name">
                            <span>{newItem.name}</span>
                          </div>
                          <div className="newItemDesc">{newItem.simpleDesc}</div>
                          <div className="price">￥{newItem.retailPrice}</div>
                        </div>
                        <div className="specification" style={{display:newItem.colorNum>0?'block':'none'}}>
                          <div>{newItem.colorNum}</div>
                          <div>色</div>
                          <div>可</div>
                          <div>选</div>
                        </div>
                      </a>
                    </li>
                  ))
                }

                <li className="item">
                  <a href="javascript:;" className="good more">
                    <span className="text">查看全部</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="m_floor m_newItems">
          <header className="hd popu">
            <a href="javascript:;" className="more">
              <span>人气推荐 · 好物精选</span>
              <div className="all">
                <div className="wrap">
                  <span>查看全部</span>
                  <i className="iconfont icon-arrow-right1"></i>
                </div>
              </div>
            </a>
          </header>
          <div className="m_goodGrid">
            <div className="slideContainer" id="popularContainer">
              <ul className="list">
                {
                  popularItem.map((popular,index)=>(
                    <li className="item" key={index}>
                      <a href="javascript:;" className="good">
                        <div className="picWrap">
                          <img src={popular.primaryPicUrl} alt="newGood"/>
                        </div>
                        <div className="des">
                          <p className="status gradientPrice">满赠</p>
                          <div className="name">
                            <span>{popular.name}</span>
                          </div>
                          <div className="newItemDesc">{popular.simpleDesc}</div>
                          <div className="price">￥{popular.retailPrice}</div>
                        </div>
                        <div className="specification" style={{display:popular.colorNum>0?'block':'none'}}>
                          <div>{popular.colorNum}</div>
                          <div>色</div>
                          <div>可</div>
                          <div>选</div>
                        </div>
                      </a>
                    </li>
                  ))
                }

                <li className="item">
                  <a href="javascript:;" className="good more">
                    <span className="text">查看全部</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}