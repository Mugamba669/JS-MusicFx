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
            echo $key."\n";
        }
    
}

    function storeInJsonFile($data){
        $filename = "./tracks.txt";
      $filecreated  = fopen($filename,'w');
          fwrite($filecreated ,$data);
        fclose($filecreated);
    }
?>