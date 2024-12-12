<?php
require 'vendor/autoload.php';

function clean_input($input) {
    return substr(strip_tags(trim($input)), 0, 64);
}

$title = clean_input($_POST['title'] ?? '');
$drink = clean_input($_POST['drink'] ?? '');
$pet = clean_input($_POST['pet'] ?? '');
$fictional = clean_input($_POST['fictional'] ?? '');
$real = clean_input($_POST['real'] ?? '');

if (empty($title) || empty($drink) || empty($pet) || empty($fictional) || empty($real)) {
    $message = "I'm sorry, your input was not valid.";
    $title_result = "Try again!";
} else {
    $title_result = "{$title} {$drink} {$pet} of {$fictional} and {$real}";
    $message = strlen($title_result) >= 30 ? "That's a heck of a title!" : "That's a cute little title.";
}

$m = new Mustache_Engine;
$template = file_get_contents('templates/header.html') . file_get_contents('templates/titleresult.html') . file_get_contents('templates/footer.html');
echo $m->render($template, ['title' => 'Title Result', 'title_result' => $title_result, 'message' => $message]);
