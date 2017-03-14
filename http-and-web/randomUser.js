var request = require('request');

var options = {
  url: 'https://randomuser.me/api/',
  headers: {
    'User-Agent': 'request',
    'Accept' : "json"
  }
};
 
function callback(error, response, body) {
  if (!error) {
  	var user = JSON.parse(body)["results"];
    console.log(user);
  }
  else {
  	console.log("Oops! Unable to snap my awesome fingers and make a random person appear. Please check your internet connection and try again.")
  }
};

request(options, callback);
