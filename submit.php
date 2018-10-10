<?php
//DB details
$dbHost = 'localhost';
$dbUsername = '';
$dbPassword = '';
$dbName = '';

//Create connection and select DB
$db = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

if($db->connect_error){
    die("Unable to connect database: " . $db->connect_error);
}
if(!empty($_POST['email'])) {
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email = $_POST['email'];
    $company = $_POST['company'];
    $message = $_POST['message'];
    //insert form data in the database
    $insert = $db->query("INSERT contact (first_name,last_name,email,company,message) VALUES ('".$first_name."','".$last_name."','".$email."','".$company."','".$message."')");
    
    echo $insert?'ok':'err';
}
?>
