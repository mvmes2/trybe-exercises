/*Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.*/

/* mais avançado, sistema que gera numero randômico sem a flutuação decimal. não usaremos por enquanto, porém cumpre o enunciado.
let a;
let b;
let c;
a = Math.floor(Math.random()*100 + 1);
b = Math.floor(Math.random()*100 + 1);
c = Math.floor(Math.random()*100 + 1);*/

let a = 50;
let b = 50;
let c = 80;

if(a+b+c == 180){
    return console.log(a+b+c + ' = ' + true);
}else
return console.log(a+b+c + ' = ' + false + ' ...erro... angulos do triangulo inválidos.');