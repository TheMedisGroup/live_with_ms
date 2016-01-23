var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var HUMAN_CLIENT_ID = process.env['HUMAN_CLIENT_ID'];

module.exports = React.createClass({
  handleSignOutLink: function() {
    var options = {
      publicToken: 'PUBLIC_TOKEN_FOR_THE_USER'
    }
    HumanConnect.open(options);
  },
  handleClickLink: function(){
    var options = {
      clientUserId: encodeURIComponent('UNIQUE_ID_FOR_YOUR_USER'),
      clientId: HUMAN_CLIENT_ID, // grab it from app settings page
      publicToken: '',  // Leave blank for new users

      finish: function(err, sessionTokenObject) {
        /* Called after user finishes connecting their health data
        You need to post `sessionTokenObject` to your server to then:
        1. Append your `clientSecret` to it
        2. Send send it to our server for user credentials

        Sending a POST request with jQuery might look like this
        (it's not necessary to use jQuery):
        */
        $.post('/your-servers-endpoint', sessionTokenObject, function(res){

        });

        // Include code here to refresh the page.

      },
      close: function() {
        /* Optional callback called when a user closes the popup
        without connecting any data sources */
      },
      error: function(err) {
        /* Optional callback called if an error occurs when loading
        the popup. */

        // `err` has fields: `code`, `message`, `detailedMessage`
      }
    }
    HumanConnect.open(options);
  },
  render: function() {
    if (this.props.signedIn) {
      var signingLink = <li><span onClick={this.handleSignOutLink}>logout</span></li>;
      } else{
        var signingLink = <li><a href={this.props.origin + '/request_token'}>login</a></li>;
        }
        return (
          <div id="menu">
            <span id="menu-link" onClick={this.props.sendMenuClick}><span></span></span>
            <div id="menu-list">
              <div className="pure-menu pure-menu-open">
                <span className="pure-menu-heading"></span>
                <ul>
                  <li><Link to="search">Search</Link></li>
                  <li><Link to="about">About</Link></li>
                  <li><div className="rollover"> <a target="_blank" target="http://www.nationalmssociety.org/"></a> </div></li>
                  <li><div className="rolloverlogo"> <a target="_blank" target="https://github.com/mikeMedis"></a> </div></li>
                  {signingLink}
                  <li><span onClick={this.handleClickLink}><img id='connect-health-data-btn' src='https://connect.humanapi.co/assets/button/blue.png'/></span></li>
                </ul>
                <p></p>
                <p></p>
              </div>
            </div>
          </div>
          );
        }
      });
