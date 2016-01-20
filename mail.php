<?php

	$name = $_POST['first_name'] + " " + $_POST['last_name'];
	$email = $_POST['email'];
	$phonenumber = $_POST['phone_number'];
	$company = $_POST['company'];
	$companysize = $_POST['company_size'];
	$subject = $_POST['subject'];
	$msg = $_POST['message'];
	$message = wordwrap($msg, 70);
	$formcontent="From: $name \n Phone Number: $phonenumber \n Company: $company \n Company Size: $companysize \n Message: $message";
	$recipient = "vandanapai01@gmail.com";

	$headers = 'From:'. $email . "\r\n"; // Sender's Email
	$headers = 'Cc:'. $email . "\r\n"; // Carbon copy to Sender
	mail($recipient, $subject, $formcontent, $headers) or die("Error!"); // Send Mail By PHP Mail Function
	echo "Your mail has been sent successfuly! We will be in touch with you shortly.";

?>