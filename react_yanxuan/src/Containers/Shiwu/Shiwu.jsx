import React,{Component} from 'react'

import ShiwuTop from '../../Components/ShiwuTop/ShiwuTop'
import Carouse from './Carouse/Carouse'
import Recomment from './Recomment/Recomment'
import ZhenpinTuijian from './ZhenpinTuijian/ZhenpinTuijian'
import Zhenxuan from './ZhenpinTuijian/Zhenxuan'
import MoreContent from './MoreContent/MoreContent'
import TenFifteen from './tenFifteen/tenFifteen'
import './Shiwu.styl'
import {
  ReqBannerList,
  ReqRecommendType,
  ReqRecomendOne,
  ReqRecomendTwo,
  ReqRecomendThree,
  ReqTenFifteen,
  ReqZhenOne,
  ReqZhenTwo,
  ReqZhenThree,
  ReqyxLook,
  ReqfindMore,
} from '../../api'
export default class Shiwu extends Component{
  state = {
    bannerData:[],//识物导航
    columnRecommend:[],//文章推荐分类
    recommendOne:{},//文章推荐一
    recommendTwo:{},//文章推荐二
    recommendThree:{},//文章推荐三
    tenfifteen:[],//十点一刻
    zhenOne:{},//甄选1
    zhenTwo:{},//甄选2
    zhenThree:{},//甄选3
    yxLook:{},//严选look
    findMore:[],//更多精彩
  }
  async componentWillMount(){
    const BannerListRes = await ReqBannerList()
    const RecommendTypeRes = await ReqRecommendType()
    const RecomendOneRes = await ReqRecomendOne()
    const RecomendTwoRes = await ReqRecomendTwo()
    const RecomendThreeRes = await ReqRecomendThree()
    const TenFifteenRes = await ReqTenFifteen()
    const ZhenOneRes = await ReqZhenOne()
    const ReqZhenTwoRes = await ReqZhenTwo()
    const ZhenThreeRes = await ReqZhenThree()
    const yxLookRes = await ReqyxLook()
    const findMoreRes = await ReqfindMore()
    this.setState({//识物导航
      bannerData : BannerListRes.data
    })
    //更新文章推荐分类显示的state
    if (RecommendTypeRes.code===0) {
      const columnRecommend = RecommendTypeRes.data
      this.setState({
        columnRecommend
      })
    }
    //更新文章推荐一信息显示的state
    if (RecomendOneRes.code===0){
      const recommendOne = RecomendOneRes.data
      this.setState({
        recommendOne
      })
    }
    //更新文章推荐二的数据显示的state
    if (RecomendTwoRes.code===0){
      const recommendTwo = RecomendTwoRes.data
      this.setState({
        recommendTwo
      })
    }
    //更新文章推荐三显示的state
    if (RecomendThreeRes.code===0){
      const recommendThree = RecomendThreeRes.data
      this.setState({
        recommendThree
      })
    }
    //更新十点一刻显示的state
    if (TenFifteenRes.code===0){
      const tenfifteen = TenFifteenRes.data
      this.setState({
        tenfifteen
      })
    }
    //更新甄选1显示的state
    if (ZhenOneRes.code===0){
      const zhenOne = ZhenOneRes.data
      this.setState({
        zhenOne
      })
    }
    //甄选2
    if (ReqZhenTwoRes.code===0){
      const zhenTwo = ReqZhenTwoRes.data
      this.setState({
        zhenTwo
      })
    }
    //甄选3
    if (ZhenThreeRes.code===0){
      const zhenThree = ZhenThreeRes.data
      this.setState({
        zhenThree
      })
    }
    //严选look
    if (yxLookRes.code===0){
      const yxLook = yxLookRes.data
      this.setState({
        yxLook
      })
    }
    //更多精彩
    if (findMoreRes.code===0){
      const findMore = findMoreRes.data
      this.setState({
        findMore
      })
    }
  }
  render(){
    const {
      bannerData,
      columnRecommend,
      recommendOne,
      recommendTwo,
      recommendThree,
      tenfifteen,
      zhenOne,
      zhenTwo,
      zhenThree,
      yxLook,
      findMore
    } = this.state
    return (
      <div id="shiwu">
        <ShiwuTop/>
        <Carouse bannerData={bannerData}/>
        <Recomment columnRecommend={columnRecommend}/>
        <ZhenpinTuijian recommendOne={recommendOne} recommendTwo={recommendTwo} recommendThree={recommendThree}/>
        <TenFifteen tenfifteen={tenfifteen}/>
        <Zhenxuan zhenOne={zhenOne} zhenTwo={zhenTwo} zhenThree={zhenThree}/>
        <div className="LOOK">
          <div className="lookInner">
            <div className="hd">LOOK严选</div>
            <a href="javascript:;" className="content">
              <img src={yxLook.picUrl} alt="图片"/>
              <div className="topicInfo">
                <div className="avatar">
                  <img src={yxLook.avatar} alt="图片"/>
                  <span className="name">{yxLook.nickname}</span>
                  <span>{yxLook.content}</span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <MoreContent findMore={findMore}/>
      </div>
    )
  }
}