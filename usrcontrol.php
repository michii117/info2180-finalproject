<?php
    if (isset($_POST['addusr'])){
        $connection = new mysqli('localhost','root','','login');
        $connection->set_charset('utf8mb4');
        $fname = htmlentities($_POST['Fname'],ENT_QUOTES, 'UTF-8');
        $lname = htmlentities($_POST['Lname'],ENT_QUOTES, 'UTF-8');
        $email = htmlentities($_POST['email'],ENT_QUOTES, 'UTF-8');
        $pass = htmlentities($_POST['password'],ENT_QUOTES, 'UTF-8');
    }
    $sql = "INSERT INTO `users` (`ID`, `Fname`, `Lname`, `email`, `password`, `adminst`) VALUES (NULL, '$fname', '$lname', '$email', MD5('$pass'), '1')";
    if (mysqli_query($connection, $sql)) {
        exit( "New record created successfully");
      } else {
        exit("Error: " . $sql . "<br>" . mysqli_error($connection));
      }
?>