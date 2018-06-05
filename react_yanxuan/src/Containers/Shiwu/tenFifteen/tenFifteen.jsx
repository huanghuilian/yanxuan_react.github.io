import React, {Component} from 'react'
import PropStypes from 'prop-types'
import BScroll from 'better-scroll'
import './tenFifteen.styl'
export default class TenFifteen extends Component {
  static propTypes = {
    tenfifteen:PropStypes.array.isRequired
  }
  componentDidMount(){
    if (!this.slide){
      this.slide = new BScroll('#TenFifteen',{
        scrollX:true,
        scrollY:false,
        click:true
      })
    }
  }
  render() {
    const {tenfifteen} = this.props
    return (
      <div className="wrap">
        <div className="tenFifteen">
          <div className="inner">
            <div className="hd">十点一刻</div>
            <div className="slideContainer" id="TenFifteen">
              <ul className="list">
                {
                  tenfifteen.map((item,index)=>(
                    <li className="item" key={index}>
                      <a href="javascript:;">
                        <div className="suvTitle">今日话题</div>
                        <div className="title">{item.title}</div>
                        <div className="question">{item.desc}</div>
                        <div className="join">
                          <div className="left-avatar" v-show="topicToday.participantNum>0">
                            {
                              item.participantAvatar.map((avatar,index)=>(
                                <img key={index} src={avatar} alt="avatar"/>
                              ))
                            }
                          </div>
                          <div className="right-joinNum">{item.participantNum}人参与话题</div>
                        </div>
                      </a>
                    </li>
                  ))
                }

              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}