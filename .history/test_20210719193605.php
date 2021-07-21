<?php 
    $directory = "../../Music/";
    $check = is_dir($directory);
    ($check == true) ? saveDataInFile($directory) : 'Not directory';
    echo $retVal;
function saveDataInFile($directory){
    $dh = opendir($directory);
    $data = readdir($dh);
    while (($file = $data) !== false) {
        if($file == "." || $file == ".."){
             continue;
        } else {
           echo  $file."\n"; 
         }
    }
}
?>