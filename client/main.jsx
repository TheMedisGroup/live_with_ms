require('./assets/app.css');
require('./assets/menu.css');
require('./assets/spews.css');

import React from 'react'
import {browserHistory, Router, Route, Link} from 'react-router'
import { render } from 'react-dom'

import routes from './config/routes.jsx'
import App from './components/layout/App.jsx'
import AboutView from './components/static/AboutView.jsx'

console.log("hellos");

// ReactDOM.render(
//   (<Router>{routes}</Router>),
//   document.getElementById('app')
// );

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
       <Route path="about" component={AboutView} />
    </Route>
  </Router>

), document.getElementById('app'))
