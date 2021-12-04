<?php session_start(); 
$host = 'localhost';
$username = 'project2';
$password = 'password123';
$dbname = 'bugme';

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
$issid= filter_input(INPUT_GET,"issid",FILTER_SANITIZE_STRING);
loadJob($issid, $conn);

changeStatus($conn);
?>
<?php 
function loadJob($issid, $conn){

$stmt = $conn->prepare("SELECT * FROM issues WHERE id=? LIMIT 1");
$stmt->execute([$issid]);
$result = $stmt->fetch(PDO::FETCH_ASSOC);

$cdate = date_create($result['created']);
$udate = date_create($result['updated']);

if (isset($_GET['issid']))
	{

	//finding the person assigned to
	$stm2 = $conn->prepare("SELECT firstname,lastname FROM users WHERE id=? LIMIT 1");
	$stm2->execute([$result['assigned_to']]);
	$assigned = $stm2->fetch(PDO::FETCH_ASSOC);

	//finding the person who created
	$stm3 = $conn->prepare("SELECT firstname,lastname FROM users WHERE id=? LIMIT 1");
	$stm3->execute([$result['created_by']]);
	$createdby = $stm3->fetch(PDO::FETCH_ASSOC);
?>
	<div id="viewjob">
    <div id="vjheadings">
        <h1><?=$result['title'];?></h1>
        <h4>Issue #<?=$result['id'];?></h4>
    </div>
    <div id="vjmain">
        <p id="view-para"><?= $result['description'];?></p>
        <ul>
		<li>Issue created on <?= date_format($cdate,'F j, Y');?> at <?= date_format($cdate,'g:i A'); ?> by <?=$createdby['firstname']?> <?=$createdby['lastname']; ?></li>
			<li>Last updated on <?= date_format($udate,'F j, Y');?> at <?= date_format($udate,'g:i A'); ?></li>
        </ul>
    </div>
    <div id="vjaddinfo">
        <h4>Assigned To</h4>
        <p><?=$assigned['firstname']?> <?=$assigned['lastname'];?></p>
        <h4>Type</h4>
        <p><?=$result['type'];?></p>
        <h4>Priority</h4>
        <p><?=$result['priority'];?></p>
        <h4>Status</h4>
        <p><?=$result['status'];?></p>
    </div>
    <div id="vjbuttonarea">
	<button id="vjclosedbutton" class="vjbuttonc">Mark as Closed</button>
			<button id="vjipbutton" class="vjbuttoni"d>Mark in Progress</button>
    </div>
</div>

<?php 
	}
}
?>

<?php
	function changeStatus($conn){ 
	$status= filter_input(INPUT_GET,"status",FILTER_SANITIZE_STRING);
	$issid= filter_input(INPUT_GET,"issid",FILTER_SANITIZE_STRING);
	date_default_timezone_set('Jamaica');
	$date=date('Y-m-d H:i:s');
	if(isset($_GET['status']) && isset($_GET['issid'])){
		$stmt = $conn->prepare("UPDATE issues SET status=?, updated=? WHERE id=?");
		$stmt->execute([$status,$date,$issid]);

	}
}

?>