var React = require('react');

module.exports = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var title = this.refs.content.getDOMNode().value.trim();
    if (!content) {return;}
    if (this.props.signedIn) {
      this.props.writePostToAPI(JSON.stringify({post: {content: content}}));
      this.refs.title.getDOMNode().value = '';
      this.refs.title.getDOMNode().blur();
    } else {
      alert('Please sign in to post!');
    }
  },
  render: function() {
    return (
      <fieldset className="pure-group">
      <form className="post-form pure-form" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="post title " ref="title" />
      </form><br/>
    <button type="submit" className="pure-button pure-button-primary">Post Your Toughts!</button>
    </fieldset>
    );
  }
});
