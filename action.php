<?php

$dates = ($_POST['entry']['date']);
$hours = ($_POST['entry']['hours']);
$selections = ($_POST['entry']['selection']);
$x=0;

$data="";

foreach ($dates as $date){
  $data .=
    "<div style= 'border:1px solid;'>" .
      $date . " : " . $hours[$x] . " : " . $selections[$x] . "<br />\n" .
    "</div>";

    $x++;
}

print_r ($data);
