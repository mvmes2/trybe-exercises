/*Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */

let escrevaUmaNota = 100;


if(escrevaUmaNota >= 90){
    console.log('Sua Nota é: A');
}else if(escrevaUmaNota >= 80){
    console.log('Sua Nota é: B');
}else if(escrevaUmaNota >= 70){
    console.log('Sua Nota é: C');
}else if(escrevaUmaNota >= 60){
    console.log('Sua Nota é: D');
}else if(escrevaUmaNota >= 50){
    console.log('Sua Nota é: E');
}else if(escrevaUmaNota < 50){
    console.log('Sua Nota é: F');
}

