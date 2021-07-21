<?php 
    $directory = "../../Music/UG/";
    $check = is_dir($directory);
    ($check == true) ? saveDataInFile($directory) : 'Not directory';
function saveDataInFile($directory){
    if ($dh = opendir($directory)) {
        $files = array();
        while (($file = readdir($dh)) !== false) {
            // if (substr($file, strlen($file) - 5) == '.html') {
            //     array_push($files, $file);
            // }
            if($file == "." or $file == "..") continue;
            echo $file."\n";
        }

        closedir($dh);
    }
}

    function storeInJsonFile($data){
        $filename = "./tracks";
      $filecreated  = fopen($filename,'a+');
        file_put_contents($filename,$data);
        fclose($filecreated);
    }
?>