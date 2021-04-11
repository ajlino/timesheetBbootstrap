<?php

$tableName="timesheet5";

include_once 'timesheetDBH.php';


$dates = ($_POST['entry']['date']);
$hours = ($_POST['entry']['hours']);
$selections = ($_POST['entry']['selection']);
$x=1;

$data="";

foreach ($dates as $date){
  $day = 'Day'.$x;
  $sql = "UPDATE $tableName SET $day=$date .','. $selections[$x] .',' . $hours[$x] WHERE id='$id' AND year='$year' AND month = '$month';
}



print_r ($data);
