<?php 
    $dir = '../../Music/UG/';
    $open = opendir($dir);
    $read_folder = readdir($open);
    while (($file = $read_folder) != null) {
        if ($file =='.' or $file == '..') {
            # code...
            continue;
        }else{
            
        }
    }

    // create json file
    function writeData($stringData){
    $filename = 'songs.json';
    $data = fopen($filename,'w+');
    while (feof($data)) {
        fwrite($data,$stringData)
        # code...
    }
    fclose($data);
}
?>