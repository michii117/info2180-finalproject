<?php

$page= $_GET["query"];

if($page == "newIssue"){

    ?>
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
    
            <button type="submit">Submit</button>
        </form>
    </div>
<?php
}

?>


<?php

if($page == "adduser"){

    ?>
    <div id= "newUser">
    <h1>New User</h1>
    <form action="">
                    
        <label for="">First Name</label>
        <input type="text" name="fisrtname" id="fisrtnameFeild" required> 
    
            <label for="">Last Name</label>
            <input type="text" name="lastname" id="lastnameFeild" required>
    
            <label for="">Password</label>
            <input type="text" name="password" id="passwordFeild" required>
    
            <label for="">Email</label>
            <input type="email" name="email" id="emailFeild" required>
    
            <button type="submit">Submit</button>
        </form>
    </div>
<?php
}

?>




<?php

if($page == "issue"){

    ?>
    <div id="issues">
        <div class="issuesSectionContainers">
            <h1>Issues</h1>
            <button id="newIssueButton">Create New Issue</button>
        </div>
                

        <div class="issuesSectionContainers">
            <h3>Filter By:</h3>
            <button id="filterAll" class="filterButtons">All</button>
            <button id="filterOpen" class="filterButtons">Open</button>
            <button id="filterTicket" class="filterButtons">My Tickets</button>
        </div>

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
<?php
}

?>


<?php

if($page == "login"){

    ?>
<div id="loginContainer">
    <h1>Login</h1>
    <form action="">
                                
        <label for="">Password</label>
        <input type="password" name="password" id="passwordFeild" required>
                
        <label for="">Email</label>
        <input type="email" name="email" id="emailFeild" required>
                
        <button type="submit">Login</button>
    </form>
</div>
<?php
}

?>
