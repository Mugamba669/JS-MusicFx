<?php 
    $check = is_dir("../../Music/");
    ($check == true) ? 'Is directory' : 'Not directory';
    echo $retVal;
function saveDataInFile($directory){
    $dh = opendir($directory);
    $data = readdir($dh);
    while (($file = $data) !== false) {
        if($file == '.' || $file == '..')
        { continue;
        } else {
           echo  $file; 
         }
    }
}
?>