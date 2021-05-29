let figura= prompt(`Ingrese la figura de la cual quiere calcular el area: Triangulo,rectangulo o circulo?`)

let base;
let altura;
let radio;
pi=3.1416
switch(figura){
    case `triangulo`:
        base =prompt("Ingrese base del triangulo:");
        altura=prompt("Ingrese altura del triangulo:");
        console.log(`El area del triangulo es: ${(base*altura)/2}`);
        break;
        case `rectangulo`:
              base=prompt("Introduce base del rectangulo:");
              altura=prompt("Introduce altura del rectangulo");
               console.log(`El area del rectangulo es: ${base*altura}`);
            break;
case `circulo`:
    radio=prompt("introduce radio del circulo");
    console.log(`El area del circulo es: ${Math.PI*Math.pow(radio,2)}`);
    break;

}


    
    