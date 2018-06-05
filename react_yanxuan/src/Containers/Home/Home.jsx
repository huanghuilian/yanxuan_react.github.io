import React,{Component} from 'react'
import {connect} from 'react-redux'
import HeadTop from '../../Components/HeadTop/HeadTop'
import Carouse from './Carouse/Carouse'
import Manufactory from './Manufactory/Manufactory'
import NewGoods from './NewGoods/NewGoods'
import ShopLimit from './ShopLimit/ShopLimit'
import Topics from './Topics/Topics'
import GoodGrid from './GoodGrid/GoodGrid'
import Fulishe from './Fulishe/Fulishe'
import './home.styl'
import {
  ReqHeadNav,//首页头部导航
  ReqFocusList,//首页的轮播
  ReqTagList,///获取品牌制造商信息
  ReqNewItemList,//获取新品首发
  ReqPopularyItemList,//获取人物推荐
  ReqTopicList,
  ReqCateList,
  ReqflashSaleIndex,//显示限时购
} from '../../api/index'
import Swiper from "swiper"
import 'swiper/dist/css/swiper.min.css'
import {getHeadCateList} from '../../redux/actions'
 class Home extends Component{
  state = {
    headCateList:[],//首页头部导航的数据
    focusList:[],//滑屏轮播图数据
    tagList:[],//品牌制造商直购
    newItemList:[],//新品首发的数据
    popularItem:[],//人气推荐
    topicList:[],//专题精选
    cateList:[],//主页最后部分列表
    flashSale:{},//限时购
  }
  async componentWillMount(){
    this.props.getHeadCateList()
    const result = await ReqHeadNav()
    const FocusListRes = await ReqFocusList()
    const TagListRes = await ReqTagList()
    const NewItemListRes = await ReqNewItemList()
    const PopularyItemListRes = await ReqPopularyItemList()
    const TopicListRes = await ReqTopicList()
    const flashSaleIndexRes = await ReqflashSaleIndex()
    const cateListRes = await ReqCateList()
      this.setState({
        headCateList : result.data
      })
    //更新首页轮播图显示的state
    if (FocusListRes.code===0) {
      const focusList = FocusListRes.data
      this.setState({
        focusList
      })
    }
    //更新品牌制造商信息显示的state
    if (TagListRes.code===0){
      const tagList = TagListRes.data
      this.setState({
        tagList
      })
    }
    //更新新品首发的数据显示的state
    if (NewItemListRes.code===0){
      const newItemList = NewItemListRes.data
      this.setState({
        newItemList
      })
    }
    //更新人气推荐显示的state
    if (PopularyItemListRes.code===0){
      const popularItem = PopularyItemListRes.data
      this.setState({
        popularItem
      })
    }
    //更新专题精选显示的state
    if (TopicListRes.code===0){
      const topicList = TopicListRes.data
      this.setState({
        topicList
      })
    }
    //更新主页最后部分列表显示的state
    if (cateListRes.code===0){
      const cateList = cateListRes.data
      this.setState({
        cateList
      })
    }
    //限时购
    if (flashSaleIndexRes.code===0){
      const flashSale = flashSaleIndexRes.data
      this.setState({
        flashSale
      })
    }
  }
  render(){
    const {headCateList,focusList,tagList,newItemList,popularItem,topicList,cateList,flashSale} = this.state
    return (
      <div id="app">
        <HeadTop headCateList={this.props.headCateList}/>
        <Carouse focusList={focusList}/>
        <Manufactory tagList={tagList}/>
        <NewGoods newItemList={newItemList} popularItem={popularItem}/>
        <ShopLimit flashSale={flashSale}/>
        <Fulishe/>
        <Topics topicList={topicList}/>
        <GoodGrid cateList={cateList}/>
        <div className="footWrap">
          <div className="foot">
            <div className="footContent">
              <a href="javascript:;" className="goApp">下载APP</a>
              <a href="javascript:;" className="goWeb">电脑版</a>
            </div>
            <p className="copyright">
              <span className="copyright">网易公司版权所有 © 1997-</span>
              <span className="copyright">2018</span><br/>
              <span className="copyright">食品经营许可证：JY13301080111719</span>
            </p>
          </div>
        </div>
        <div className="present">
          <i className="iconfont icon-present_surface"></i>
        </div>
        <div className="Top">
          <i className="iconfont icon-arrow-up"></i>
        </div>
      </div>
    )
  }
}
export default connect(
  (state)=>({headCateList:state.m_HeadNav}),
  {getHeadCateList}
)(Home)