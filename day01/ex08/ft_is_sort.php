#!/usr/bin/php
<?php
function ft_is_sort($tab)
{
	if (isset($tab))
	{
		$r = $tab;
		sort($tab);
		for ($i = 0; $i < count($tab); $i++)
			if (strcmp($tab[$i], $r[$i]))
				return 0;
		return 1;
	}
}
?>
