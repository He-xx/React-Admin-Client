/*
 * @作用:
 * @Author: xufanghe
 * @Date: 2019-12-04 17:03:05
 * @LastEditors: xufanghe
 * @LastEditTime: 2019-12-05 16:52:25
 */
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
/*
应用的更组件   组件名必须大写
*/
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/*只匹配其中一个*/}
          <Route path="/login" component={Login}></Route>
          <Route path="/" component={Admin}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}
