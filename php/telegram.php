<?php

$name = $_POST['username'];
$phone = $_POST['userphone'];
$text = $_POST['usertext'];
$token = "6028013472:AAFcTTHru0UZRuq-hRhU15EVeN5NodCKc2E";
$chat_id = "-1001859088659";

// $chat_id = "427560446";

$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Текст' => $text
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

// if ($sendToTelegram) {
//   header('Location: success.html');
// } else {
//   echo "Error";
// }
?>