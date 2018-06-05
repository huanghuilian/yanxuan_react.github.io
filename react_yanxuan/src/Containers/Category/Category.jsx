import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BScroll from 'better-scroll'
import CategoryHead from '../../Components/CategoryHead/CategoryHead'
import RightItemList from './RightItemList'
import {
  ReqCategory
}from '../../api'
import './Category.styl'
export default class Category extends Component {
  state = {
    categoryL1List:[],
    currentItemObj:{}
  }
  async componentWillMount(){
    const CategoryRes = await ReqCategory()
    console.log(CategoryRes)
    //更新文章推荐分类显示的state
    if (CategoryRes.code===0) {
      const categoryL1List = CategoryRes.data
      const  currentItemObj = categoryL1List.find((rightItemList,index)=>rightItemList.name=='居家')
      this.setState({
        categoryL1List,
        currentItemObj
      })
    }
  }
  componentDidMount(){
    if (!this.scrollObj){
      this.scrollObj = new BScroll('.category_inner',{
        scrollY:true,
        click:true
      })
    }
  }
  /*处理点击事件*/
  handleClick = (currentIndex)=>{
    const {currentItemObj,categoryL1List} =this.state
    const currentItem = categoryL1List.find((category,index)=>index==currentIndex)
    this.setState({
      currentItemObj:currentItem
    })
  }
  render() {
    const {currentItemObj,categoryL1List} =this.state
    return (
      <div id="fenlei">
        <CategoryHead/>
        <div className="contentContainer ">
          <div className="left_category_container">
            <div className="category_inner">
              <ul className="list">
                {
                  categoryL1List.map((categoryL1,index)=>(
                    <li key={index}  className={currentItemObj.id==categoryL1.id?'item active':'item'} ref={index} onClick={(val)=>{
                      this.handleClick(index)
                    }
                    }>
                      <a href="javascript:;">{categoryL1.name}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          <RightItemList currentItemObj={currentItemObj} />
        </div>
      </div>
    )
  }
}