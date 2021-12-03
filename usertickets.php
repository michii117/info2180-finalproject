<?php session_start();

$connection = new mysqli('localhost','root','','bugme');
$connection->set_charset('utf8mb4');
$sessionid =$_SESSION['id'];
$stm = $connection->query("SELECT * FROM issues WHERE assigned_to ='$sessionid'");

    if(!empty($stm)){ 
?>
<table id="issuestable">
    <tr>
        <th> Title </th>
        <th> Type </th>
        <th id = "status"> Status </th>
        <th> Assigned To </th>
        <th> Created </th>
    </tr>

    <?php foreach ($stm as $issue):?>
        <tr>
            <td>
                        <p id="p" style="display:inline-block;">#<?php $issue['id']?></p>
                        <button id="<?php $issue['id']?>" class="vb"><?= $issue['title']; ?></button>
            </td>
                <td><?php $issue['type']; ?></td>
                <?php if($issue['status']=='Open'){ ?>
                    <div class = "statuscontainer">
                        <td><div class='openstatus'> <?php $issue['status']; ?></div></td>
                        <?php }?>
                        <?php if($issue['status']=='Closed'){ ?>
                        <td><div class='closestatus'> <?php $issue['status']; ?></div></td>
                        <?php } ?>
                        <?php if($issue['status']=='In-Progress'){ ?>
                        <td><div class='progstatus'> <?php $issue['status']; ?></div></td>
                        <?php } ?>
                    </div>
                <td><?php $issue['assigned_to'] ?></td>
                <td><?php $issue['created']; ?></td>
            </tr>
            
        <?php endforeach; ?>    
    </table>
<?php }else{
            echo "There are currently no issues being tracked that are assigned to you.";
        }