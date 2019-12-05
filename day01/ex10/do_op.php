#!/usr/bin/php
<?php
function do_op($numbur1, $numbur2, $op)
{
	switch ($op)
	{
		case "+":
			echo $numbur1 + $numbur2;
			break;
		case "-":
			echo $numbur1 - $numbur2;
			break;
		case "*":
			echo $numbur1 * $numbur2;
			break;
		case "/":
			echo $numbur1 / $numbur2;
			break;
		case "%":
			echo $numbur1 % $numbur2;
			break;
		default:
			break;
	}
}

if ($argc != 4)
{
	echo "Incorrect Parameters";
	echo "\n";
}
else
{
	$num1 = intval($argv[1]);
	$num2 = intval($argv[3]);
	$op = trim($argv[2]);
	do_op($numbur1, $numbur2, $op);
	echo "\n";
}
?>
