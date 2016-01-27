var React = require('react');

module.exports = React.createClass({

  getInitialState: function() {
    return {data: []};
  },

  render: function() {
    return (
      <div className="postview">
        <h2>Posts!</h2>
      </div>
    )
  },

  renderTopics: function() {

    return (
      <ul>
        <p>Posts</p>
        <div className="postTitle">
          <Link to={`/posts/${post.id}`}>
            <h4>{post.title}</h4>
          </Link>
        </div>
        <div>
          <span className="postId"> {post.id} </span>
          <span className="postAvatar"><img src={post.avatar}></img></span><br/>
          <span className="postBody"> {post.body} </span>
        </div>
      </ul>
    )
  };
