import React,{Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import './ItemList.styl'
import {getHeadCateList} from '../../redux/actions'
import HeadTop from '../../Components/HeadTop/HeadTop'
class ItemList extends Component{
  static propTypes = {
    headCateList:PropTypes.array.isRequired
  }
  componentWillMount(){
    this.props.getHeadCateList()
  }
  render(){
    const {headCateList} = this.props
    return (
      <div>
        <HeadTop headCateList={headCateList}/>
        <div className="headNav_subItem">
          <div className="banner_item">
            <img src="../../assets/imgs/slide/2.jpg" alt="图片"/>
          </div>
          <div className="m_subCategoryListContainer">
            <div className="hd">
              <h4 className="title">行李箱</h4>
              <p className="desc">轻奢行李箱陪你走天下</p>
            </div>
            <div className="listContainer">
              <ul className="list">
                <li className="item">
                  <a href="javascript:;">
                    <div className="itemTop">
                      <img src="../../common/imgs/itemList_xlx.png" alt="图片"/>
                        <div className="desc">40升适中容量，铝质包角，牢固抗摔</div>
                    </div>
                    <div className="status gradientPrice">
                      <span>三石福利价</span>
                    </div>
                    <div className="name">
                      <span>20寸 纯PC“铝框”（非全铝）登机箱</span>
                    </div>
                    <div className="price">
                      <span>￥349</span>
                    </div>
                    <div className="selectedColor">
                      <div>9</div>
                      <div>色</div>
                      <div>可</div>
                      <div>选</div>
                    </div>
                  </a>
                </li>
                <li className="item">
                  <a href="javascript:;">
                    <div className="itemTop">
                      <img src="../../common/imgs/itemList_xlx.png" alt="图片"/>
                        <div className="desc">40升适中容量，铝质包角，牢固抗摔</div>
                    </div>
                    <div className="status gradientPrice">
                      <span>三石福利价</span>
                    </div>
                    <div className="name">
                      <span>20寸 纯PC“铝框”（非全铝）登机箱</span>
                    </div>
                    <div className="price">
                      <span>￥349</span>
                    </div>
                    <div className="selectedColor">
                      <div>9</div>
                      <div>色</div>
                      <div>可</div>
                      <div>选</div>
                    </div>
                  </a>
                </li>
                <li className="item">
                  <a href="javascript:;">
                    <div className="itemTop">
                      <img src="../../common/imgs/itemList_xlx.png" alt="图片"/>
                        <div className="desc">40升适中容量，铝质包角，牢固抗摔</div>
                    </div>
                    <div className="status gradientPrice">
                      <span>三石福利价</span>
                    </div>
                    <div className="name">
                      <span>20寸 纯PC“铝框”（非全铝）登机箱</span>
                    </div>
                    <div className="price">
                      <span>￥349</span>
                    </div>
                    <div className="selectedColor">
                      <div>9</div>
                      <div>色</div>
                      <div>可</div>
                      <div>选</div>
                    </div>
                  </a>
                </li>
                <li className="item">
                  <a href="javascript:;">
                    <div className="itemTop">
                      <img src="../../assets/imgs/itemList_xlx.png" alt="图片"/>
                        <div className="desc">40升适中容量，铝质包角，牢固抗摔</div>
                    </div>
                    <div className="status gradientPrice">
                      <span>三石福利价</span>
                    </div>
                    <div className="name">
                      <span>20寸 纯PC“铝框”（非全铝）登机箱</span>
                    </div>
                    <div className="price">
                      <span>￥349</span>
                    </div>
                    <div className="selectedColor">
                      <div>9</div>
                      <div>色</div>
                      <div>可</div>
                      <div>选</div>
                    </div>
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

export default connect(
  (state)=>({headCateList:state.m_HeadNav}),
  {getHeadCateList}
)(
  ItemList
)