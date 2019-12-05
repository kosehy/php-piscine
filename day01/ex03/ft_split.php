#!/usr/bin/php
<?php
function ft_split($str)
{
	$str = preg_split('/\s+/', $str);
	sort($str);
	return ($str);
}
?>
