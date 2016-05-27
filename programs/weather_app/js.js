( function(window, undefined){
  
  var WeatherGetter = function(){
    var weather_data;

    var c2f = function(c){
      return (c*1.8 + 32);
    };
    
    var f2c = function(f){
      return ((f-32)/1.8);
    };
    
    var images = {
      clouds: "http://clipartion.com/wp-content/uploads/2015/12/thunder-cloud-icon.png",
      rainy: "",
      hot: "",
      winter: "",
      snow: "",
      clear: "http://www.clearalliance.org/wp-content/uploads/2015/01/CLEAR-seedaisies.jpg"
    };
    
  if(navigator.geolocation){
  
    navigator.geolocation.getCurrentPosition(function(position){
      var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + "&APPID=c06283133a497bd0bb765056093a754b";
      //alert(url);
      
      $.getJSON(url, function(json){
          weather_data = json; 
        $('#bkg').css('background-image', 'url(' + images[weather_data["weather"][0]["main"].toLowerCase()] + ')');
//          $("#temprature").text(JSON.stringify(weather_data));
        $("#temprature").text((weather_data.main.temp - 273.15) + " degree celsius").addClass('text-center');
      
      })
      .fail(function(err){
        alert("error occured:" + err.status);
      })
      .always(function(){
        console.log("always print");
      });
    });
  }
    this.getWeather = function(){
    return weather_data;
  };
  };
  
  
  
  window.WeatherGetter = WeatherGetter;
}) (window);
  
$(document).ready(function(){
  //google.load('search', '1');
  var weather = new WeatherGetter();
  weather.getWeather();
  
});

