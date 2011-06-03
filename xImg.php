<?php
  header("Expires: Mon, 22 Jan 1978 12:00:00 GMT");
  header("Cache-Control: no-cache");
  header("Pragma: no-cache");
  date_default_timezone_set('UTC');
  
  session_start();
  
  // Buffer
  if(isset($_GET) 
  || isset($_GET['b'])){

    if(isset($_GET['strt'])){//strt == start == first packet
      $_SESSION['buffer'] = '';
    }

    $_SESSION['buffer'] .= $_GET['b'];

    if(isset($_GET['stp'])){// stp == stop == last packet
      $_GET['d'] = $_SESSION['buffer'];
      unset($_SESSION['buffer']);
    }
  }


  if(isset($_GET) 
  && isset($_GET['d'])){
    $data = json_decode($_GET['d']);
    
    // Do something with $data ...
    //var_dump($data);
    
  }
  
  // ... and echoes a 1x1 jpeg
  header('Content-type: image/jpeg');
  echo base64_decode('/9j/4AAQSkZJRgABAQEAZABkAAD/2wBDAAEBAQEBAQEBAQEBAQECAgMCAgICAgQDAwIDBQQFBQUEBAQFBgcGBQUHBgQEBgkGBwgICAgIBQYJCgkICgcICAj/2wBDAQEBAQICAgQCAgQIBQQFCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAj/wAARCAABAAEDAREAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAAC//EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AP/B//9k=');
  

?>