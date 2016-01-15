var React = require('react');
var Router = require('react-router');
var App = require('../components/layout/App.jsx');
var Search = require('../components/layout/Search.jsx');
var SpewsView = require('../components/spews/View.jsx');
var AboutView = require('../components/static/AboutView.jsx');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = React.createClass({
  render : function(){
    (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
           <Route path="about" component={AboutView} />
        </Route>
      </Router>
    )
  }

});
