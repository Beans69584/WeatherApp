<?php
    $username = $_POST['username'];
    $password = $_POST['password'];
    if (empty($username) || empty($password)) {
        header('Location: register-page.php?error=1');
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
    $query2 = "SELECT * FROM users WHERE username = '$username'";
    $result2 = mysqli_query($conn, $query2);
    if (mysqli_num_rows($result2) > 0) {
        header('Location: register-page.php?error=2');
    } else {
        $query = "INSERT INTO users (username, password) VALUES ('$username', '$password')";
        $result = mysqli_query($conn, $query);
        if ($result) {
            session_start();
            $_SESSION['username'] = $username;
            header('Location: index.php');
        } else {
            header('Location: register-page.php?error=1');
        }
    }
?>
