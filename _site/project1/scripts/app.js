
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
