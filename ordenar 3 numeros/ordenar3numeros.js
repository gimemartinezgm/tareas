// ejercicio ordenar tres numeros
//let num1 =1
//let num2 =6
//let num3 =10
//if (num1>num2 && num1>num3 && num2>num3)
  //  console.log(`El orden de los numeros serian ${num1} ${num2} ${num3}`);
    //if (num2>num1 && num2>num3 && num1>num3)
    //console.log(`El orden de los numeros serian ${num2} ${num1} ${num3}`);
    //if (num3>num1 && num3>num2 && num1>num2)
    //console.log(`El orden de los numeros serian ${num3} ${num1} ${num2}`);
   // if (num3>num1 && num3>num2 && num2>num1)
    //console.log(`El orden de los numeros serian ${num3} ${num2} ${num1}`);
 const numbers = document.getElementById("numeros");
const result = document.getElementById("resultados");

let a=prompt("Ingrese primer numero");
let b=prompt("ingrese segundo numero");
let c=prompt("ingrse tercer numero");
numbers.textContent = `Los numeros introducidos son: ${a} ${b} ${c}`
if (a>=b && a>=c){
  if(b>c){
  result.textContent=`El orden es: ${a}, ${b}, ${c}`
}else{
  result.textContent=`El orden es: ${a}, ${c}, ${b}`
}
}else if(b>=a && b>=c){
   if(a>c){
    result.textContent=`El orden es: ${b}, ${a}, ${c}`

   }else{
    result.textContent=`El orden es: ${b}, ${c}, ${a}`

   }
}else if(c>=a && c>=b){
  
  if(a>b){
    result.textContent=`El orden es: ${c}, ${a}, ${b}`

  }else{
  result.textContent=`El orden es: ${c}, ${b}, ${a}`
  
}
}