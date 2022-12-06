<?php
    $username = $_POST['username'];
    $password = $_POST['password'];
    if (empty($username) || empty($password)) {
        header('Location: login-page.php?error=2');
        exit();
    }
    $dbPassword = file_get_contents('dbPassword.txt');
    $host_name = '';
    $database = '';
    $user_name = '';
    $pass_word = $dbPassword;
    $conn = mysqli_connect($host_name, $user_name, $pass_word, $database);
    $create_table = "CREATE TABLE IF NOT EXISTS `users` (
        `id` int(11) NOT NULL AUTO_INCREMENT,
        `username` varchar(255) NOT NULL,
        `password` varchar(255) NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;";
    if (mysqli_connect_errno()) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }
    mysqli_query($conn, $create_table); 
    $query = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
    $result = mysqli_query($conn, $query);
    if (mysqli_num_rows($result) > 0) {
        session_start();
        // store username in cookie
        setcookie('username', $username, time() + (86400 * 30), "/");
        header('Location: index.php');
    } else {
        header('Location: login-page.php?error=1');
    }
?>