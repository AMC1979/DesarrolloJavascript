//var readline = require('readline');

const readline = require('readline').createInterface({

    input:process.stdin,
    output : process.stdout
})

const num1 = Number
const num2 = Number
const op  = this.op


function recusiva() 
{
    readline.question("Primer numero: ",num1=>{

        readline.question("segundo numero: ",num2=>
        {
            readline.question("Operador : ",op=>
            {
            operaciones(num1,num2,op)

            const checkIfItsDone = () => {
                isItDoneYet
                    .then(ok => {
                    console.log(ok)
                    })
                    .catch(err => {
                    console.error(err)
                    })
                }
                
                checkIfItsDone()
         
               readline.question('Desea Salir (s or n)? ', (input) => 
                {
                if (input.match(/^s(es)?$/i)) { readline.close(); }else
                {recusiva()}
                });
             })
        })
    })
}


recusiva()


const isItDoneYet = new Promise((resolve, reject) =>
{
if (operaciones()!=NaN) {

    const workDone = 'Here is the thing I built'
    resolve(workDone)
} else {
    const why = 'Still working on something else'
    reject(why)
}
})





  
function operaciones(num1,num2,op)
{
    switch (op)
    {
   case '+':
        console.log(`${num1}+${num2}= ${Number(num1)+Number(num2)}`) 
        break;
    case '-':
        console.log(`${num1}- ${num2}=${Number(num1)-Number(num2)}`) 
        break;
    case '*':
        console.log(`${num1}*${num2}=${Number(num1)*Number(num2)}`) 
        break; 
    case '/':
        console.log(`${num1}/${num2}=${Number(num1)/Number(num2)}`) 
        break;  
    default:
         break;

    }

}