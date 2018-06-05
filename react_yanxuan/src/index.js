import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter,Route,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import './assets/css/reset.css'
import './mock/mockServer'
import store from './redux/store'
import Main from './Containers/Main'
ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path='/home' component={Main}></Route>
        <Route component={Main}></Route>
      </Switch>
    </HashRouter>
  </Provider>

), document.getElementById('root'))