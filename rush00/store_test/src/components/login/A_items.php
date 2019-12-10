<?php
  session_start();
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset = "utf-8">
    <title>A_items</title>
    <link rel="stylesheet" type="text/css" href="display_items.css" />
  </head>
  <body>
    <div class="cart" style="float: right">
      <a href="cart.php">Click here to see your <?php
      if (isset($_SESSION["num_items"]))
        echo "(".$_SESSION["num_items"].") items in cart";
      else {
        echo "cart";
      }
      ?>
    </div>
    <a href="index.php">Click here to go back to home screen!</a>
    <div class="store_display">
      <div class="item">
        <img class="img" src="https://static.highsnobiety.com/thumbor/9VbiMf7mdin_nWqKsHCP9_Ej0Vk=/fit-in/1200x800/smart/static.highsnobiety.com/wp-content/uploads/2019/02/26101638/best-nike-shoes-2019-martin-rose-monarch.jpg">Nike</img>
      </div>
    </div>

  </body>
</html>
