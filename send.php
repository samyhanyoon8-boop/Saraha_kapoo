<?php
header('Content-Type: application/json');

$botToken = "8543960258:AAHbxuWBEOiWWmJJyqvWvi1JmujGm3KfcOk";
$chatId = "8357427128";

// استلام البيانات من JSON
$data = json_decode(file_get_contents('php://input'), true);
$message = isset($data['message']) ? $data['message'] : '';

if(empty($message)){
    echo json_encode(['ok'=>false, 'error'=>'الرسالة فارغة']);
    exit;
}

// ارسال الرسالة لتليجرام
$url = "https://api.telegram.org/bot$botToken/sendMessage";
$postFields = [
    'chat_id' => $chatId,
    'text' => "📩 رسالة جديدة لصارح كابو اليوتيوبر:\n\n" . $message
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $postFields);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);

echo $response;
?>