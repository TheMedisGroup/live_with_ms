import React from 'react'

module.exports = React.createClass({
  render: function() {
    return (
      <div className="container" id="about-view">
        <p>This was develped for everyone fighting for good health.</p>
        <h1>about live with ms</h1>
        <li>a testing app integrating stateless rails backend with a <a target="_blank" target="https://facebook.github.io/react/">react</a> client frontend.</li>
        <li>app will utilize <a target="_blank" target="https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS">cors</a> (cross origin requests) to serve data between backend and frontend</li>
        <li>module-bundling provided by <a target="_blank" target="https://webpack.github.io/">webpack</a></li>
        <li>clientside routing provided by <a target="_blank" target="https://github.com/rackt/react-router">react-router</a></li>
        <li>css modules provided by <a target="_blank" target="http://getbootstrap.com/">bootstrap css</a></li>
        <li>api data integration provided by <a target="_blank" target="https://github.com/rails-api/rails-api">rails-api</a></li>
        <li>promise-based http client for api data on client side provided by <a target="_blank" target="https://www.npmjs.com/package/axios">axios</a></li>
        <li>stateless sign-in and identity authentication provided by <a target="_blank" target="https://github.com/oauth-xx/oauth-ruby">oauth-ruby</a> and a purpose-specific <a target="https://dev.twitter.com/">twitter dev app</a></li>
        <li><a target="_blank" target="http://jwt.io/">json web tokens</a> for server-client negotiations and authentication</li>
        <p></p>
        <li>data provided by human api. © <a target="_blank" target="https://www.humanapi.co/">Human api</a></li>
        <li>coded by Michael Medis (<a target="_blank" target="https://github.com/mikeMedis/">mikeMedis</a>) with Ricky Panzer @ <a target="http://bloc.io">BLOC</a></li>
        <li>additional assistance & guidance from blogposts by <a target="_blank" target="https://twitter.com/fredguest">Fred Guest</a>, <a target="https://twitter.com/sg_in_sf">Stephen Grider</a>, and <a target="https://twitter.com/tylermcginnis33">Tyler McGinnis</a>.</li>

      </div>
    );
  }
});
