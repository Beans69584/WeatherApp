<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="register.css">
    <title>Register</title>
    <style>
        body {
            background-image: url('https://i.imgur.com/a9kTj6V.jpg');
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: cover;
        }
    </style>
</head>
<body>
    <ul>
        <li><a class="active" href="./index.php">Home</a></li>
    </ul>
    <center>
    <div class="registerContainer" id="registerBox">
        <center>
        <form action="register.php" method="post">
            <?php if (isset($_GET['error']) && $_GET['error'] == 1) { ?>
                <div class="error">Something went wrong, please try again</div>
            <?php } ?>
            <?php if (isset($_GET['error']) && $_GET['error'] == 2) { ?>
                <div class="error">Username already exists</div>
            <?php } ?>
            <input id="username" type="text" name="username" id="username" placeholder="Username">
            <br>
            <input id="password" type="password" name="password" id="password" placeholder="Password">
            <br>
            <input id="submit" type="submit" value="Register">
        </form>
    </center>
    </div>
</center>
    <footer class="E">
        <p>Powered by <a href="https://openweathermap.org/">OpenWeatherMap</a> and <a href="https://maps.google.com">Google Maps</a></p>
    </footer>
</body>
</html>