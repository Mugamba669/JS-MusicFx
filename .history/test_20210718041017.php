<?php
$content = file_get_contents("http://www.cba.am/am/SitePages/Default.aspx");

preg_match('#<b>USD</b>(.*)<em class="w_50">([0-9\.]*)</em><em class="w_50">([0-9\.]*)</em>#Uis', $content, $USDmatch);
preg_match('#<b>EUR</b>(.*)<em class="w_50">([0-9\.]*)</em><em class="w_50">([0-9\.]*)</em>#Uis', $content, $EURmatch);
preg_match('#<b>GBP</b>(.*)<em class="w_50">([0-9\.]*)</em><em class="w_50">([0-9\.]*)</em>#Uis', $content, $GBPmatch);

$eur = $EURmatch[3];
$usd = $USDmatch[3];
$gbp = $GBPmatch[3];

echo "EUR: $eur USD: $usd GBP: $gbp";
?>