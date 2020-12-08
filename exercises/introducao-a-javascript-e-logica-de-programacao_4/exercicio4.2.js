/*
4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
Valor esperado no retorno da função: Fernanda .
*/
function checkNameChar(nameArray){
        let name = nameArray[0];       
    for(let pos in nameArray){ 
        if(nameArray[pos].length < name.length){
            name = nameArray[pos];           
        }
    }
    console.log(name)    
};
checkNameChar(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);