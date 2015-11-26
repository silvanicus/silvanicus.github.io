<?php

require 'lib/phpmailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

//$mail->SMTPDebug = 2;                               // Enable verbose debug output

$mail->isSMTP();
$mail->Host = 'localhost';
$mail->SMTPAuth = true;
$mail->Username = 'hola@bconnectionagency.com';
$mail->Password = 'Temporal2015';
$mail->Port = 25;                                   // TCP port to connect to

$mail->setFrom('hola@bconnectionagency.com', 'B Connection agency');
$mail->addAddress('hola@bconnectionagency.com', 'B Connection');      // Add a recipient
$mail->addAddress('david@dstylepr.com', 'David Duarte');      // Add a recipient
//$mail->addAddress('dduarte1979@gmail.com');               // Name is optional
$mail->addReplyTo('dduarte1979@gmail.com', 'David Duarte');
$mail->addCC('silvana.ramirez85@gmail.com');
//$mail->addBCC('silvana.ramirez85@gmail.com');

//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Contact from website: this email was added';
$mail->Body    = $_POST["correo"];
$mail->AltBody = 'This is an email sent from your website';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    header("Location: thanks.html");
	die();
	//exit();
	//echo "Message sent!";
}

?>