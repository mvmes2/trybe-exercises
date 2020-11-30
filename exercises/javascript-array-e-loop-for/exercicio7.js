/*Leia atentamente os enunciados e faça o que se pede! Você irá utilizar esse array para realizar os exercícios do 1 ao 7: 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
5 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;
.*/

let numbers =[5, 9, 3, 1, 19, 70, 8, 100, 2, 35, 27];
let count =0;
let count2 = 0;
let valor;

for (let index = 0; index < numbers.length; index +=1){    
    if(numbers[index] < numbers[count2]){
        count2 = index;
    }   
 }
 console.log(numbers[count2]);
