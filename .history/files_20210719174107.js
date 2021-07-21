const xhr = new XMLHttpRequest();
console.dir(xhr)
xhr.open('GET','./audio.js');
xhr.onload = function(){
    // if(xhr.status == 200){
        console.log(this.responseText);
    // }
}
xhr.send();