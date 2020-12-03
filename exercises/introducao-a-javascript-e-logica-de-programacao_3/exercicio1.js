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



// for(let linha =0; linha <n; linha+=1){     // dica da turma... são uns Gênios..eu  nao conhecia o repeat.
//      console.log('*'.repeat(n));
// }

// forma correta proposta pelo exercício com os conhecimentos que tinhamos em aula.

for(linha = 0; linha <n; linha+=1){
     //a cada passagem vai imprimir a linha
     for(coluna = 0; coluna< n; coluna+=1){
          //a cada passagem vai escrever as colunas na linha e salvar dentro da variavel symbol.
          simbol+= '*';
     }
     console.log(simbol);
     simbol= ''; // irá resetar a variável a cada passagem para ser escrito navamente pelo for da coluna.
}