/* Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto)*/

let custoCompra = 300;// insira o valor de compra do seu produto
let custoVenda = 399;// insira o valor que você irá vender seu produto
let multiplicador = 1000; // coloque aqui a quantidade de vendas que quer calcular.
let imposto1 = 1; // insira o valor do imposto sem o "%" ex: imposto de 20% coloque apenas o 20.

// após definido os valores, rode o programa.

//======================================================================================================================================================
if(custoCompra <=0 | custoVenda <= 0 | multiplicador <= 0 | imposto1 <= 0){
    console.log('Erro...Você deve inserir um valor maior que 0 em todos os itens.')
}else{
    imposto = (custoCompra*imposto1/100);
    custoTotal = custoCompra + imposto;
    let lucro = custoVenda - custoTotal;
    let lucroTotal = lucro*multiplicador;
    console.log('Preço de compra: '+custoCompra);
    console.log('Preço de venda: '+custoVenda);
    console.log('Preço de imposto por unidade: ' + imposto + ' - '+ imposto1 +'%');
    console.log('Preço de compra da unidade + impostos: '+ custoTotal);
    console.log('Seu Lucro por unidade: ' + (custoVenda - custoTotal));
    console.log('Ao vender '+multiplicador+' peças deste produto, descontando impostos você terá um lucro líquido de: '+lucroTotal);
    console.log('Você pagou de imposto: '+imposto*multiplicador+' ao governo');
}

