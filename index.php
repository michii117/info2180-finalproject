<?php 
    session_start();
    if(isset($_SESSION['Loggedin'])){
       $adminst = $_SESSION['admin'];
    }else{
        $adminst = -1;
    }
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/main.css">
    <link rel="stylesheet" href="styles/createIssue.css">
    <link rel="stylesheet" href="styles/viewIssues.css">
    <link rel="stylesheet" href="styles/login-out.css">
    <link rel="stylesheet" href="styles/addUser.css">

    <title>Document</title>
</head>
<body>

    <div class="container">

        <header id="header">
            <img src="images/header_logo.png" alt="" id= "headerIcon" class="icons">
            <h1 id= "sitename">BugMe Issue Tracker</h1>
        </header>
    
        <menu id="menu" >
            <ul>
                <li><a href="" id="homeButton" class="hide"><img src="images/home.png" alt="" class="icons">Home</a></li>
                <li><a href="" id="addUserButton" class="hide" ><img src="images/new_user.png" alt="" class="icons">Add User</a></li>
                <li><a href="" id="newIssueButton" class="hide"><img src="images/new_page.png" alt="" class="icons">New Issue</a></li>
                <li><a href="" id="logoutButton"  class="hide"><img src="images/login-out.png" alt="" class="icons"><p>Logout</p> </a></li>
                <li><a href="" id="loginButton" ><img src="images/login-out.png" alt="" class="icons"><p>Login</p> </a></li>
            </ul>
        </menu>
    
        <main id="main">
           
        </main>
    
    </div>
<script>
    var sess = <?php echo $adminst?>
</script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="app.js"></script>
</body>
</html>