<?php 
    $check = is_dir("../../Music/UG/");
    $retVal = ($check == true) ? 'Is directory' : 'Not directory';
    echo $retVal;
    // create json file
//     function writeData($stringData){
//     $filename = 'songs.txt';
//     $data = fopen($filename,'w+');
//     file_put_contents($filename,$stringData);
// }

?>