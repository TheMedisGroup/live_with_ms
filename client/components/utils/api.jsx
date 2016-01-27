var React = require('react');
var Reqwest = require('reqwest');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Uri = require('jsuri');


var Api = {

  // DidMount checks sessionStorage for jwt, then calls currentUserFromAPI to assign object from jwt from parsed-URL to currentUser state

  readFromAPI: function(url, successFunction) {
    Reqwest({
      url: url,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      headers: {'Authorization': sessionStorage.getItem('jwt')},
      success: successFunction,
      error: function(error) {
        console.error(url, error['response']);
        location = '/';
      }
    });
  },

  // Reqwest is npm dependency used to parse json api via parameter arguments

  writeToAPI: function(method, url, data, successFunction) {
    Reqwest({
      url: url,
      data: data,
      type: 'json',
      method: method,
      contentType: 'application/json',
      headers: {'Authorization': sessionStorage.getItem('jwt')},
      success: successFunction,
      error: function(error)  {
        console.error(url, error['response']);
        location = '/';
      }
    });
  }
}

module.exports = Api;
