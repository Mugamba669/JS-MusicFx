const fs = require('fs');
const path = require('path')
// console.log(path.join(__dirname));
var url = '../../Music/'
 fs.readdir(url,function(error,data){
     console.log(data);
 });