var React = require('react');
var Reqwest = require('reqwest');
var Header = require('./Header.jsx');
var CommentView = require('./CommentView.jsx');
// var Router = Router.Router.RouteHandler;
var Api = require('../utils/api.jsx');

module.exports = React.createClass({

  listPosts: function() {
    var posts = this.props.data.map(function(post) {
      return (
        <Post key={post.id} content={post.content} author={post.user.handle} />
      );
    });

    return (
      <ul className="posts-list">
        {posts}
      </ul>
    );
  },
  render: function(){
    return (
      <div></div>
    );
  }
});
