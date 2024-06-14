<?php 
$filename = $_FILES["upload"]["name"];

$filetype = $_FILES["upload"]["type"];

$path = __DIR__;
$path = str_replace("\\", "/", $path);
$path = $path.'/uploads/';
if(!is_dir($path)) {
    mkdir($path, 0777, true);
}

move_uploaded_file( $_FILES["upload"]["tmp_name"], $path.$filename );

$protocol = isset($_SERVER["HTTPS"]) ? 'https://' : 'http://';
$base = str_replace($_SERVER["DOCUMENT_ROOT"], $_SERVER["SERVER_NAME"], $path);

echo json_encode([
    'path' => $path.$filename,
    'url'  => $protocol.$base.$filename,
    'type' => $filetype 
]);