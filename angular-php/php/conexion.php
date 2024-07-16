<?php
function retornarConexion() {
  $con= new mysqli("127.0.0.1:3306" ,"root","","bd1");
  if($cad->connect_errno){
    echo "Fallo al conectar a MySQL: (" . $con->connect_errno . ") " . $con->connect_error;
  }
  else {
    echo "conectado " + $con;
    return $con;
  }
}
?>