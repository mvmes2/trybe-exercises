/*
5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
Valor esperado no retorno da função: 2 .
*/

function repeaterCheck(arrayNumber){
    let numberCount = 0;
    let repeateCount = 0;
    let repeatIndex = 0;

    for (let pos in arrayNumber){
        let verifyNumber = arrayNumber[pos];
    for(let pos2 in arrayNumber){
        if (verifyNumber === arrayNumber[pos2]){
            numberCount+=1
        }
    }
    if(numberCount > repeateCount){
        repeateCount = numberCount;
        repeatIndex = pos;
    }
    numberCount = 0;
    }
    return console.log(arrayNumber[repeatIndex]);
}
repeaterCheck([2, 3, 2, 5, 8, 2, 3]);