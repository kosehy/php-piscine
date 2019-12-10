<?php
  session_start();

  date_default_timezone_set("America/Los_Angeles");
if (file_exists("../private/chat"))
  {
    $fd = fopen("../private/chat", "r");
    flock($fd, LOCK_SH);
    $chatarray = unserialize(file_get_contents("../private/chat"));
    flock($fd, LOCK_UN);
?>
<html>
  <body>
<?php
    foreach ($chatarray as $messageArray)
    {
      $charTime = date("[H:i]", $messageArray["time"]);
      $user = $messageArray['login'];
      $message = $messageArray["msg"];
      echo $charTime." "."<b>".$user."</b>".": ".$message."<br />";
	}
  }
?>
  </body>
</html>
