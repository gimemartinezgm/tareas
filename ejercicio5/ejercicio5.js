let num = parseInt(prompt(`Ingrese un numero mayor a 0`))
let result = 1
for(let i=num;i>0;i--){
    result *=i

}
console.log(`El factorial de ${num} es ${result}`)