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
  $email_subject = "Merci d'avoir rempli mon formulaire de contact";
  $email_message = "Bonjour {$data['name']} et merci pour votre message.\n\n";
  $email_message .= "Je vous répondrai dans les meilleurs délais (3 jours ouvrés maximum) sur votre boîte mail {$data['email']}.\n\n";
  $email_message .= "Bien cordialement,\n";
  $email_message .= "Kevin Dubuy.";



  // create email headers

  $headers = 'From: '.$to."\r\n".
  'Reply-To: '.$to."\r\n" .
  "MIME-Version: 1.0\r\n" .
  "Content-Type: text/plain; charset=iso-8859-1\r\n";

  mail($from, $email_subject, $email_message, $headers);
