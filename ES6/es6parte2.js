//es6

const nombre = "adolfo"

console.log(`Welcome ${nombre}    `)

const mensaje = `WElcome!    
adolfo
luis
oscar 
edmundo  `;

console.log(mensaje)

const a= 10
const b = 30  


console.log(` a+b =  ${a+b} `)


//arreglos

const colores = ['blue','red','yellow']

console.log( `primay colors ${colores.join(',')}`)



//alto orden

//evalua un arreglo y devuelve los numeros que sean inpares
//o que su residuo sea distinto de 0 (zero)
const numbers = [1,2,3,4,5,6,7,8,9,10];
console.log( `odd numbers ${
numbers.filter(function(n) {


    return n % 2 != 0
} )
}
`)


//array
const colors = ['blue','red','yellow']
const copyofcolors = colors
const copyofcolorsSpred = [...colors]

colors[0] = 'white'
console.log(colors)

console.log(copyofcolors)

console.log(copyofcolorsSpred)

//
const personal =
{
 nombre: 'adolfo',
 apellido: 'machado'
}
const copyofpersons = personal
const copyofpersonsSpred = {...personal}

console.log(personal)
console.log(copyofpersons)

personal.nombre = 'ariel'
console.log(personal)
console.log(copyofpersons)
console.log(copyofpersonsSpred)


//objeto
const book =
{
autor: 'David',
Tittle: 'Solitario',
year: 1996
}

const copyofBooks = book
const copyofBooks2= {...book, year:2000}

console.log(book)
console.log(copyofBooks)
console.log(copyofBooks2)
