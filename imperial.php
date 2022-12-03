<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
        <script>
        // make it run when the page is loaded
    window.onload = function() {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var time = hours + ":" + minutes + ":" + seconds;
        // check if it's past 6pm and before 10pm 
        if (hours >= 18 && hours < 22) {
            document.body.style.transition = "0.5s";
            document.body.style.backgroundImage = "url('https://i.imgur.com/hE4v6oQ.jpg')";
        }
        // check if it's past 10pm and before 6am
        else if (hours >= 22 || hours < 6) {
            document.body.style.transition = "0.5s";
            document.body.style.backgroundImage = "url('https://i.imgur.com/MJ90qvd.png')";
        }
        // check if it's past 6am and before 12pm
        else if (hours >= 6 && hours < 12) {
            document.body.style.transition = "0.5s";
            document.body.style.backgroundImage = "url('https://i.imgur.com/sWqlJPJ.jpg')";
        }
        // check if it's past 12pm and before 6pm
        else if (hours >= 12 && hours < 18) {
            document.body.style.transition = "0.5s";
            document.body.style.backgroundImage = "url('https://i.imgur.com/4Sp18Vp.jpg')";
        }
    }
    </script>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="favicon" href="https://beansbbeans.com/weather/favicon.ico">
    <link rel="stylesheet" href="./styles.css">
    <script src="./script.js"></script>
    <title>Real Time Weather App</title>
</head>
<body>
    <ul>
        <li><a class="active" href="#home" onclick="window.location.reload(true)">Home</a></li>
        <li style="float:right"><a href="units.php?fahrenheit=false">Metric</a></li>
        <li style="float:right"><a class="locator" href="#home" onclick="getLocationImperial()">Current Location</a></li>
        <?php if (isset($_SESSION['username'])) { ?>
            <li style="float:right"><a class="locator" href="#home" onclick="window.location.href='logout.php'">Logout</a></li>
        <?php } else { ?>
            <li style="float:right"><a class="locator" href="#home" onclick="window.location.href='login-page.php'">Login</a></li>
            <li style="float:right"><a class="locator" href="#home" onclick="window.location.href='register-page.php'">Register</a></li>
        <?php } ?>
    </ul>   
    <center>
    <div class="container">
        <div class="app-title">
            <h1>Real Time Weather</h1>
            <input type="text" id="search" placeholder="Enter City Name" onkeypress="if (event.keyCode == 13) getWeatherImperial()">
            <button id="searchButton" onclick="getWeatherImperial()">Search</button>
        </div>
        <div class="result" id="tempValue" style="display:none">
            <div class="container-dark">
                <h2 id="cityName"></h2>
                <h2 id="coords"></h2>
                <h1 id="temp"></h1>
                <h3 id="weather"></h3>
                <h3 id="minMax"></h3>
                <h3 id="windSpeed"></h3>
                <h3 id="humidity"></h3>
                <h3 id="pressure"></h3>
                <center>
                <iframe id="embed" src="" width:50px height:100px ></iframe>
                </center>
            </div>
        </div>
    </center>
    </div>
    <footer class="E">
        <p>Powered by <a href="https://openweathermap.org/">OpenWeatherMap</a> and <a href="https://maps.google.com">Google Maps</a></p>
    </footer>
</body>
</html>