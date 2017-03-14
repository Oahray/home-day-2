var request = require('request');
 
var options = {
  url: 'https://api.fixer.io/latest?base=USD',
  headers: {
    'User-Agent': 'request'
  }
};
 
function callback(error, response, body) {
  if (!error) {
  	body = JSON.parse(body);
    console.log(body);
  }
  else {
  	console.log("Unable to display latest currency data. Please check your internet connection and try again.")
  }
};
 
request(options, callback);
