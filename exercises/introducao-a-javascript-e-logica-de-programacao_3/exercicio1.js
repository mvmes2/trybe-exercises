/*1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .  */
let n = 4;
let simbol = '';


// for(let linha = 0; linha <=n*n; linha+=1){    
//     if(linha%n === 0){
//         console.log(simbol);
//         simbol= '';
//     }  
//     simbol+= '*';  
// }



for(let linha =0; linha <n; linha+=1){     // dica da turma... são uns Gênios..eu  nao conhecia o repeat.
     console.log('*'.repeat(n));
}