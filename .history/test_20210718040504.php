<?php
$content = file_get_contents('http://www.domain.com/whatever.html');

$pos = str_pos($content,'id="c');
$on=0;
while($pos!==false)
 {
 $content = substr($content,$pos+4);
 $pos = str_pos($content,'"');
 $list[$on] = substr($content,0,$pos);
 $on++;
 $pos = str_pos($content,'id="c');
 }
 $content = file_get_contents('http://www.domain.com/whatever.html');

$pos = str_pos($content,'id="c');
$on=0;
while($pos!==false)
 {
 $content = substr($content,$pos+4);
 $pos = str_pos($content,'"');
 $list[$on] = substr($content,0,$pos);
 $on++;
 $pos = str_pos($content,'id="c');
 }
?>