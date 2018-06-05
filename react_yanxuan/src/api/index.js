//包含多个接口请求函数的模块
//每个函数返回的都是Promise对象
/*模拟请求的请求接口模块*/
import ajax from './ajax'
/*=============首页获取数据的接口请求函数===============*/
//获取头部导航
export const ReqHeadNav = ()=>ajax('/getHeadNav')
//获取轮播图
export const ReqFocusList = ()=>ajax('/getFocusList')
//获取品牌制造商信息
export const ReqTagList = ()=>ajax('/getTagList')
//获取新品首发
export const ReqNewItemList = ()=>ajax('/getNewItemList')
//获取人物推荐
export const ReqPopularyItemList = ()=>ajax('/getPopulary')
//获取专题精选
export const ReqTopicList = ()=>ajax('/getTopicList')
//获取福利社
export const ReqFulishe = ()=>ajax('/getFulishe')
//获取主页列表
export const ReqCateList = ()=>ajax('/getCateList')
//获取限时购的数据
export const ReqflashSaleIndex = ()=>ajax('/getFlashSaleIndex')

/*===================识物页接口请求函数=====================*/
//获取轮播信息
export const ReqBannerList = ()=>ajax('/getBannerList')
//获取column 文章推荐分类，横向滑屏的
export const ReqRecommendType = ()=>ajax('/getRecommendType')
//获取为你推荐数据
export const ReqRecomendOne = ()=>ajax('/getRecomendOne')
//获取为你推荐列表2数据
export const ReqRecomendTwo = ()=>ajax('/getRecomendTwo')
//获取为你推荐列表3数据
export const ReqRecomendThree = ()=>ajax('/getRecomendThree')
//获取十点一刻数据
export const ReqTenFifteen = ()=>ajax('/getTenFifteen')
//严选甄品1
export const ReqZhenOne = ()=>ajax('/getZhenOne')
//严选甄品2
export const ReqZhenTwo = ()=>ajax('/getZhenTwo')
//严选甄品3
export const ReqZhenThree = ()=>ajax('/getZhenThree')
//严选Look
export const ReqyxLook = ()=>ajax('/getyxLook')
//更多精彩
export const ReqfindMore = ()=>ajax('/getfindMore')
/*================分类页=====================*/
//侧边导航 右边子菜单
export const ReqCategory = ()=>ajax('/getCategoryList')

/*==================登录注册=================*/
//短信登录
export const smsLogin = ()=>ajax('/sysLogin')
//发送图形验证码
export const reqCaptchas = ()=>ajax('/captcha')
//发送短信验证码
export const sendCode = ()=>ajax('/getCode')
//用户名密码登录
export const pwdLogin = ()=>ajax('/pwdLogin')

