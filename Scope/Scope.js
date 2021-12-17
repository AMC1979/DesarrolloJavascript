//scope global

var nombre = "QueHagoconEsto"
var Ape = "Mi Abor"

function foo()
{
    console.log(nombre)
}

/*
function foo2()
{
    console.log(`<tr><td>${nombre},${Ape},perplejo ${nombre}</td></tr>`  )
    //console.log(nombre,Ape,"perplejo"  )
}*/


//foo();
//foo2();

if(true)
{
 var miname = "Ado"
 console.log(miname)
}

var numbers = [1,2,3,4,5]
var dobletes = []
for(let i=0;i<numbers.length;i++)
{
 console.log( numbers[i]*2)
 dobletes.push(numbers[i]*2)
}

console.log(dobletes)



function range(start, end, step) 
{
    
    let array = []; 
    if(step==null)
    {step=1
       if(start>end )
     {step=-1}
    } 

    
    if(step<0)
    {
       //console.log("aca")
     for (let i=start;i>=end;i+=step)
     {
      array.push(i)
      }
    }
    
    if(step>0)
    {
     for (let i=start;i<=end;i+=step)
     {array.push(i)}
    }
    return array
}


function sum(array) 
{
  let numeros = 0;
  for(const numero of array)
 {
 numeros+=numero
 }
return numeros 
}



  console.log( range(1, 5) ); // [1, 2, 3, 4, 5]

 console.log( range(1, 10, 2) ); // [1, 3, 5, 7, 9]
  
  console.log( range(5, 2,-1) ); // [5, 4, 3, 2]
  
  console.log( sum(range(1, 10)) ); // 55





/*
  function deepEqual(a, b) {

    if (a === b) return true;
    
    if (a == null || typeof a != "object" ||
  
        b == null || typeof b != "object") return false;
  
   
        let keysA = Object.keys(a), keysB = Object.keys(b);
  
        if (keysA.length !== keysB.length) return false;
      
        for (let key of keysA) {
      
            if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
        
          }
          
    return true;
  
  }
  
  let obj = { here: { is: "an" }, object: 2 };
  
  console.log(deepEqual(obj, obj)); // true
  
  console.log(deepEqual(obj, { here: 1, object: 2 })); // false
  
  console.log(deepEqual(obj, { here: { is: "an" }, object: 2 } ) ); // true*/