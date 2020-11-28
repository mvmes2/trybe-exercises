/*Leia atentamente os enunciados e faça o que se pede! Você irá utilizar esse array para realizar os exercícios do 1 ao 7: 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
ºA média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let index;
let value = null;
let media = null;
for(index = 0; index < numbers.length; index +=1){
   value = value +(numbers[index]);   
}
media = value/numbers.length;
console.log('Valor total da soma = '+value+' , média aritimética da soma = '+media);
