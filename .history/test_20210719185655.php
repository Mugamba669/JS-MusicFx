<?php 
    $dir = '../../Music/UG/';
    $open = opendir($dir);
    $read_folder = readdir($open);
    while (($file = $read_folder) != null) {
        if ($file =='.' or $file == '..') {
            # code...
            continue;
        }else{
            // writeData($file);
            echo $file;
        }
    }

    // create json file
    function writeData($stringData){
    $filename = 'songs.txt';
    $data = fopen($filename,'w+');
    file_put_contents($filename,$stringData);
}

?>