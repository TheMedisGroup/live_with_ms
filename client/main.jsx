require('./assets/feed.scss');
require('./assets/header.scss');
require('./assets/homepage.scss');
import React from 'react'
import {browserHistory, Router, Route, Link} from 'react-router'
import { render } from 'react-dom'

import routes from './config/routes.jsx'
import App from './components/layout/App.jsx'
import AboutView from './components/static/AboutView.jsx'
import Header from './components/layout/App.jsx'
import HomePage from './components/static/HomePage.jsx'
var Feed = require('./components/layout/Feed.jsx');




// ReactDOM.render(
//   (<Router>{routes}</Router>),
//   document.getElementById('app')
// );

render((
  <Router history={browserHistory}>
    <Route path="/" component={HomePage}>
      <Route path="feed" component={Feed} />
      {/*<Route name="users" component={UsersView} />*/}
      <Route name="about" component={AboutView} />
    </Route>
  </Router>

), document.getElementById('homepage'))
