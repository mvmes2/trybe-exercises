/*
3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
Valor esperado no retorno da função: 6 .
*/

function checkHigherNumber(array){
    let value = '';
    let number = 0;
  for(let index in array) // vamos usar o for/in para percorrer nosso array
  {
    if(array[index] < number)// aqui checaremos se um numero é maior que o outro. " se o numero denrto de index, for maior que o numero dentro do index anterior, guarde este valor em uma variavel."
    {
        number = array[index];
        value = index;
    }      
  } 
  return value;
};

console.log(checkHigherNumber([-1, -4, 2, 4, 6, 7, 10, 0, -3]));