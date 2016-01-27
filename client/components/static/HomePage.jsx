var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Reqwest = require('reqwest');

import 'bootstrap/dist/css/bootstrap.css';

var HUMAN_CLIENT_ID = process.env['HUMAN_CLIENT_ID'];

module.exports = React.createClass({

  showButton: function(){
    var options = {
      clientUserId: encodeURIComponent('UNIQUE_ID_FOR_YOUR_USER'),
      clientId: HUMAN_CLIENT_ID, // grab it from app settings page
      publicToken: '',  // Leave blank for new users
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
    return (
      <div className="col col-md-12 text-center" style={{display: 'flex'}}>
        <span
          onClick={this.showButton}>
          <img id='connect-health-data-btn'
            src='https://connect.humanapi.co/assets/button/blue.png'
            />
        </span>
      </div>
    )
  }
})
