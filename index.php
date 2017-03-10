<?php

include_once("home.html");

if(empty($_SERVER['HTTPS']) || $_SERVER['HTTPS'] == "off"){
    $redirect = 'https://www.enloemusic.com';
    exit();
}

?>
