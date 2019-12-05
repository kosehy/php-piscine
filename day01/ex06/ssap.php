#!/usr/bin/php
<?php
$a = [];
if ($argc > 1)
{
	for ($i = 1; $i < $argc; $i++)
	{
		if (preg_match('/\s/', $argv[$i]))
		{
			$s = preg_replace('/\s+/', ' ', trim($argv[$i]));
			$s = preg_split('/\s/', $s);
			foreach($s as $val)
				array_push($a, $val);
		}
		else
		    array_push($a, $argv[$i]);
	}
	sort($a);
	foreach($a as $r)
	{
		echo "$r";
		echo "\n";
	}
}
?>
