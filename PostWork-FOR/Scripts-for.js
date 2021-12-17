
//Implementar for...of sobre iterables - Ejercicio

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



  
  function deepEqual(a,b) 
  {
  if (a === b)
   {    return true;  }
  //se pregunta si ambos son objetos y distintos de null
  else if ((typeof a == "object" && a != null) && (typeof b == "object" && b != null)) 
  {
      //retornamos el largo de a y b para conocer si tienen el mismo largo
    if (Object.keys(a).length != Object.keys(b).length)
    //if(Object.a.length=Object.b.length)
      return false;
       for (var prop in a) 
      {
      if (b.hasOwnProperty(prop)) 
      {  
        if (! deepEqual(a[prop], b[prop]))
          return false;
      }
      else
        return false;
    }
    
    return true;
  }
  else 
    return false;
}

  let obj = { here: { is: "an" }, object: 2 };

 console.log(deepEqual(obj, obj)); // true
 console.log(deepEqual(obj, { here: 1, object: 2 })); // false
 console.log(deepEqual(obj, { here: { is: "an" }, object: 2 })); // true



  
