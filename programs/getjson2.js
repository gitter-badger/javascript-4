var jquery = require('jquery');
var $ = jquery.create();

$.getJSON('http://twitter.com/status/user_timeline/treason.json?count=10&callback=?',function(data) {
  console.log(data);
});

