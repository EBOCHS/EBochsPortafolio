<?php
    if(isset($_POST['btn_contacto'])){
        $nombre = $_POST['nombre'];
        $email = $_POST['email'];
        $mensaje = $_POST['mensaje'];
        $header = "Enviado desde la pagina  del portafolio";
        $destino = "erickboch67@gmail.com";
        $mensajeCompleto = $mensaje."\nAtentamente: ".$nombre. "\nMy correo: ".$email;
        $asunto = "Poder contactarlo";
       mail($destino,$asunto,$mensajeCompleto,$header);
       echo("<script>alert('Correo enviado');</script>");
       echo("<script>setTimeout(\"location.href='index.html'\",500)</script>"); 
    }
?>