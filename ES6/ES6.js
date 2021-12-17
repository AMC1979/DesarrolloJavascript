
const colors = ['blue','red','yellow']
const Copycolors = ['velde',...colors,'Violeta','purpura']


console.log(Copycolors)


const books =
{
autor: "David",
Tittle: "Solitario",
year: "1996"
}

console.log(books)


const oneToThree = [1, 2, 3];

const fourToSix = [4, 5, 6];

const oneToSix = [ ...oneToThree, ...fourToSix ]

console.log(oneToSix);


//2- Realiza un copia del siguiente objeto:

const person = {

name : 'John',

lastName : 'Doe',

birth : 1993

};


console.log(person.birth)

function getAobjects()
{
 return{
        "id": 1,
        "firstnames": "juan",
        "lastnames": " perro" ,
        "ages": 25
 }
}

function GetAnyArrays()
{
  return [
    "Hey",
    function() {console.log("Mensaje");}
  ];
}

const object = getAobjects();
console.log(object.firstnames+ " "+ object.lastnames)

const {firstnames,lastnames} = getAobjects();
console.log(firstnames+" "+lastnames)

const [,MyFunction] = GetAnyArrays();
MyFunction()