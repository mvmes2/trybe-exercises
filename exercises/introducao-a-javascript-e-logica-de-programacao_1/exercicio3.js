/*Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.*/
let a = 15;
let b = 16;
let c = 17;

if(a > b & a > c){
    return console.log(a);
}else if(b > a & b > c){
    return console.log(b);
}else if(c > a & c > b){
    return console.log(c);
}