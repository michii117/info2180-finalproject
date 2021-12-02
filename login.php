<?php 
    session_start();
    
    if (isset($_POST['login'])){
        $connection = new mysqli('localhost','root','','login');
        $connection->set_charset('utf8mb4');
        $email = $connection->real_escape_string($_POST['email']);
        $password = md5($connection->real_escape_string($_POST['password']));
        $data = $connection->query("SELECT adminst FROM users WHERE email = '$email' AND password='$password'");
        $res = $data->fetch_assoc();
        if($res> 0){
            $_SESSION['Loggedin'] = '1';
            $_SESSION['Email'] = $email;
            $_SESSION['admin'] = $res['adminst'];
            exit($res['adminst']);
        }else{
            exit('0');
        }
    }
?>