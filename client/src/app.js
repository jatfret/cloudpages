import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import createHistory from 'history/createBrowserHistory'
import createHistory from 'history/createHashHistory'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

import store from './redux/store.js'

import Home from './pages/home/home.js'
import Detail from './pages/detail/detail.js'
import Demos from './pages/demos/demos.js'
import Resume from './pages/resume/resume.js'
import Admin from './pages/admin/admin.js'

const history = createHistory()

ReactDOM.render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/detail" component={Detail}/>
        <Route path="/demos" component={Demos}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/admin" component={Admin}/>
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
