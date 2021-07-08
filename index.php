<?php

 $url = "https://api.openweathermap.org/data/2.5/weather?id=498817&units=metric&appid=3a4fd0c6c98e54f048cee6795700f961&lang=ru";

 $contents = file_get_contents($url);
 $weather=json_decode($contents);
 
 $temp_now=$weather->main->temp."°C";
 $icon=$weather->weather[0]->icon.".png";
 $today = date("j.m.Y, H:i");
 $cityname = $weather->name;
 
 echo $today."<br />".
 $cityname."<br />".
 $temp_now."<br />
 <img src='./icons/" . $icon ."' class='condition'/>";
?>
