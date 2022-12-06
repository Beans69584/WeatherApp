<?php
session_start();
// check if the username cookie is set and if so, check the account is valid
if (isset($_COOKIE['username'])) {
    $username = $_COOKIE['username'];
    $dbPassword = file_get_contents('dbPassword.txt');
    $host_name = 'db5011056244.hosting-data.io';
    $database = 'dbs9344275';
    $user_name = 'dbu3863425';
    $pass_word = $dbPassword;
    $conn = mysqli_connect($host_name, $user_name, $pass_word, $database);
    $sql = "SELECT * FROM users WHERE username = '$username'";
    $result = mysqli_query($conn, $sql);
    $resultCheck = mysqli_num_rows($result);
    if ($resultCheck < 1) {
        setcookie('username', '', time() - 100, "/");
        if (isset($_COOKIE['fahrenheit'])) {
            if ($_COOKIE['fahrenheit'] == "true") {
                header('Location: imperial.php');
            } else {
                header('Location: metric.php');
            }
        } else {
            header('Location: metric.php');
        }
    } else {
        if (isset($_COOKIE['fahrenheit'])) {
            if ($_COOKIE['fahrenheit'] == "true") {
                header('Location: imperial.php');
            } else {
                header('Location: metric.php');
            }
        } else {
            header('Location: metric.php');
        }
    }
} else {
    if (isset($_COOKIE['fahrenheit'])) {
        if ($_COOKIE['fahrenheit'] == "true") {
            header('Location: imperial.php');
        } else {
            header('Location: metric.php');
        }
    } else {
        header('Location: metric.php');
    }
}
?>