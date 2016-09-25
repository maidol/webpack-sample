//greeter.js 
var config = require('./config.json');
module.exports = function() {
  var greet = document.createElement('div');
  // greet.textContent = "Hi there and greetings!";
  greet.textContent = config.greetText;
  return greet;
};