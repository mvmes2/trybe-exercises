/*
6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
Valor de teste: N = 5 .
Valor esperado no retorno da função: 1+2+3+4+5 = 15 .
*/
function sumBay(number){
    let count = 0;
    for(let i =0; i<=number; i+=1){
        count += i;
      console.log(i,'+', count-i);
    }
    console.log(count);
}
sumBay(5);