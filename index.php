<?php
include 'index.html';
$token = "2118395924:AAEueigq0y6R9CmEbsaW1Lwq1rPA5ly9WUM";
$chat_id = "-1001658073520";

if ($_POST['act'] == 'order') {
    $id = ($_POST['id']);
    $tours = ($_POST['tours']);
    $phone = ($_POST['phone']);
    $name = ($_POST['name']);
    $email = ($_POST['email']);
    $text = ($_POST['text']);

    $arr = array(
        'id Tours: ' =>$id,
        'Tours: ' => $tours,
        'Phone: ' => $phone,
        'User:' => $name,
        'E-mail' => $email,
        'Message:' => $text,

    
    );

    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

   
}

?>