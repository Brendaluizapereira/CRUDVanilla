<?php
$email = $_POST['email'];
$entrar = $_POST['entrar'];
$senhacad = md5($_POST['senhacad']);
$connect = mysql_connect('nome_do_servidor','nome_de_usuario','senha');
$db = mysql_select_db('nome_do_banco_de_dados');
  if (isset($entrar)) {

    $verifica = mysql_query("SELECT * FROM cadastros WHERE email =
    '$email' AND senha = '$senhacad'") or die("erro ao selecionar");
      if (mysql_num_rows($verifica)<=0){
        echo"<script language='javascript' type='text/javascript'>
        alert('Login e/ou senha incorretos');window.location
        .href='login.html';</script>";
        die();
      }else{
        setcookie("email",$email);
        header("Location:index.php");
      }
  }
?>