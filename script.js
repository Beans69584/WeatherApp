apiKey = "";
mapsKey = "";
function getWeather() {
  var city = document.getElementById("search").value;
  var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = function () {
    document.getElementById("search").style.display = "none";
    document.getElementById("searchButton").style.display = "none";
    var response = JSON.parse(request.responseText);
    // get the timezone offset for the city
    var timezoneOffset = response.timezone;
    // get the time of day in the city
    var time = new Date();
    var timeOffset = time.getTime() + time.getTimezoneOffset() * 60000;
    var timeInCity = new Date(timeOffset + timezoneOffset * 1000);
    var hours = timeInCity.getHours();
    // get the time of sunrise and sunset in the city
    console.log(hours);
    if (hours >= 18 && hours < 22) {
      document.body.style.transition = "0.5s";
      document.body.style.backgroundImage = "url('https://i.gifer.com/Ire.gif')";
    }
    // check if it's past 10pm and before 6am
    else if (hours >= 22 || hours < 6) {
      document.body.style.transition = "0.5s";
      document.body.style.backgroundImage = "url('https://acegif.com/wp-content/uploads/gifs/starfall-gif-46.gif')";
    }
    // check if it's past 6am and before 12pm
    else if (hours >= 6 && hours < 12) {
      document.body.style.transition = "0.5s";
      document.body.style.backgroundImage = "url('https://i.gifer.com/69x.gif')";
    }
    // check if it's past 12pm and before 6pm
    else if (hours >= 12 && hours < 18) {
      document.body.style.transition = "0.5s";
      document.body.style.backgroundImage = "url('https://i.gifer.com/7ZQ7.gif')";
    }
    var conditions = response.weather[0].description;
    var temp = response.main.temp;
    var minMax = response.main.temp_min + " - " + response.main.temp_max;
    var wind = response.wind.speed;
    var humidity = response.main.humidity;
    var pressure = response.main.pressure;
    var countryCode = response.sys.country;
    var coordinates = response.coord.lat + ", " + response.coord.lon;
    var windMph = wind * 2.23694;
    var windMphRounded = Math.round(windMph * 100) / 100;
    console.info(`The temperature in ${city} is ${temp} degrees.`);
    document.getElementById("tempValue").style.display = "block";
    document.getElementById("cityName").innerHTML = `${city}, ${countryCode}`;
    document.getElementById("coords").innerHTML = `${coordinates}`;
    document.getElementById("temp").innerHTML = "Temp: " + temp + "°C";
    document.getElementById("weather").innerHTML =
      "Current conditions: " + conditions;
    document.getElementById("minMax").innerHTML =
      "Temperature range: " + minMax + "°C";
    document.getElementById("windSpeed").innerHTML =
      "Wind speed: " + windMphRounded + "mph";
    document.getElementById("humidity").innerHTML =
      "Humidity: " + humidity + "%";
    document.getElementById("pressure").innerHTML =
      "Pressure " + pressure + "hPa";
    var embedLink = `https://www.google.com/maps/embed/v1/place?key=${mapsKey}&q=${city}`;
    var embed = document.getElementById("embed");
    embed.setAttribute("src", embedLink);
  };
  request.send();
  console.log("Running getWeather");
  setInterval(getWeather, 60000);
}
function buttonClicked() {
  getWeather();
}
var button = document.getElementById("searchButton");
button.addEventListener("click", buttonClicked);
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}
function showPosition(position) {
  // get time of day in the user's location 
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var time = hours + ":" + minutes + ":" + seconds;
  // check if it's past 6pm and before 10pm 
  if (hours >= 18 && hours < 22) {
    document.body.style.transition = "0.5s";
    document.body.style.backgroundImage = "url('https://i.gifer.com/Ire.gif')";
  }
  // check if it's past 10pm and before 6am
  else if (hours >= 22 || hours < 6) {
    document.body.style.transition = "0.5s";
    document.body.style.backgroundImage = "url('https://acegif.com/wp-content/uploads/gifs/starfall-gif-46.gif')";
  }
  // check if it's past 6am and before 12pm
  else if (hours >= 6 && hours < 12) {
    document.body.style.transition = "0.5s";
    document.body.style.backgroundImage = "url('https://i.gifer.com/69x.gif')";
  }
  // check if it's past 12pm and before 6pm
  else if (hours >= 12 && hours < 18) {
    document.body.style.transition = "0.5s";
    document.body.style.backgroundImage = "url('https://i.gifer.com/7ZQ7.gif')";
  }
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = function () {
    document.getElementById("search").style.display = "none";
    document.getElementById("searchButton").style.display = "none";
    var response = JSON.parse(request.responseText);
    var city = response.name;
    var conditions = response.weather[0].description;
    var temp = response.main.temp;
    var minMax = response.main.temp_min + " - " + response.main.temp_max;
    var wind = response.wind.speed;
    var humidity = response.main.humidity;
    var pressure = response.main.pressure;
    var sunrise = new Date(response.sys.sunrise * 1000);
    var sunset = new Date(response.sys.sunset * 1000);
    var sunriseTime = sunrise.getHours() + ":" + sunrise.getMinutes();
    var sunsetTime = sunset.getHours() + ":" + sunset.getMinutes();
    var countryCode = response.sys.country;
    var coordinates = response.coord.lat + ", " + response.coord.lon;
    var windMph = wind * 2.23694;
    var windMphRounded = Math.round(windMph * 100) / 100;
    console.info(`The temperature in ${city} is ${temp} degrees.`);
    document.getElementById("tempValue").style.display = "block";
    document.getElementById("cityName").innerHTML = `${city}, ${countryCode}`;
    document.getElementById("coords").innerHTML = `${coordinates}`;
    document.getElementById("temp").innerHTML = "Temp: " + temp + "°C";
    document.getElementById("weather").innerHTML =
      "Current conditions: " + conditions;
    document.getElementById("minMax").innerHTML =
      "Temperature range: " + minMax + "°C";
    document.getElementById("windSpeed").innerHTML =
      "Wind speed: " + windMphRounded + "mph";
    document.getElementById("humidity").innerHTML =
      "Humidity: " + humidity + "%";
    document.getElementById("pressure").innerHTML =
      "Pressure " + pressure + "hPa";
    var embedLink = `https://www.google.com/maps/embed/v1/place?key=${mapsKey}&q=${lat},${lon}`;
    var embed = document.getElementById("embed");
    embed.setAttribute("src", embedLink);
  };
  request.send();
  console.log("Running getWeather");
  setInterval(getWeather, 60000);
}
function getLocationImperial() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPositionImperial);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPositionImperial(position) {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var time = hours + ":" + minutes + ":" + seconds;
  // check if it's past 6pm and before 10pm 
  if (hours >= 18 && hours < 22) {
    document.body.style.transition = "0.5s";
    document.body.style.backgroundImage = "url('https://i.gifer.com/Ire.gif')";
  }
  // check if it's past 10pm and before 6am
  else if (hours >= 22 || hours < 6) {
    document.body.style.transition = "0.5s";
    document.body.style.backgroundImage = "url('https://acegif.com/wp-content/uploads/gifs/starfall-gif-46.gif')";
  }
  // check if it's past 6am and before 12pm
  else if (hours >= 6 && hours < 12) {
    document.body.style.transition = "0.5s";
    document.body.style.backgroundImage = "url('https://i.gifer.com/69x.gif')";
  }
  // check if it's past 12pm and before 6pm
  else if (hours >= 12 && hours < 18) {
    document.body.style.transition = "0.5s";
    document.body.style.backgroundImage = "url('https://i.gifer.com/7ZQ7.gif')";
  }
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = function () {
    document.getElementById("search").style.display = "none";
    document.getElementById("searchButton").style.display = "none";
    var response = JSON.parse(request.responseText);
    var city = response.name;
    var conditions = response.weather[0].description;
    var temp = response.main.temp;
    var minMax = response.main.temp_min + " - " + response.main.temp_max;
    var wind = response.wind.speed;
    var humidity = response.main.humidity;
    var pressure = response.main.pressure;
    var sunrise = new Date(response.sys.sunrise * 1000);
    var sunset = new Date(response.sys.sunset * 1000);
    var sunriseTime = sunrise.getHours() + ":" + sunrise.getMinutes();
    var sunsetTime = sunset.getHours() + ":" + sunset.getMinutes();
    var countryCode = response.sys.country;
    var coordinates = response.coord.lat + ", " + response.coord.lon;
    var pressureIn = pressure * 0.02953;
    var pressureInRounded = Math.round(pressureIn * 100) / 100;
    var windKm = wind * 1.60934;
    var windKmRounded = Math.round(windKm * 100) / 100;
    console.info(`The temperature in ${city} is ${temp} degrees.`);
    document.getElementById("tempValue").style.display = "block";
    document.getElementById("cityName").innerHTML = `${city}, ${countryCode}`;
    document.getElementById("coords").innerHTML = `${coordinates}`;
    document.getElementById("temp").innerHTML = "Temp: " + temp + "°F";
    document.getElementById("weather").innerHTML =
      "Current conditions: " + conditions;
    document.getElementById("minMax").innerHTML =
      "Temperature range: " + minMax + "°F";
    document.getElementById("windSpeed").innerHTML =
      "Wind speed: " + windKmRounded + "km/h";
    document.getElementById("humidity").innerHTML =
      "Humidity: " + humidity + "%";
    document.getElementById("pressure").innerHTML =
      "Pressure " + pressureInRounded + "inHg";
    var embedLink = `https://www.google.com/maps/embed/v1/place?key=${mapsKey}&q=${lat},${lon}`;
    var embed = document.getElementById("embed");
    embed.setAttribute("src", embedLink);
  };
  request.send();
  console.log("Running getWeather");
  setInterval(getWeather, 60000);
}
function getWeatherImperial() {
  var city = document.getElementById("search").value;
  var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = function () {
    document.getElementById("search").style.display = "none";
    document.getElementById("searchButton").style.display = "none";
    var response = JSON.parse(request.responseText);
    var time = response.dt; // time of data calculation, unix, UTC
    var timetoday = new Date(time * 1000);
    var hours = timetoday.getHours();
    if (hours >= 18 && hours < 22) {
      document.body.style.transition = "0.5s";
      // https://i.gifer.com/CUZ.gif
      document.body.style.backgroundImage = "url('https://i.gifer.com/Ire.gif')";
    }
    // check if it's past 10pm and before 6am
    else if (hours >= 22 || hours < 6) {
      document.body.style.transition = "0.5s";
      document.body.style.backgroundImage = "url('https://acegif.com/wp-content/uploads/gifs/starfall-gif-46.gif')";
    }
    // check if it's past 6am and before 12pm
    else if (hours >= 6 && hours < 12) {
      document.body.style.transition = "0.5s";
      document.body.style.backgroundImage = "url('https://i.gifer.com/69x.gif')";
    }
    // check if it's past 12pm and before 6pm
    else if (hours >= 12 && hours < 18) {
      document.body.style.transition = "0.5s";
      document.body.style.backgroundImage = "url('https://i.gifer.com/7ZQ7.gif')";
    }
    var conditions = response.weather[0].description;
    var temp = response.main.temp;
    var minMax = response.main.temp_min + " - " + response.main.temp_max;
    var wind = response.wind.speed;
    var humidity = response.main.humidity;
    var pressure = response.main.pressure;
    var sunrise = new Date(response.sys.sunrise * 1000);
    var sunset = new Date(response.sys.sunset * 1000);
    var sunriseTime = sunrise.getHours() + ":" + sunrise.getMinutes();
    var sunsetTime = sunset.getHours() + ":" + sunset.getMinutes();
    var countryCode = response.sys.country;
    var coordinates = response.coord.lat + ", " + response.coord.lon;
    var pressureIn = pressure * 0.02953;
    var pressureInRounded = Math.round(pressureIn * 100) / 100;
    var windKm = wind * 1.60934;
    var windKmRounded = Math.round(windKm * 100) / 100;
    console.info(`The temperature in ${city} is ${temp} degrees.`);
    document.getElementById("tempValue").style.display = "block";
    document.getElementById("cityName").innerHTML = `${city}, ${countryCode}`;
    document.getElementById("coords").innerHTML = `${coordinates}`;
    document.getElementById("temp").innerHTML = "Temp: " + temp + "°F";
    document.getElementById("weather").innerHTML =
      "Current conditions: " + conditions;
    document.getElementById("minMax").innerHTML =
      "Temperature range: " + minMax + "°F";
    document.getElementById("windSpeed").innerHTML =
      "Wind speed: " + windKmRounded + "km/h";
    document.getElementById("humidity").innerHTML =
      "Humidity: " + humidity + "%";
    document.getElementById("pressure").innerHTML =
      "Pressure " + pressureInRounded + "inHg";
    var embedLink = `https://www.google.com/maps/embed/v1/place?key=${mapsKey}&q=${city}`;
    var embed = document.getElementById("embed");
    embed.setAttribute("src", embedLink);
  };
  request.send();
  console.log("Running getWeather");
  setInterval(getWeather, 60000);
}
function buttonClicked() {
  getWeather();
}