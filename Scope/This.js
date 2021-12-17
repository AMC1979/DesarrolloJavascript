console.log(this)

function foo()
{ console.log(this) }

foo()

function logThis()
{
console.log("its == winrows" + (this === window))
}



var foob = {
//metodo
logThis: logThis
}

logThis()

foob.logThis();