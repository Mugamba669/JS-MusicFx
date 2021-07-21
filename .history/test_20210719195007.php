<?php 
    $directory = "./";
    $check = is_dir($directory);
    ($check == true) ? saveDataInFile($directory) : 'Not directory';
function saveDataInFile($directory){
    if ($dh = opendir($directory)) {
        $files = array();
        while (($file = readdir($dh)) !== false) {
            // if (substr($file, strlen($file) - 5) == '.html') {
            //     array_push($files, $file);
            // }
            echo $file."\n";
        }
        closedir($dh);
    }
}
?>