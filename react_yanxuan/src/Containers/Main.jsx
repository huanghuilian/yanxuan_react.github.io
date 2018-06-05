import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import './main.styl'
import '../assets/css/reset.css'
import FooterNav from '../Components/FooterNav/FooterNav'
import Home from './Home/Home'
import ItemList from './ItemList/ItemList'
import Shiwu from './Shiwu/Shiwu'
import Category from './Category/Category'
import Search from './Search/Search'

import ShopCart from './ShopCart/ShopCart'
import Login from './Login/Login'
import Profile from './Profile/Profile'

class Main extends Component {
  render() {
    return (
      <div className="root">
        <Switch>
          <Route path='/home' component={Home}></Route>
          <Route path='/shiwu' component={Shiwu}></Route>
          <Route path='/category' component={Category}></Route>
          <Route path='/shopcart' component={ShopCart}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/profile' component={Profile}></Route>
          <Route path='/item/list' component={ItemList}></Route>
          <Route path='/search' component={Search}></Route>
          <Route component={Home} ></Route>
        </Switch>
        <footer>
          <FooterNav user={this.props.user}/>
        </footer>
      </div>
    )
  }
}
export default connect(
  (state)=>({user:state.users})
)(Main)