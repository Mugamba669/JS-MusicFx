const Genius = require('genius-lyrics');
 var  search = async function (){
const client = new Genius.Client("opD3U2bdGUVFn8BIJzcktbc9iZGH7sGS5f6hie_4Nh2y689wY9D-hc5yLr9VAQE_eXFoBDseBlO76yj0bISYsQ")
    let searches = await client.songs.search('faded')
    // searches.lyrics();
    return searches;
}
console.log(search());
