const xhr = new XMLHttpRequest();
console.dir(xhr)
xhr.open('GET','./config.xml');
xhr.onload = function(){
    // if(xhr.status == 200){
        console.log(this.response);
    // }
}
xhr.onerror = (Error)=>{
    console.log(Error)
}
xhr.onprogress = (oevent)=>{
    if (oevent.lengthComputable) {
    var progress =  oevent.loaded / oevent.total;
        console.log(progress)
    }
}
xhr.send();