
// namespace 'app'
var app = app || {};
// fetch the weather
app.fetchWeather = function() {

  $.getJSON("http://api.openweathermap.org/data/2.5/forecast/city?id=4887398&APPID=1111111111", function(data) {
    app.renderWeather(data, "#");
  });
  return true;

};
// render the weather
app.renderWeather = function(weatherData, selectorString) {

  var template = weatherData.city.name + ", " + weatherData.city.country + " is Great and the current weather is a  " + weatherData.list[0].weather[0].description;

  $('#rock').html(template);
  return true;

};
// when the document is ready
$(document).ready(function() {
  console.log("let's get ready to rumble!");
  var weatherData = app.fetchWeather();
});






















//
// $.getJSON("http://api.openweathermap.org/data/2.5/forecast/city?id=4887398&APPID=1111111111", function(data) {
// // //     app.renderWeather(data, "#");
//    });
//
//
// var getRequest = {
//   type:'get',
//   url: 'http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=655759047f1e7b09f241de6e941418ee
// '
//   dataType: 'json',
//   success: function(data) {
//       $(".weather").append("<span class='finallytherock'>The current weather is:</span>" +  Math.round(data.main.temp * 9/5 - 459.67) + " degrees, with " + data.weather[0].description);
//       console.dir(data);
//   },
//   error: function() {
//     console.log(error, no soup fur you);
//
//   }
//
// };
//
//
// //Get weather api
// var getWeather = {
//   type: 'get',
//   url: 'http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=655759047f1e7b09f241de6e941418ee
// ',
//   data: 'json',
//   success: function(data){
//     console.log("I did it bitches!");
//     console.dir(data);
//     $('.weather').append('<li class="skies">' + 'The current temparture is '+ Math.round(data.main.temp * 9/5 - 459.67)+ ' degrees with ' + data.weather[0].description + '.' +'</li>');
//
//   },error:  function () {
//     console.log("I didn't work you big dumb idiot");
//   }
//
//
// }//end of get weather object
//
// $.ajax(getWeather);
// //end of document.ready
