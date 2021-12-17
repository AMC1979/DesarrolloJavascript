var http = require("http")

server = http.createServer(function (peticion,respuesta){
 
    respuesta.end(`<h1>Hola from server</h1>`)

} )

server.listen(3000,function(){

    console.log("servidor en el puerto "+this.address().port)

})