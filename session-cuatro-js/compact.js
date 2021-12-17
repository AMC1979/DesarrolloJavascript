/*function compact(array)
{
return array.filter(function(element)
{
return !!element
})

}
module.exports = compact*/

//babel

export const compact = (array) => 
{
  
    if(!array.length) throw Error('array cannot be empty') //test de vacios
    return array.filter((element) => !!element); //test de arreglo normal
}  ;  

/*export function compact(array) {
  if(!array.length) throw Error('Array cannot be empty') //vacios
  return array.filter((element) => !!element); //arreglo normal 
}*/

export const suma = (array) =>
{
    let suma=0;
    array.forEach(each => {
      suma+=each;
    });
    return suma;
  };