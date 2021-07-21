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
function saveDataInFile($directory){
    $dh = opendir($directory);
    $data = readdir($dh);
    while (($file = $data) !== false) {
        if($file == '.' || $file == '..'){ continue} else { $file }
    }
}
?>