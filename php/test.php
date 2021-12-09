<?php
require('db.php');

if(!$connect){
    die('could not connect: ' . mysqli_connect_error());
}


//$userID = $_GET['userID'];

$forumdata = mysqli_query($connect, "SELECT * FROM test");

print(json_encode($forumdata, JSON_PRETTY_PRINT));

mysqli_close($connect);

print("test1");

?>