<?php
include 'index.html';
$token = "2118395924:AAEueigq0y6R9CmEbsaW1Lwq1rPA5ly9WUM";
$chat_id = "-1001658073520";

if ($_POST['act'] == 'order') {
    $name = ($_POST['name']);
    $text = ($_POST['text']);


    $arr = array(
        'Имя:' => $name,
        'сообщение:' => $text,
    );

    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

    if ($sendToTelegram) {
        alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
    }
    else {
        alert('Что-то пошло не так. ПОпробуйте отправить форму ещё раз.');
    }
}

?>