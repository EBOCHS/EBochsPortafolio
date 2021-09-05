<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\SMTP;
  use PHPMailer\PHPMailer\Exception;

  require 'PHPMailer/src/Exception.php';
  require 'PHPMailer/src/PHPMailer.php';
  require 'PHPMailer/src/SMTP.php';

  $nombre = $_POST['nombre'];
  $correo = $_POST['correo'];
  $mensaje = $_POST['mensaje'];

  if(!empty($nombre)&&!empty($correo)&&!empty($mensaje)){
    //echo $nombre." ".$correo." ".$mensaje;
    $mensajeCompleto = $mensaje."\n Atentamente: ".$nombre. "\nMy correo: ".$correo;
  
    $mail = new PHPMailer(true);
 
 try {
 //Server settings
 $mail->SMTPDebug = SMTP::DEBUG_OFF;                      //Enable verbose debug output
 $mail->isSMTP();                                            //Send using SMTP
 $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
 $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
 $mail->Username   = 'erickboch67@gmail.com';                     //SMTP username
 $mail->Password   = 'Erick68boch?';                               //SMTP password
 $mail->SMTPSecure =PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
 $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
 
 //Recipients
 $mail->setFrom('erickboch67@gmail.com', 'Contacto Portafolio');
 $mail->addAddress('erickboch67@gmail.com', 'Contacto Portafolio');     //Add a recipien              //Name is optional
 
 //Content
 $mail->isHTML(false);                                  //Set email format to HTML
 $mail->Subject = 'FORMULARIO DE CONTACTO';
 $mail->Body    =  $mensajeCompleto;
  if($mail->send()){
    echo 'true';
  }else{
    echo 'false';
  }

 } catch (Exception $e) {
 //echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
  return true;
 }
  }else{
    echo "ingrese los datos por favor";
  }
  /*
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\SMTP;
  use PHPMailer\PHPMailer\Exception;
  

  require 'PHPMailer/src/Exception.php';
  require 'PHPMailer/src/PHPMailer.php';
  require 'PHPMailer/src/SMTP.php';

  if(isset($_POST['btn_contacto'])){
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];
    $destino = "erickboch67@gmail.com";
    $mensajeCompleto = $mensaje."\n Atentamente: ".$nombre. "\nMy correo: ".$email;
  
   $mail = new PHPMailer(true);

try {
//Server settings
$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
$mail->isSMTP();                                            //Send using SMTP
$mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
$mail->SMTPAuth   = true;                                   //Enable SMTP authentication
$mail->Username   = 'erickboch67@gmail.com';                     //SMTP username
$mail->Password   = 'Erick68boch?';                               //SMTP password
$mail->SMTPSecure =PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
$mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

//Recipients
$mail->setFrom('erickboch67@gmail.com', 'Contacto Portafolio');
$mail->addAddress('erickboch67@gmail.com', 'Contacto Portafolio');     //Add a recipien              //Name is optional

//Content
$mail->isHTML(true);                                  //Set email format to HTML
$mail->Subject = 'Correo Portafolio';
$mail->Body    =  $mensajeCompleto;
$mail->send();
echo("<script>alert('Correo enviado');</script>");
header("location: index.html");
//echo("<script>setTimeout(\"location.href='index.html'\",0)</script>"); 
} catch (Exception $e) {
echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
  }
      */ 
?>