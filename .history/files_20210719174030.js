const xhr = new XMLHttpRequest();
xhr.open('GET','./audio.js');
xhr.onload = function(){
    // if(xhr.status == 200){
        console.log(this.responseText);
    // }
}
xhr.send();