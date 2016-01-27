var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Reqwest = require('reqwest');
var HUMAN_CLIENT_ID = 'HUMAN_CLIENT_ID';
var CLIENT_SECRET = 'CLIENT_SECRET';

module.exports = React.createClass({

  showHeader: function(){
    var options = {
      clientUserId: encodeURIComponent('UNIQUE_ID_FOR_YOUR_USER'),
      clientId: HUMAN_CLIENT_ID, // grab it from app settings page
      publicToken: '',  // Leave blank for new users
      clientSecret: CLIENT_SECRET,
      modal: 1,

      finish: function(err, sessionTokenObject) {
        $.post('/your-servers-endpoint', sessionTokenObject, function(res){
          app.post('/connect/finish', function(req, res) {
            var sessionTokenObject = req.body;
            sessionTokenObject.clientSecret = 'CLIENT_SECRET';

            // send request to Human API
            // Note: this example uses the node.js 'request' library
            request({
              method: 'POST',
              uri: 'https://user.humanapi.co/v1/connect/tokens',
              json: sessionTokenObject
            }, function(err, resp, body) {
              if(err) return res.send(422);

              //returned payload from Human API
              //store these values with your local user record
              //you will need them to query data and to re-open Human Connect

              res.send(201, body);
            });

          });
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
      var signingLink = <li><a href={this.props.origin + '/request_token'}>Login</a></li>;
    }

    return (
      <div id="header">
        <div className="container">
          <ul className="nav nav-tabs">
            <li><Link to="search">Search</Link></li>
            <li><Link to="about">About</Link></li>
            {signingLink}

            <div className="pull-right">

              <span
                onClick={this.handleClickLink}>
                <img id='connect-health-data-btn'
                  src='https://connect.humanapi.co/assets/button/blue.png'
                  />
              </span>
            </div>

          </ul>
        </div>
      </div>
    );
  }
});
