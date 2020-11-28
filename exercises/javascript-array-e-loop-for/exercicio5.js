/*Leia atentamente os enunciados e faça o que se pede! Você irá utilizar esse array para realizar os exercícios do 1 ao 7: 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
4 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;
.*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let index;
let index2;
let value = null;
let maior = null;
for(index = 0; index < numbers.length; index +=1){      
      if(numbers[index] > value){
        value = numbers[index];          
          maior = numbers[index];
      }     
}
console.log('O maior número é: '+maior);