<?php
  include 'auth.php';
  include 'check_admin.php';
  session_start();

  if ($_POST["login"] && $_POST["passwd"])
  {
    if (auth($_POST["login"], $_POST["passwd"]) === TRUE)
    {
      $_SESSION["logged_on_user"] = $_POST["login"];
      if (check_admin($_POST["login"]) === TRUE)
        header("Location: admin_page.php");
      echo "OK\n";
      header("Location: index.js");
?>
<html>
  <body>
    <a href="logout.php">You are logged in as <i><?php echo $_SESSION["logged_on_user"] ?></i>. Click here to logout.</a>
  </body>
</html>

<?php
    }
    else
    {
      $_SESSION["logged_on_user"] = "";
      echo "ERROR\n";
    }
  }
  else
  {
    $_SESSION["logged_on_user"] = "";
    echo "ERROR\n";
  }
?>
