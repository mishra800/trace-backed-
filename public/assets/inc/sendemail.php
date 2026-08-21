<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate inputs
    $name     = htmlspecialchars(strip_tags(trim($_POST["name"])));
    $email    = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone    = htmlspecialchars(strip_tags(trim($_POST["Phone"])));
    $service  = htmlspecialchars(strip_tags(trim($_POST["service"])));
    $message  = htmlspecialchars(strip_tags(trim($_POST["message"])));

    // Recipient email
    $to = "yamunaatoms@gmail.com";  // <-- Replace with your email

    // Subject
    $subject = "New Contact Form Submission from $name";

    // Email body
    $email_body = "
    You have received a new message from your website contact form.

    Full Name: $name
    Email: $email
    Phone: $phone
    Service: $service
    Message:
    $message
    ";

    // Headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if (mail($to, $subject, $email_body, $headers)) {
        // Success
        echo "<script>alert('Message sent successfully!'); window.history.back();</script>";
    } else {
        // Failure
        echo "<script>alert('Message sending failed. Please try again.'); window.history.back();</script>";
    }
} else {
    // Not a POST request
    echo "<script>alert('Invalid request.'); window.history.back();</script>";
}
?>
