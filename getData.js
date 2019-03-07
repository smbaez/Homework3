var fetch = require('node-fetch');

var url = 'https://api-v3.mbta.com/vehicles?api_key=6b5d5e74bc174516af3ad186ef59073c&filter[route]=1&include=trip';

function myFunc(){
    fetch(url)
    .then(function(response){
        return response.json()
        })
    .then(function(json){
        console.log(new Date())
        console.log(json.data)
        }) 
}
setInterval(myFunc,15000);