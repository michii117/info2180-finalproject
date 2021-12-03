<?php
    session_start();
    if (isset($_POST['cissue'])){
        $connection = new mysqli('localhost','root','','bugme');
        $connection->set_charset('utf8mb4');
        $title = htmlentities($_POST['ti'],ENT_QUOTES, 'UTF-8');
        $descpri = htmlentities($_POST['des'],ENT_QUOTES, 'UTF-8');
        $assign = htmlentities($_POST['assi'],ENT_QUOTES, 'UTF-8');
        $type = htmlentities($_POST['typ'],ENT_QUOTES, 'UTF-8');
        $priority = htmlentities($_POST['pri'],ENT_QUOTES, 'UTF-8');
        $status = htmlentities($_POST['sta'],ENT_QUOTES, 'UTF-8');
        $fname = explode(" ", $assign);
        $idno = $connection->query("SELECT id FROM users WHERE firstname = '$fname[0]'");
        $res = $idno->fetch_assoc();
        $createdby = intval($_SESSION['id']);
        $idnos = intval($res['id']);
    }
    $sql = "INSERT INTO `issues` (`id`,`title`, `description`, `type`, `priority`, `status`,`assigned_to`,`created_by`,`created`,`updated`) 
                            VALUES (NULL, '$title', '$descpri', '$type', '$priority', '$status',$idnos,$createdby,NOW(),NOW())";
    if (mysqli_query($connection, $sql)) {
        exit( "New record created successfully");
      } else {
        exit("Error: " . $sql . "<br>" . mysqli_error($connection));
      }
?>