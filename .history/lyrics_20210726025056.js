const Genius = require('genius-lyrics');
const client = new Genius.Client("opD3U2bdGUVFn8BIJzcktbc9iZGH7sGS5f6hie_4Nh2y689wY9D-hc5yLr9VAQE_eXFoBDseBlO76yj0bISYsQ")
 var  search = async function (){
    let searches = await Client.songs.search('faded')
    searches.lyrics();
    return searches;
}
search.then(response => console.log(response.data));