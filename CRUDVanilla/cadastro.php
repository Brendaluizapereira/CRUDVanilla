<?php

$email = $_POST['email'];
$senhacad = MD5($_POST['senhacad']);
$connect = mysql_connect('127.0.0.1 ','nome_de_usuario','senha');
$db = mysql_select_db('projedocrud');
$query_select = "SELECT email FROM cadastros WHERE email = '$email'";
$select = mysql_query($query_select,$connect);
$array = mysql_fetch_array($select);
$logarray = $array['email'];

  if($email == "" || $email == null){
    echo"<script language='javascript' type='text/javascript'>
    alert('O campo email deve ser preenchido');window.location.href='
    cadastro.html';</script>";

    }else{
      if($logarray == $email){

        echo"<script language='javascript' type='text/javascript'>
        alert('Esse login já existe');window.location.href='
        cadastro.html';</script>";
        die();

      }else{
        $query = "INSERT INTO cadastros (email,senhacad) VALUES ('$email','$senhacad')";
        $insert = mysql_query($query,$connect);

        if($insert){
          echo"<script language='javascript' type='text/javascript'>
          alert('Usuário cadastrado com sucesso!');window.location.
          href='login.html'</script>";
        }else{
          echo"<script language='javascript' type='text/javascript'>
          alert('Não foi possível cadastrar usuário.');window.location
          .href='cadastro.html'</script>";
        }
      }
    }
?>