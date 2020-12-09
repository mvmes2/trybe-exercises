/*
Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
Valor de teste: "trybe" e "be"
Valor esperado no retorno da função: true
verificaFimPalavra("trybe", "be") ;
Retorno esperado: true
verificaFimPalavra("joaofernando", "fernan") ;
Retorno esperado: false
*/
function checkLastWord(word, ending){    
    word = word.split('');
    ending = ending.split('');
    let check2 = true;
    for(let pos = 0; pos < ending.length; pos+=1){
        console.log(word[word.length-ending.length+pos], ending[pos])
        if(word[word.length-ending.length+pos] != ending[pos]){
            check2 = false;           
        }
    }       
      return check2;    
}
console.log(checkLastWord("trybe", "be"));

