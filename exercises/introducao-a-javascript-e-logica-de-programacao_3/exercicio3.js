/* 3- Agora inverta o lado do triângulo.
Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.*/

let n = 5;
let asterix = '';
let space = '';
for(let linha =0; linha < n; linha+=1){
    // aqui será responsável por inserir os asteriscos nas linhas
    asterix+='*';
    for(let coluna = linha; coluna <n; coluna+=1){
        // aqui será responsável por inserir os espaços das colunas
        // dissemos que coluna vale linha pois ao analisar o grafico nota-se
        // que a quantidade de espaços é igual o valor total da linha -1 e vai diminuindo os espaços conforme
        //aumenta o numero da linha, como no final a gente faz coluna+=1 entao coluna sempre vai recever linha e adicionar 1 oque vai deixar coluna na frente da linha, com isso imprimiremos a quantidade correspondente de espaços corretamente.
        space +=' ';
    }
    console.log(space,asterix);
    space = '';
}