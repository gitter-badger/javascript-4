var $ = require('jquery');
var lat=12.926808699999999;
var lon=77.6652166

var url = 'api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + "&APPID=c06283133a497bd0bb765056093a754b";
      //alert(url);
      $.getJSON(url, function(json){
        weather_data = json;
        //alert(JSON.stringify(json));
        $("#weather-data").text(JSON.stringify(weather_data));
      })
      .done(function(){
        console.log("success");
      })
      .fail(function(err){
        console.log("error occured:" + JSON.stringify(err));
      })
      .always(function(){
        console.log("always print");
      });
