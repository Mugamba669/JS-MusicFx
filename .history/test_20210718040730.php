<?php
$content = file_get_contents('https://www.nowviba.com/music/pages/search.php?q=Buligita');

// $pos = str_pos($content,'id="c');
// $on=0;
// while($pos!==false)
//  {
//  $content = substr($content,$pos+4);
//  $pos = str_pos($content,'"');
//  $list[$on] = substr($content,0,$pos);
//  $on++;
//  $pos = str_pos($content,'id="c');
//  }
echo $content;
?>