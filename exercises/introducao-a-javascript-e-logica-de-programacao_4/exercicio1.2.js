/*
Agora vamos fazer um exercício que vai deixar claro como funções com responsabilidades bem definidas deixam o código mais bem escrito.

1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

Exemplo de palíndromo: arara .
verificaPalindrome("arara") ;
Retorno esperado: true
verificaPalindrome("desenvolvimento") ;
Retorno esperado: false

*/

function checkPalindrome(string){
 // vamos checar a string com um for, e percorer cada "index"/letra para comparar o primeiro com o ultimo e ir comparando até o meio da frase, se passar, é um palindromo, se falhar em qualquer posição, já não tem mais como ser um palindromo.
 for(let index = 0; index < string.length / 2; index ++)// aqui dividivos o tamanho da palavra em 2, para ficar mais facil de compararmos.
 {
     if(string[index] != string[string.length - index -1])
     {
         return false;
     }     
 }
 return true;
}

console.log(checkPalindrome('arara'));