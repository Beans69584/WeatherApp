<?php
session_start();
if (($_GET['fahrenheit']) == "false") {
    $_SESSION['fahrenheit'] = false;
    header('Location: index.php');
}else if (($_GET['fahrenheit']) == "true") {
    // overwrite session variable fahrenheit with true
    $_SESSION['fahrenheit'] = true;
    header('Location: index.php');
} else {
    $_SESSION['fahrenheit'] = false;
    header('Location: index.php');
}