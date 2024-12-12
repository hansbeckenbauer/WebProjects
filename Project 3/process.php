<?php
function clean_input($input) {
    $input = trim($input);
    $input = substr($input, 0, 64);
    $input = strip_tags($input);
    return $input;
}

$title = clean_input($_POST['title'] ?? '');
$drink = clean_input($_POST['drink'] ?? '');
$pet = clean_input($_POST['pet'] ?? '');
$fictional = clean_input($_POST['fictional'] ?? '');
$real = clean_input($_POST['real'] ?? '');

if (empty($title) || empty($drink) || empty($pet) || empty($fictional) || empty($real)) {
    echo '<h1>I’m sorry, your input was not valid.</h1>';
    echo '<a href="index.html">Try Again</a>';
    exit();
}

$final_title = "{$title} {$drink} {$pet} of {$fictional} and {$real}";
$total_length = strlen($final_title);
$message = $total_length >= 30 ? "That's a heck of a title!" : "That's a cute little title!";

echo "<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Your Title</title>
    <link rel='stylesheet' href='main.css'>
</head>
<body>
    <h1>You are $final_title</h1>
    <p>Title length: $total_length characters</p>
    <p>$message</p>
    <a href='index.html'>Try Again</a>
</body>
</html>";
?>
