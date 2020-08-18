<?php
  $email_cookie = $_COOKIE['email'];
    if(isset($email_cookie)){
      echo"Bem-Vindo, $email_cookie <br>";
    }
?>