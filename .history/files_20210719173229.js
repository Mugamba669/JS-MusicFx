const xhr = new XMLHttpRequest();
xhr.open('GET','../../Music/500 Veces ( 256kbps cbr ).mp3');
xhr.onload = function(){
    if(xhr.status == 200){
        console.log(xhr.responseText);
    }
}