var React = require('react');

module.exports = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var content = this.refs.content.getDOMNode().value.trim();
    if (!content) {return;}
    if (this.props.signedIn) {
      this.props.optimisticUpdate({id: 'fake-id', content: content, user: this.props.currentUser, characterId: this.props.characterId});
      this.props.writeSpewToAPI(JSON.stringify({spew: {content: content, character_id: this.props.characterId}}));
      this.refs.content.getDOMNode().value = '';
      this.refs.content.getDOMNode().blur();
    } else {
      alert('please sign up to spew!');
    }
  },
  render: function() {
    return (
      <form className="pure-form" onSubmit={this.handleSubmit}>
        <fieldset>
        <input type="text" placeholder="spew here..." ref="content" />
        <button type="submit" className={this.props.signedIn ? "pure-button pure-button-primary" : "button-error pure-button"}>spew</button>
        </fieldset>
      </form>
    );
  }
});


// preventDefault method on event (e) guards against event propagation (DOMNode value not set in recurrence)
// blur method shifts focus after resetting DOMNode value back to nil
// optimisticUpdate called with obj containing arbitrary 'fake-id', plus content and user of new spew being added
//   fake-id can be arbitrary string because it satisifies React's key attribute requirement
//   and it is unique from the other keys because they're all integer-specific ActiveRecord primary keys already in the collection
