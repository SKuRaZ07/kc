<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $phone = $_POST["phone"];
    $cell = $_POST["cell"];
    $email = $_POST["email"];
    $address = $_POST["address"];
    $message = $_POST["message"];

    // Replace with your email address
    $to = "kcheffan01@gmail.com";

    $subject = "New Estimate Request from KC Mobile Detailing";
    $headers = "From: $email";

    $messageBody = "First Name: $firstName\n";
    $messageBody .= "Last Name: $lastName\n";
    $messageBody .= "Phone: $phone\n";
    $messageBody .= "Alternate Phone: $cell\n";
    $messageBody .= "Email: $email\n";
    $messageBody .= "Contact Address: $address\n\n";
    $messageBody .= "Message:\n$message";

    // Send email
    if (mail($to, $subject, $messageBody, $headers)) {
        // Email sent successfully
        header("Location: thank-you.html"); // Redirect to thank you page
        exit();
    } else {
        // Error sending email
        echo "Error: Unable to send email. Please try again later.";
    }
} else {
    // Redirect to the form page if the request method is not POST
    header("Location: free-estimate.html");
    exit();
}
?>
