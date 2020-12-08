/* 4- Depois, faça uma pirâmide com n asteriscos de base: */

let base = 15;
let linha = '';
let asterisco = '*';
let space = ' '; 

for(let index = 0; index < base; index+=2){
     linha ='';
     let numAsterisco = 1 + index;
     let spaceLados = (base - numAsterisco) / 2;
     for(let cicloLinha = 0; cicloLinha < base; cicloLinha+=1){
         if(cicloLinha < spaceLados){
             linha += space;
         }
         else if(cicloLinha >= spaceLados && cicloLinha < base - spaceLados){
             linha += asterisco;
         }
         else{
             linha+= space;
         }
     }
     console.log(linha);
}


     
/*     
numero de espaço = nº base - nº de asterisco.
numero de espaço lados = nº base - nº de asterisco/2.
numero de asterisco = nº index/ciclo + 1

    n = 5
    --*--
    -***-
    ***** 
    
    */
 