<script>
	function clearForms()
	{
		var i;
		for (i = 0; (i < document.forms.length); i++) {
			document.forms[i].reset();
		}
		$('.alert.alert-success').fadeOut(200);
	}
</script>
<?php

$name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$phone = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
$comments = filter_var($_POST['comments'], FILTER_SANITIZE_STRING);

	$site_owners_email = 'atendimento@contatoscontabilidade.com.br'; // Replace this with your own email address
	$site_owners_name = 'Contatos Contabilidade'; // replace with your name

	if (strlen($name) < 2) {
		$error['name'] = "Digite seu nome";
	}

	if (!preg_match('/^[a-z0-9&\'\.\-_\+]+@[a-z0-9\-]+\.([a-z0-9\-]+\.)*+[a-z]{2}/is', $email)) {
		$error['email'] = "Digite um e-mail válido";
	}

	if (strlen($phone) < 2) {
		$error['phone'] = "Digite seu número de telefone";
	}

	if (strlen($comments) < 3) {
		$error['comments'] = "Digite uma mensagem";
	}


	if (!$error) {

		require_once('phpMailer/class.phpmailer.php');
		$mail = new PHPMailer();
		$mail->CharSet = "UTF-8";
		$mail->From = $email;
		$mail->FromName = $name;
		$mail->Subject = "Contato de " . $name . " via site." ;
		$mail->AddAddress($site_owners_email, $site_owners_name);
		$mail->IsHTML(true);
		$mail->Body = '<b>Nome:</b> '. $name .'<br/><b>E-mail:</b> '. $email . '<br/><b>WhatsApp:</b> '. $phone .'<br/><br/>' . $comments;
		$mail->Send();

		echo "<div class='alert alert-success'  role='alert'>Obrigado " . $name . ". Sua mensagem oi enviada!</div>";

	} # end if no error
	else {

		$response = (isset($error['name'])) ? "<div class='alert alert-danger'  role='alert'>" . $error['name'] . "</div> \n" : null;
		$response .= (isset($error['email'])) ? "<div class='alert alert-danger'  role='alert'>" . $error['email'] . "</div> \n" : null;
		$response .= (isset($error['phone'])) ? "<div class='alert alert-danger'  role='alert'>" . $error['phone'] . "</div> \n" : null;
		$response .= (isset($error['comments'])) ? "<div class='alert alert-danger'  role='alert'>" . $error['comments'] . "</div>" : null;

		echo $response;
	} # end if there was an error sending

	if($_POST) {
		
   	}
	?>
