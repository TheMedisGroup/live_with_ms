var request = require('request');

function getData(username){
  ;
};

var helpers = {
  getHealthInfo: function(username){
    return axios.all([getData(username)])
      .then(function(arr){
        return {
          data: arr[0].data
        }
      });
  }
};

module.exports = helpers;
