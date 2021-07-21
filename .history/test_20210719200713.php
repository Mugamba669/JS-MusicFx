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
            // echo $file."\n";
            $jsonData = json_decode($file);
            storeInJsonFile($file);
        }

        closedir($dh);
    }
}

    function storeInJsonFile($data){
        $filename = "./tracks.txt";
      $filecreated  = fopen($filename,'a+');
      while (feof($filecreated)) {
          # code...
          fwrite($filecreated ,$data);
      }
        fclose($filecreated);
    }
?>