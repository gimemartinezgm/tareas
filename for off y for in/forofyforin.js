let names=["Paco","Jose","Paula","Maria"]

//for (let i=0;i< names.length;i++){
  //  if(names[i]==="Paula"){
   //     break;  rompe el bucle y continue se salta las posiciones
    //}
//console.log(names[i]);
//}


//for (let index in names ){
  //  console.log(index);
//}

//for (let of names){
  //  console.log(name)
//}
 for (let name of names){

     if(name==="Paula"){
         continue
     }
     console.log(name);
 }

 for(let index in names){
     if(names[index]==="Paula"){
         continue
     }
     console.log(index);
 }
