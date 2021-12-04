<?php
header("Access-Control-Allow-Origin: *");
session_start();


$page= $_GET["query"];


if($page == "newIssue"){

    ?>
    <div class="form1">
    <h1>Create Issue</h1>
    
    <div>
        <form action="">
                    
            <label for="">Title</label>
            <input type="text" name="title" id="titleField" required> 
    
            <label for="">Description</label>
            <input type="text" name="description" id="descriptionField" required>
    
            <label for="">Assign To</label>
            <select id="assigned" required>
                <?php
                  $connection = new mysqli('localhost','root','','bugme');
                  $connection->set_charset('utf8mb4');
                  $stmt = $connection->query("SELECT firstname, lastname FROM users");
                ?>
                <?php foreach ($stmt as $name): ?>
                    <option><?= $name['firstname'].' '.$name['lastname']; ?></option>
                <?php endforeach; ?>
            </select>
    
            <label for="">Type</label>
            <select id="type" required>
                <option value="bug">Bug</option>
                <option value="proposal">Proposal</option>
                <option value="task">Task</option>
            </select>

            <label for="">Priority</label>
            <select id="pri" required>
            <option value="Critical">Critical</option>
                <option value="Major">Major</option>
                <option value="Minor">Minor</option>
            </select>
    
            <button type="button" class="submit-issue" >Submit</button>
        </form>
    </div>
</div>
<?php
}

?>


<?php
header("Access-Control-Allow-Origin: *");

if($page == "adduser"){

    ?>
    <div class="container" >
    <div class="form">
    <div id= "newUser" >
        <h1>New User</h1>
        <form id="newUsers-form" action="">
                    
            <label for="">First Name</label>
            <input type="text" name="firstname" id="firstnameFeild" required> 
    
            <label for="">Last Name</label>
            <input type="text" name="lastname" id="lastnameFeild" required>
    
            <label for="">Password</label>
            <input type="text" minlength="8" name="password"  id="passwordFeild" required>
    
            <label for="">Email</label>
            <input type="email" name="email" id="emailFeild" required>
            
    
            <button type="button"  class="submit-users">Submit</button>
        </form>
    </div>
</div>
</div>

<?php
}

?>




<?php
header("Access-Control-Allow-Origin: *");

if($page == "home"){

    ?>
    
    <div class="d-container">
    <div id="issues">
        <div class="issuesSectionContainers">
            <h1>Issues</h1>
            <button id="newIssueBtn" onclick="ajaxRequest('newIssue')" >Create New Issue</button>
        </div>
                

        <div class="issuesSectionContainers">
            <h3>Filter By:</h3>
            <button id="filterAll" class="filterButtons active" onclick="filterAll(); ">All</button>
            <button id="filterOpen" class="filterButtons" onclick="filterOpen(); ">Open</button>
            <button id="filterTicket" class="filterButtons" onclick="filterUserticket();" >My Tickets</button>
        </div>
        <div class="card"> 
        <div id="result"></div>
        <table id="issuestable">
            <tr>
                <th>Title</th>
                <th>Type</th>
                <th>Status</th>
                <th>Assigned To</th>
                <th>Created</th>
            </tr>
            <?php
                  $connection = new mysqli('localhost','root','','bugme');
                  $connection->set_charset('utf8mb4');
                  $stm = $connection->query("SELECT * FROM issues");
                ?>
            <?php foreach ($stm as $iss):
                $idno = $iss['assigned_to'];
                $names = $connection->query("SELECT firstname, lastname FROM users WHERE id = $idno");
                $res = $names->fetch_assoc();
                $stat = $iss['status']; ?>
                <tr class= "<?php echo $stat?> <?php echo $idno ?> table"> 
                    <td>
                        <p id="p" style="display:inline-block;">#<?php echo  $iss['id']?></p>
                        <button id="<?php echo $iss['id']?>" class="vb"><?= $iss['title']; ?></button>
                    </td>
                <td><?= $iss['type']; ?></td>
                <td><?= $iss['status']; ?><p class= "priorityColour"></p</td>
                <td><?= $res['firstname']." ".$res['lastname']?></td>
                <td><?= $iss['created'];?></td>
            </tr>  
            </tr>  
            <?php endforeach; ?>
         
        </table>
        </div>
       <div id="results"></div>
    </div> 
    </div>
    <?php
}
?>


<?php
if($page == "login"){
    
?>
<div id="loginContainer" class="login-container" onclick="onclick">
                <div class="top"></div>
                <div class="bottom"></div>
                <div class="center">
                    <h2 class ="checker">Please Login</h2>
                    <form action = "" method = "post">
                        <input type="email" name="email"placeholder="Email" id="email"/>
                        <input type="password" name="password"placeholder="Password" id="passcode" />
                        <button  class="btn" id="btn" type="button" onclick="mylogin()" name="Login">Login</button>
                        <h2>&nbsp;</h2>
                 </form>
                </div>
</div>
<?php
}
?>

<?php
if($page == "logout"){
    unset($_SESSION['Loggedin']);
    unset( $_SESSION['Email']);
    unset($_SESSION['id']);
    session_destroy();
    $result='You have been successfully logged out.';
?>
<div id="loginContainer" class="login-container" onclick="onclick">
                <div class="top"></div>
                <div class="bottom"></div>
                <div class="center">
                    <h2>Please Login</h2>
                    <?php echo $result; ?>
                    <form action = "" method = "post">
                        <input type="email" name="email"placeholder="Email" id="email"/>
                        <input type="password" name="password"placeholder="Password" id="passcode" />
                        <button  class="btn" id="btn" type="button" onclick="mylogin()" name="Login">Login</button>
                        <h2>&nbsp;</h2>
                 </form>
                </div>
</div>
<?php
}
?>