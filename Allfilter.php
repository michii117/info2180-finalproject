<?php session_start();
$host = 'localhost';
$username = 'project2';
$password = 'password123';
$dbname = 'bugme';
$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
$issu = $conn->prepare("SELECT * FROM issues ");
$issu->execute();
$ais = $issu->fetchAll(PDO::FETCH_ASSOC);

    if(!empty($ais)){ 
?>
 
    <table class ="issuestable">
        <tr>
            <th> Title </th>
            <th> Type </th>
            <th id = "status"> Status </th>
            <th> Assigned To </th>
            <th> Created </th>
        </tr>

        <?php foreach ($ais as $issue):
        $assign=$issue['assigned_to'];
        $findname=$conn->query("SELECT firstname,lastname FROM Users WHERE id='$assign'");
        $name= $findname->fetch(PDO::FETCH_ASSOC);
            ?>
            <tr>
            <td>
                        <p id="p" style="display:inline-block;">#<?php $issue['id']?></p>
                        <button id="<?php echo $issue['id']?>" class="vb"><?= $issue['title']; ?></button>
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
                <td><?php $name['firstname']." ".$name['lastname']; ?></td>
                <td><?php $issue['created']; ?></td>
            </tr>
            
        <?php endforeach; ?>    
    </table>
        <?php }else{
            echo "There are currently no issues being tracked.";
        }