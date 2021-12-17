const path = require('path');
const fs = require('fs');

//creamos un a rchivo utilizando fs.writefile

fs.writeFile(path.join(__dirname,'/ejemplo_1.txt'),'este es mi archivo',{encoding: 'UTF-8'}, (err) =>{
 if(err) throw err;
 console.log('writeFile','archivo creado!')

} )

//Para leer el contenido del archivo usaremos la función:  fs.readFile()
fs.readFile(path.join(__dirname,'/ejemplo_1.txt'), {encoding: 'UTF-8'}, function(err,data) {
    if(err) return console.error(error);
    console.log('readfile',data)

} )

//Podemos update sobre nuestro archivo añadiendo una nueva línea con el siguiente código : fs.appendFile()
fs.appendFile(path.join(__dirname,'/ejemplo_1.txt'),'\nEsto es una nueva línea',(err)=> {
    if(err) throw err;
    console.log('appendfile','archivo actualizadp!')

})


//_dirname: Obtiene el nombre completo del directorio donde se encuentra el archivo actualmente 
//ejecutado__filename: obtenga el nombre del archivo con la ruta absoluta completa del archivo actualmente ejecutado
