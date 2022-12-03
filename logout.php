<?php
// unset session variables
session_start();
session_unset();
session_destroy(); 
header('Location: index.php');
?>