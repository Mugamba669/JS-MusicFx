<?php 
    $check = is_dir("../../Music/UG/");
    $retVal = ($check == true) ? echo('Is directory') : echo('Not directory') ;
    
    // create json file
//     function writeData($stringData){
//     $filename = 'songs.txt';
//     $data = fopen($filename,'w+');
//     file_put_contents($filename,$stringData);
// }

?>