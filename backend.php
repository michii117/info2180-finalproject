<?php
header("Access-Control-Allow-Origin: *");

$page= $_GET["query"];

if($page == "newIssue"){

    ?>
    <div class="form1">
    <h1>Create Issue</h1>
    
    <div>
        <form action="">
                    
            <label for="">Title</label>
            <input type="text" name="title" id="titleFeild" required> 
    
            <label for="">Description</label>
            <input type="text" name="description" id="descriptionFeild" required>
    
            <label for="">Assign To</label>
            <select required>
                <option value="Marcia Brady">Marcia Brady</option>
            </select>
    
            <label for="">Type</label>
            <select required>
                <option value="bug">Bug</option>
            </select>

            <label for="">Priority</label>
            <select required>
                <option value="Major">Major</option>
            </select>
    
            <button type="submit" class="submit-issue">Submit</button>
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
    <div class="container">
    <div class="form">
    <div id= "newUser" >
        <h1>New User</h1>
        <form id="newUsers-form" action="">
                    
            <label for="">First Name</label>
            <input type="text" name="fisrtname" id="fisrtnameFeild" required> 
    
            <label for="">Last Name</label>
            <input type="text" name="lastname" id="lastnameFeild" required>
    
            <label for="">Password</label>
            <input type="text" name="password" id="passwordFeild" required>
    
            <label for="">Email</label>
            <input type="email" name="email" id="emailFeild" required>
    
            <button type="submit" class="submit-users">Submit</button>
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
    <div class="container">
    <div id="issues">
        <div class="issuesSectionContainers">
            <h1>Issues</h1>
            <button id="newIssueBtn">Create New Issue</button>
        </div>
                

        <div class="issuesSectionContainers" id="issuesSectionContainers">
            <h3>Filter By:</h3>
            <button id="filterAll" class="filterButtons active" onclick="toggle()" >All</button>
            <button id="filterOpen" class="filterButtons" onclick="toggle()">Open</button>
            <button id="filterTicket" class="filterButtons" onclick="toggle()">My Tickets</button>
        </div>
        <div class="card"> 
        <table>
            <tr>
                <th>Title</th>
                <th>Type</th>
                <th>Status</th>
                <th>Assigned To</th>
                <th>Created</th>
            </tr>

            <tr>
                <td>bdsvnjk</td>
                <td>hbdvncxj</td>
                <td>bhvdsjn</td>
                <td><p class= "priorityColour">dnv</p> </td>
                <td>biwencs</td>
            </tr>

        </table>
        </div>
       
    </div>
    </div>
<?php
}

?>


<?php
header("Access-Control-Allow-Origin: *");
if($page == "login"){
    
?>
<div id="loginContainer" class="login-container" onclick="onclick">
                <div class="top"></div>
                <div class="bottom"></div>
                <div class="center">
                    <h2>Please Login</h2>
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
header("Access-Control-Allow-Origin: *");
if($page == "logout"){
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


