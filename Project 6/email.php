<?php
require 'vendor/autoload.php';

// Server-side validation and email processing
function isValidEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

function sendEmail($data) {
    $name = htmlspecialchars($data['name']);
    $email = htmlspecialchars($data['email']);
    $subject = htmlspecialchars($data['subject']);
    $message = htmlspecialchars($data['message']);

    $to = $email;
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    // Validate fields
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        return 'All fields are required.';
    }
    if (!isValidEmail($email)) {
        return 'Invalid email address.';
    }

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        return 'Email sent successfully.';
    } else {
        return 'Failed to send email.';
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $response = sendEmail($_POST);
    echo $response;
}
