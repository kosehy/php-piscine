#!/usr/bin/php
<?php
while (1)
{
	echo "Enter a number: ";
	$str = trim(fgets(STDIN));
	if (feof(STDIN))
	{
		echo "\n";
		return ;
	}
	if (is_numeric($str))
	{
		$i = intval($str);
		if ($i % 2 == 0)
		{
			echo "$i is even.";
			echo "\n";
		}
		else
		{
			echo "$i is odd";
			echo "\n";
		}
	}
	else
	{
		echo "'$str' is not a number";
		echo "\n";
	}
}
?>
