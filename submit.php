<?php

// Start the session
session_start();


$fname = "Andrew";
$lname = "Linovitz";

//grab the form data (they will all be arrays)
$dates = ($_POST['entry']['date']);
$hours = ($_POST['entry']['hours']);
$selections = ($_POST['entry']['selection']);

//Process date info
$date=date_create("$dates[0]"); //create date object from 1st date entry
$year = date_format($date,"Y"); //
$month = date_format($date,"m");


//create CSV data

//The name of the CSV file that will be downloaded by the user.
$fileName = "Timesheet_".$lname."_".$fname.".csv";

//Set the Content-Type and Content-Disposition headers.
header('Content-Type: application/excel');
header('Content-Disposition: attachment; filename="' . $fileName . '"');

// do not cache the file
header('Pragma: no-cache');
header('Expires: 0');

// create a file pointer connected to the output stream
$file = fopen('php://output', 'w');

// set the column headers
fputcsv($file, array('Name:',$fname,$lname));
fputcsv($file, array('Date', 'Hours', 'Rate'));

$x=0;
// create the data array
foreach ($dates as $date){
  fputcsv ($file, array($date, $hours[$x], $selections[$x]));
  $x++;
}

exit();
