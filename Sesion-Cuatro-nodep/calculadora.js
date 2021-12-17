//const node= process.argv[0]
//const archivo= process.argv[1]
const process = require('process');


const operacion= process.argv[2]
const num1= process.argv[3]
const num2= process.argv[4]

// operacion == operaciones aritmeticas
switch (operacion)
{

case 'suma':
     console.log(`${num1}+${num2}= ${Number(num1)+Number(num2)}`) 
    break;
case 'resta':
    console.log(`${num1}- ${num2}=${num1}-${num2}`) 
    break;
case 'multiplicacion':
    console.log(`${num1}*${num2}=${num1}*${num2}`) 
     break; 
case 'division':
     console.log(`${num1}/${num2}=${num1}/${num2}`) 
     break;  
 default:
     break;

}

const readline = require('readline').createInterface({

    input:process.stdin,
    output : process.stdout
})

readline.question('Quien eres', name=>{

console.log(`hola ${name}`);
readline.close()

})

// POstWork Readline + calculadora o cualq
