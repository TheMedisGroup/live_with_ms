var React = require('react');
var Router = require('react-router');
var App = require('../components/layout/App.jsx');
var AboutView = require('../components/static/AboutView.jsx');
var HomePage = require('../components/static/HomePage.jsx');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var Header = require('../components/layout/Header.jsx');
var Feed = require('../components/layout/Feed.jsx');

module.exports = (
    <Route name="app" path="/" handler={App}>
      <DefaultRoute name="home" handler={HomePage} />
      <Route path="feed" component={Feed} />
      {/*<Route name="users" component={UsersView} />*/}
      <Route name="about" handler={AboutView} />
    </Route>
);
