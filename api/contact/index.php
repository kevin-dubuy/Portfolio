<?php
$data = json_decode(file_get_contents("php://input"), true);

$from = $data['email'];
$to = "contact@kevin-dubuy.fr";
$subject = "{$data['name']} prend contact";
$message = $data['message'];
$headers = "From:" . $from;
mail($to, $subject, $message, $headers);

?>

<?php
  $email_subject = "Submission was successful";
  $email_message = "Form details\n\n";
  $email_message .= "Name: {$data['name']}\n\n";
  $email_message .= "Email: {$data['email']}\n\n";
  $email_message .= "Message: {$data['message']}\n\n";

  // create email headers

  $headers = 'From: '.$to."\r\n".
  'Reply-To: '.$to."\r\n" .
  "MIME-Version: 1.0\r\n" .
  "Content-Type: text/plain; charset=iso-8859-1\r\n";

  mail($from, $email_subject, $email_message, $headers);
