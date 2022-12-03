<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="login.css">
    <title>Login</title>
    <style>
        body {
            background-image: url('https://i.imgur.com/a9kTj6V.jpg');
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: cover;
        }
    </style>
    <script src='https://www.google.com/recaptcha/api.js'></script>
</head>
<body>
    <ul>
        <li><a class="active" href="./index.php">Home</a></li>
    </ul>
    <center>
    <div class="loginContainer" id="loginBox">
        <center>
        <?php if (isset($_GET['error']) && $_GET['error'] == 1) { ?>
            <div class="error">Invalid username or password</div>
        <?php } ?>
        <?php if (isset($_GET['error']) && $_GET['error'] == 2) { ?>
            <div class="error">You have to enter a username and password</div>
        <?php } ?>
        <form action="login.php" method="post">
            <input id="username" type="text" name="username" id="username" placeholder="Username">
            <br>
            <input id="password" type="password" name="password" id="password" placeholder="Password">
            <br>
            <input id="submit" type="submit" value="Login">
        </form>
    </center>
    </div>
</center>
    <footer class="E">
        <p>Powered by <a href="https://openweathermap.org/">OpenWeatherMap</a> and <a href="https://maps.google.com">Google Maps</a></p>
    </footer>
</body>
</html>