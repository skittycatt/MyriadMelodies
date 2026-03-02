
<?php
    header('Access-Control-Allow-Methods: GET, POST');
    $url = $_GET["url"];
    echo file_get_contents($url);
?>
