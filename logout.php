<?php
// unset session variables
session_start();
session_unset();
session_destroy(); 
// remove cookie from browser 
setcookie('username', '', time() - 100, '/');
header('Location: index.php');
?>