<?php
session_start();
if (($_GET['fahrenheit']) == "false") {
    // store in cookie that fahrenheit is false 
    setcookie("fahrenheit", "false", time() + (86400 * 30), "/");
    // redirect to index.php
    header('Location: index.php');
}else if (($_GET['fahrenheit']) == "true") {
    // store in cookie that fahrenheit is true
    setcookie("fahrenheit", "true", time() + (86400 * 30), "/");
    header('Location: index.php');
} else {
    setcookie("fahrenheit", "false", time() + (86400 * 30), "/");
    header('Location: index.php');
}