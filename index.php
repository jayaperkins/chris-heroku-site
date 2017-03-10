<?php

if(empty($_SERVER['HTTPS']) || $_SERVER['HTTPS'] == "off"){
    $redirect = 'https://www.enloemusic.com';
    exit();
}

include_once("home.html");

?>
