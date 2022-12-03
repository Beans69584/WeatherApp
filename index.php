<?php
session_start();
if (($_SESSION['fahrenheit']) == false) {
    header('Location: metric.php');
} else if (($_SESSION['fahrenheit']) == true) {
    header('Location: imperial.php');
} else {
    header('Location: metric.php');
}
?>