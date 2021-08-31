// spread operator (operador de expansion)
// Su sintaxis es ...


//const numbers = [-12,2,3,23,43,2,3] 
//console.log(...numbers);

// enviar elementos de un array a una funcion

/*const addNumbers = (a,b,c) =>{
    console.log(a+b+c);
}

let numbersToAdd =[1,2,3]

addNumbers(...numbersToAdd)*/

// añadir un array a otro array

let newUsers = ["marta", "jaime", "laura"]
let users = ["javiar", "juan", "rosa", "marcedes", "david"]

users.push(newUsers[0], newUsers[1], newUsers [2])

console.log(users)