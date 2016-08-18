<<<<<<< HEAD

<?/* php
=======
<?php
>>>>>>> 19510bdc23184d75b1a0d3fe5c18af0b322d5396

//Get the form fields, removes html tags and whitespace.
$name = strip_tags(trim($_POST["name"]));
$name = str_replace(array("\r", "\n"), array(" "," "), $name);
$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
$message = trim($_POST["message"]);

//check the data
if (empty($name) OR empty ($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
<<<<<<< HEAD
  header("Location: http:")
}




 ?>
=======
  header("Location: https://mm-responsive-demo.herokuapp.com/index.php?success=-1#form");
  exit;
}

//Set the recipient email address.
$recipient = "mattjacobnyc@gmail.com";

//set email subject
$subject = "New contact from $name";
// 
//build email content
$email_content = "Name: $name\n";
$email_content = "Email: $email\n\n";
$email_content = "Message:\n$message\n";

//build email header
$email_headers = "From:$name <$email>";

//Send the email
mail($recipient, $subject, $email_content, $email_headers);

//redirect to the index.html with success code
header("Location: https://mm-responsive-demo.herokuapp.com/index.php?success=1#form");
?>
>>>>>>> 19510bdc23184d75b1a0d3fe5c18af0b322d5396
