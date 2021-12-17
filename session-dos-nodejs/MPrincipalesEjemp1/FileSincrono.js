const path = require('path');
const fs = require('fs');

fs.writeFileSync(path.join(__dirname,'Ejempplo2.txt'), 'este es mi files sync',{encoding: 'UTF-8'},()=>{
    if(err) throw err;
    console.log('writeFileSync','archivo creado!')

})


data = fs.readFileSync(path.join(__dirname,'Ejempplo2.txt'),{encoding: 'UTF-8'})
console.log('readFileSync',data)

fs.appendFileSync(path.join(__dirname, 'Ejempplo2.txt'), '\n Esto es una segunda nueva linea');
console.log('appendFile','Archivo actualizado!')
