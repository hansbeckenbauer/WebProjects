<?php
require 'vendor/autoload.php';

$m = new Mustache_Engine;
$template = file_get_contents('templates/header.html') . file_get_contents('templates/home.html') . file_get_contents('templates/footer.html');
echo $m->render($template, ['title' => 'Home']);