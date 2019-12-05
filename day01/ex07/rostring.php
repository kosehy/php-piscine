#!/usr/bin/php
<?php

if ($argc > 1 && isset($argv))
{
	$r = preg_replace('/\s+/', ' ', $argv[1]);
	$s = preg_split('/\s/', $r);
	for ($i = 1; $i < count($s); $i++)
		echo "$s[$i] ";
	echo "$s[0]\n";
}
?>
