import React from 'react';
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import history from './history' //我们用的是browser history
import App from './App';
import Home from './pages/home'
import Admin from './pages/admin'
import Login from './pages/login'
import Order from './pages/order'
export default class ERoute extends React.Component {
  render () {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/">
            <App>
              <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route path="/home">
                  <Home>
                    <Switch>
                      <Route exact path="/home" component={Admin}></Route>
                      <Route path="/home/order" component={Order}></Route>
                      <Redirect to="/home" />
                    </Switch>
                  </Home>
                </Route>
                <Redirect to="/" />
              </Switch>
            </App>
          </Route>
        </Switch>
      </Router>
    )
  }
}