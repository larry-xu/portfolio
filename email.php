<?php

$mail = false;

if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])){
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$to = "larry@larryxu.com";
	$subject = "Message from $name";
	$headers = "From: ".$email;
	$mail = mail($to,$subject,$message,$headers);
}

$data = json_encode(array('sent' => $mail));
echo $data;

?>