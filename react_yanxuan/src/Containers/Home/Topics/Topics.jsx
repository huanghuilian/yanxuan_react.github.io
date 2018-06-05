import React,{Component} from 'react'
import PropTypes from 'prop-types'
import BScroll from 'better-scroll'
import './Topics.styl'
export default class Topics extends Component{
  static propTypes = {
    topicList:PropTypes.array.isRequired
  }
  componentDidMount() {
    if (!this.slide) {
      this.slide = new BScroll('#topicContainer', {
        scrollX: true,
        click: true
      })
    }
  }
  render(){
    const {topicList} = this.props
    return (
      <div className="m_floor">
        <header className="t_hd">
          <a href="javascript:;" className="more">
            <span>专题精选</span>
            <i className="iconfont icon-arrow-right"></i>
          </a>
        </header>
        <div className="m-indexTopics-slide">
          <div className="inner" id="topicContainer">
            <ul className="list">
              {
                topicList.map((topic,index)=>(
                  <li className="item" key={index}>
                    <a href="javascript:;" className="imgWrap">
                      <img className="img" src={topic.itemPicUrl} alt="图片"/>
                    </a>
                    <div className="line">
                      <h4 className="title">{topic.title}</h4>
                      <span className="price">{topic.priceInfo}元起</span>
                    </div>
                    <div className="desc">{topic.subtitle}</div>
                  </li>
                ))
              }
          </ul>
        </div>
      </div>
  </div>
    )
  }
}