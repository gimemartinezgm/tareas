// length devuelve el numero de posiciones que contiene el array


let numeros = [1,2,3,4,5,1]
//console.log(numeros.length)

// metodos Array.isArray devuelve true si la variable es un array
let number = 4;
//console.log(Array.isArray(number))
//console.log(Array.isArray(numeros))

//eliminar un elemento .shift(elimina el primer elemento del array) o .pop(elimina el ultimo)
//console.log(numeros);
//numeros.shift();
//console.log(numeros);
//numeros.pop();
//console.log(numeros);

//añadir elementos a un array
// .push (añade uno o mas elementos al final del array) .unshift(añade uno o mas elementos al comienzo)
//numeros.push(6);
//console.log(numeros);
//let newLength2 = numeros.unshift(0);
//console.log(numeros);
// indexof devuelve el rpimer indice del elemento que coincida con el valor especificado o -1 si no l oencontro
//console.log(numeros.indexOf(2));
// last.IndexOf() devuelve el ultimo numero que coincide
//console.log(numeros);
//console.log(numeros.lastIndexOf(1))

// reverse invierte el orden del array
//console.log(numeros);
//numeros.reverse();
//console.log(numeros)

// .join devuelve un string con el separador que indiquemos
//console.log(numeros)
//console.log(numeros.join("-")
//splice cambia el contenido de un array eliminando elementos existentes o agregando otros
//console.log(numeros);
//numeros.splice(3); // elimina desde la posicion 3 hasta el final
//numeros.splice(2,2) - elimina desde la posicion 2 los valores que le indiquemos
//numeros.splice(2,2,10)
//console.log(numeros); si b es un valor distino de 0 elimina el numero de valores que indiquemos en b y añade los valores de items a partir de la posicion a
// si b vale 0 añade los elementos a partir de la posicion a  y no elimina ninguno
//let newNumeros =  numeros.slice();
//console.log(numeros);
//console.log(newNumeros);

//let newNumeros =  numeros.slice(2); muestra de la posicion 2 en adelante
//console.log(numeros);
//console.log(newNumeros);

let newNumeros =  numeros.slice(2,3); // va hasta la posicion 2 y extrae hasta la 3
console.log(numeros);
console.log(newNumeros);




