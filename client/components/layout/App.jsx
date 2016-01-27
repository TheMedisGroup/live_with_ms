var React = require('react');
var Reqwest = require('reqwest');
var Header = require('./Header.jsx');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Uri = require('jsuri');
var Link = Router.Link;
import 'bootstrap/dist/css/bootstrap.css';

module.exports = React.createClass({
  getDefaultProps: function() {
    return {origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''};
  },
  getInitialState: function() {
    return {signedIn: false, currentUser: {handle: ''}};
  },
  componentWillMount: function() {
    var jwt = new Uri(location.search).getQueryParamValue('jwt')
    if (!!jwt) {sessionStorage.setItem('jwt', jwt);}
  },

  // Uri ('jsuri') dependency parses URL for JWT value, then extracts it and sets in session storage (not localstorage, app memory or cookie)

  componentDidMount: function() {
    if (!!sessionStorage.getItem('jwt')) {this.currentUserFromAPI();}
  },
  currentUserFromAPI: function() {
    this.readFromAPI(this.props.origin + '/current_user', function(user) {
      this.setState({signedIn: true, currentUser: user});
    }.bind(this));
  },
  render: function() {
    return (
      <div id="app" className={Header}>
        <p> hello world </p>
      </div>
    )
  }
});


// # renders both Menu component and RouteHandler (which manages View and About as listed in routes.jsx)


// App.jsx = primary root component of React app - main stateholder
