<?php

require 'class.phpmailer.php';

try {
    $mail = new PHPMailer(true); //New instance, with exceptions enabled

    $to = $_POST['email'];
	$mail->AddAddress($to);
	$mail->From       = $_POST['femail'];
	$mail->Subject  = "See your postcard";

	$body             = "";
	$body             = preg_replace('/\\\\/','', $body); //Strip backslashes
	$mail->MsgHTML($body);

	$mail->IsSMTP();                           // tell the class to use SMTP
	$mail->SMTPAuth   = true;                  // enable SMTP authentication
	$mail->Port       = 24;                    // set the SMTP server port
	//$mail->Host       = "name.domain.com"; // SMTP server
	//$mail->Username   = "";     // SMTP server username
	//$mail->Password   = "";            // SMTP server password

	$mail->IsSendmail();  // tell the class to use Sendmail
	$mail->AddReplyTo("test@gmail.com");
	$mail->AltBody    = "To view the message, please use an HTML compatible email viewer!"; // optional, comment out and test
	$mail->WordWrap   = 80; // set word wrap

	$mail->AddAttachment($_FILES['image']['tmp_name'],
                         $_FILES['image']['name']);
	$mail->IsHTML(true); // send as HTML
	$mail->Send();
	echo 'Message has been sent.';
} catch (phpmailerException $e) {
	echo $e->errorMessage();
}
?>