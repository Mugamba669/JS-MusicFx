<?php 
    $directory = "../../Music/UG/";
    $check = is_dir($directory);
    ($check == true) ? saveDataInFile($directory) : 'Not directory';
function saveDataInFile($directory){
    $dh = opendir($directory);
        $files = array();
        while (($file = readdir($dh)) !== false) {
            // if (substr($file, strlen($file) - 5) == '.html') {
            //     array_push($files, $file);
            // }
            if($file == "." or $file == "..") continue;
                array_push($files,$file);
        }

        closedir($dh);

        foreach ($files as $key => $value) {
            // echo $key."\n";
            storeInJsonFile($key.$value);
        }
    
}

    function storeInJsonFile($data){
        $filename = "./tracks.txt";
        if (file_exists($filename)) unlink($filename);
      $filecreated  = fopen($filename,'x+');
        //   fwrite($filecreated ,$data);
        file_put_contents($filename,$data, FILE_APPEND | LOCK_EX);
        // fclose($filecreated);
    }
?>