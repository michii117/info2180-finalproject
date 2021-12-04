<?php
    if (isset($_POST['addusr'])){
        $connection = new mysqli('localhost','root','','bugme');
        $connection->set_charset('utf8mb4');
        $fname = htmlentities($_POST['Fname'],ENT_QUOTES, 'UTF-8');
        $lname = htmlentities($_POST['Lname'],ENT_QUOTES, 'UTF-8');
        $email = htmlentities($_POST['email'],ENT_QUOTES, 'UTF-8');
        $pass = htmlentities($_POST['password'],ENT_QUOTES, 'UTF-8');
    }
    $sql = "INSERT INTO `users` (`ID`, `firstname`, `lastname`, `password`, `email`, `date_joined`) VALUES (NULL, '$fname', '$lname', MD5('$pass'), '$email',  NOW())";
    $errnum = mysqli_query($connection, $sql);
    if ($errnum) {
        exit( "User added Successfully!");
      } else if(mysqli_errno($connection) == 1062) {
        exit("Email already registered!");
      }else{
        exit("Error adding user!");
      }
?>