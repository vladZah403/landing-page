<?php
include 'index.html';
$token = "2118395924:AAEueigq0y6R9CmEbsaW1Lwq1rPA5ly9WUM";
$chat_id = "-1001658073520";

if ($_POST['act'] == 'order') {
    $id = ($_POST['id']);
    $tours = ($_POST['tours']);
    $name = ($_POST['name']);
    $text = ($_POST['text']);

    $arr = array(
        'id Tours: ' =>$id,
        'Tours: ' => $tours
        'User:' => $name,
        'Message:' => $text,

    
    );

    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

   
}

?>