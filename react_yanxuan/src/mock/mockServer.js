import Mock from 'mockjs'
import homeData from './data/home_data'
import shiwu_data from './data/shiwu_data'
import dataNav from './data/datanav'
import Logindata from './data/Logindata'
import ajax from "../api/ajax";
/*===================首页mock数据===================*/
Mock.mock('/getHeadNav',{code:0,data:homeData.headCateList})//获取头部导航
Mock.mock('/getFocusList',{code:0,data:homeData.focusList})//获取轮播图
//获取品牌制造商信息
Mock.mock('/getTagList',{code:0,data:homeData.tagList}) //取数组的前4项进行显示
Mock.mock('/getNewItemList',{code:0,data:homeData.newItemList}) //新品首发
Mock.mock('/getPopulary',{code:0,data:homeData.popularItemList}) //人气推荐
Mock.mock('/getTopicList',{code:0,data:homeData.topicList}) //专题精选
Mock.mock('/getFulishe',{code:0,data:homeData.saleIndexVO}) //福利社
Mock.mock('/getCateList',{code:0,data:homeData.cateList}) //主页最后的列表
Mock.mock('/getFlashSaleIndex',{code:0,data:homeData.flashSaleIndexVO}) //主页最后的列表
/*======================识物mock数据=======================*/
Mock.mock('/getBannerList',{code:0,data:shiwu_data.banner})//获取轮播信息
Mock.mock('/getRecommendType',{code:0,data:shiwu_data.column})//获取column 文章推荐分类，横向滑屏的
Mock.mock('/getRecomendOne',{code:0,data:shiwu_data.recommendOne})//获取为你推荐数据
Mock.mock('/getRecomendTwo',{code:0,data:shiwu_data.recommendTwo})//获取为你推荐列表2数据
Mock.mock('/getRecomendThree',{code:0,data:shiwu_data.recommendThree})//获取为你推荐列表3数据
Mock.mock('/getTenFifteen',{code:0,data:shiwu_data.tenfifteen})//获取十点一刻数据
Mock.mock('/getZhenOne',{code:0,data:shiwu_data.zhenOne})//严选甄品1
Mock.mock('/getZhenTwo',{code:0,data:shiwu_data.zhenTwo})//严选甄品2
Mock.mock('/getZhenThree',{code:0,data:shiwu_data.zhenThree})//严选甄品3
Mock.mock('/getyxLook',{code:0,data:shiwu_data.yxLook})//严选Look
Mock.mock('/getfindMore',{code:0,data:shiwu_data.findMore})//更多精彩
/*=========================分类页面==========================*/
Mock.mock('/getCategoryList',{code:0,data:dataNav.categoryL1List})//严选Look

/*==================登录注册页=================*/
Mock.mock('/captcha',{code:0,data:Logindata.captchaArr})//图形验证码的获取
Mock.mock('/pwdLogin',{code:0,data:Logindata.users})//用户名密码登录
Mock.mock('/sysLogin',{code:0,data:Logindata.phoneUsers})//短信登录
