#!/usr/bin/php
<?php
if (isset($argc))
{
	$s = trim($argv[1]);
	$result = preg_replace('/\s+/', ' ', $s);
	echo "$result\n";
}
?>
