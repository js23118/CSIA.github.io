<?php

$host = "localhost,";
$dbname = "sql9591764";
$username = "sql9591764";
$password = "xPi4G2VZgC";

$mysqli = new mysqli($host, $username, $password, $dbname);

if ($mysqli->connect_errno) {
    die("Connection error: " . $mysqli->connect_error);
}

$password_hash = hash($_POST["password"], "sha256");

require __DIR__ . "/database.php";

return $mysqli;
var_dump($password_hash);