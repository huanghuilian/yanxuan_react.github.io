import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BScroll from 'better-scroll'
import './Recomment.styl'

export default class MoreContent extends Component {
  static propTypes = {
    columnRecommend:PropTypes.array.isRequired
  }
  componentDidMount(){
    if (!this.slide){
      this.slide = new BScroll('.scrollContainer',{
        scrollX:true,
        scrollY:false,
        click:true
      })
    }
  }
  render() {
    const {columnRecommend} = this.props
    return (
      <div className="article_recommend">
        <div className="scrollContainer">
          <ul className="list">
            {
              columnRecommend.map((colRecommend,index)=>(
                <li className="item" key={index}>
                  <a href="javascript:;">
                    <div className="imgContainer">
                      <img src={colRecommend.picUrl} alt="图片"/>
                    </div>
                    <div className="essay-num">{colRecommend.articleCount}</div>
                    <div className="presenter">{colRecommend.title}</div>
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