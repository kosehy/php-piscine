<?php
  session_start();
  $_SESSION["num_items"] = 5;
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset = "utf-8">
    <title>Shopping</title>
    <link
  </head>
  <body>
    <div class="cart" style="float: right">
      <a href="cart.php">Click here to see your <?php
      if (isset($_SESSION["num_items"]))
        echo "(".$_SESSION["num_items"].") items in cart";
      else {
        echo "cart";
      }
      ?> </a>
    </div>
    <h2>Welcome!</h2>
    <a href="create.php">Click here to make an account</a>
    <br/>
    <a href="modif.php">Click here to modify an account</a>
    <br/>
    <a href="delete.php">Click here to delete an account</a>
    <br/>
    Login: <br/>
    <form name="login.php" method="post" action="login.php">
      Username: <input type="text" name="login" value="" />
      <br />
      Password: <input type="password" name="passwd" value="" />
      <input type="submit" name="submit" value="OK" />
    </form>
    <a href="sneakers.php">Click here to see sneakers!</a>
    <br/>
  </body>
</html>
