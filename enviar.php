
<?php

$destino = 'arechaga.facundoet36@gmail.com';
$nombre = '';
$apellido = '';
$pago = '';
$provincia = '';
if (isset($_POST['nombre']) || isset($_POST['apellido']) || isset($_POST['pago']) || isset($_POST['pago']))
{
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $pago = $_POST['pago'];
    $provincia = $_POST['provincia'];
}



$headers =  'From: noreply@example.com' . "\r\n"; 
$headers .= 'Reply-To: noreply@example.com' . "\r\n";
$headers .=  'X-Mailer: PHP/'. phpversion();
$contenido = "Nombre: " . $nombre . "\nApellido: " . $apellido . "\nPago: " . $pago . "\n Lugar: " . $provincia;


mail($destino, "Consulta viaje argentina", $contenido, $headers);

?>
