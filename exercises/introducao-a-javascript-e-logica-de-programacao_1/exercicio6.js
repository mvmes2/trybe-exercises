/* Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop -> diagonals*/
let nomePecaXadrez = 'PEAO'



nomePecaXadrez = nomePecaXadrez.toLowerCase();
console.log(nomePecaXadrez);
switch (nomePecaXadrez){
    case "peao":
        console.log('Movimentação: Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. O peão é a única peça que não pode retroceder, e também a única que efetua a captura com um movimento diferente do utilizado para avançar no tabuleiro. O peão pode capturar as peças que estejam uma fileira acima, mas nas colunas adjacentes a sua.');  
        break;
    case "cavalo":
        console.log('Movimentação:  É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante. Quando a casa de saída do Cavalo for escura, a casa de chegada será clara, e vice-versa.');
        break; 
        
    case "bispo":
        console.log('Movimentação: Move-se na diagonal, quantas casas quiser. O Bispo que iniciar a partida em uma casa branca somente poderá transitar pelas brancas, enquanto o Bispo que inicia em uma casa preta somente poderá transitar pelas casas pretas.');
        break; 
    case "torre":
        console.log('Movimentação: Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.');
            break;       
    case "dama":
        console.log('Movimentação: Assim como o Rei, pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.');
            break; 
    case "rei":
        console.log('Movimentação: Pode mover-se em qualquer direção, porém apenas uma casa por vez.');
           break; 
    default:
        console.log('erro 2020.... digite o nome da peça de xadrez corretamente');                
            
            
}
