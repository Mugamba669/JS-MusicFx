const xhr = new XMLHttpRequest();
console.dir(xhr)
xhr.open('GET','../../Music/');
xhr.onload = function(){
    // if(xhr.status == 200){
        console.log(this.responseText);
    // }
}
xhr.onprogress = (oevent)=>{
    if (oevent.lengthComputable) {
    var progress =  oevent.loaded / oevent.total;
        console.log(progress)
    }
}
xhr.send();