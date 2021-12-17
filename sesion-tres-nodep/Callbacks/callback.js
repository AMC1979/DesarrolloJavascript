const { SourceMap } = require("module")

function holamundo()
{


}

holamundo()


function suma(a,b)
{
var c = a +b 
return c
}

suma(2,3) //entry

function resta(a,b,callback)
{
callback("Hola soy yo Mario!")

var c = a -b 
return c 

}
console.log( resta(4,5,function(g){ console.log(g) }  ) )


function primero()
{
    
   // segundo()
     setTimeout(
     function()
     {       console.log("primero")     },5000
   )  
}

function segundo()
{
 //tercero() 
     setTimeout(
     function()
     {
    console.log("segundo") },6000
    )  
}

function tercero()
{
    setTimeout(
        function()
        {        console.log("tercero") },7000
        )  
}

primero()
segundo()
tercero()

//console.log( primero(segundo,tercero) )

setTimeout(function () {
    console.log("Soy el 1");
    setTimeout(function () {
      console.log("Soy el 2");
      setTimeout(function () {
        console.log("Soy el 3");
        setTimeout(function () {
          console.log("Soy el 4");
          // Podría a ver más llamadas asíncronas
        }, 4000);
      }, 3000);
    }, 2000);
  }, 1000);
  
