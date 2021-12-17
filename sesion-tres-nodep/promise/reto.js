//const https = require("https")
const swapi = require('swapi-node')

function GetPeople(){
    
    swapi.get('https://swapi.dev/api/people/?page=2').then((resultado) =>{
    console.log(resultado)})
    

   /* data.then('end',() =>
   {
    let body = JSON.parse(data)
    
        console.log('films', body.films)
        console.log('\n vehicles', body.vehicles)
        console.log('\n starships', body.starships)
   })*/
}
   
    




GetPeople()