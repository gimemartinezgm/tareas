let num = parseInt(prompt(`Introduzca un numero mayor a 1`))
for(let i=2;i<=num;i++){
    if (num % i == 0){
        console.log(`${num} / ${i} = ${num/i}`)
    }
}