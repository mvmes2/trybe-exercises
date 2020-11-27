/* Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
INSS
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
R$ 2.670,00: salário com INSS já deduzido;
7.5%: alíquota de imposto de renda;
R$ 142,00 parcela a se deduzir do imposto.
Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
Resultado: R$ 2.612,55.
Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?
//===================================================================================================================================================
notas do Aluno: Aqui pesquisei no goole um jeito para formatar as virgulas e valores referente a moeda do pais e encontrei uma função que mostrarei abaixo:
"toLocaleString" ---> "nomeDaVariavelComValorParaFormatar.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})" -> vai formatar a virgula e inserir a moeda real BRL ao valor. 
 lembrando que esta função nos retorna o numero em formato de string, então testes e cuidado a usar são imprescindíveis principalmente quando se trata de valores que representam dinheiro. e vale ressaltar que pela conversão do número para String, você não conseguira usar o valor da variável após formatada para fazer operações novamente, a não ser que converta novamente para número, ou salve o valor da váriavel em uma variável"backup" antes de formatar, e se precisar usar o valor dela novamente, use o da "backup" não formatada.*/
//=====================================================================================================================================================





let salarioBruto = 6800;// insira o valor do seu salario bruto no formaro "9999.99" e rode o programa para calcular seus impostos. <<




//Programa:
if(salarioBruto < 1556.94){
    let calcInss = (8/100);
    let calcAliquotaInss = (salarioBruto*calcInss);
    let aliquotaInss = (calcInss*100);    
    let salarioBase = (salarioBruto-calcAliquotaInss);     
    //formatando
    aliquotaInss = aliquotaInss.toLocaleString('pt-BR');     
    salarioBase = salarioBase.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    salarioBruto = salarioBruto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    calcAliquotaInss = calcAliquotaInss.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    //mostrando:
    console.log('Seu salário de',salarioBruto+' , cai na alíquota do Inss de',aliquotaInss+'% = ',calcAliquotaInss+'/Mês.');
    console.log('Seu salário líquido após pagar o Inss é de: '+salarioBase);
    console.log('Você deu "Sorte!!" e não Paga IR ainda, então vai cair na sua conta os '+salarioBase,'no fim do mês.');
}
else if(salarioBruto > 1556.94 & salarioBruto < 2594.92){
    let calcInss = (9/100);
    let calcAliquotaInss = (salarioBruto*calcInss);
    let aliquotaInss = (calcInss*100);    
    let salarioBase = (salarioBruto-calcAliquotaInss);
    let salarioBase2 = salarioBase;
    let impostoInss = calcAliquotaInss; 
    //formatando
    aliquotaInss = aliquotaInss.toLocaleString('pt-BR');     
    salarioBase = salarioBase.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    salarioBruto = salarioBruto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    calcAliquotaInss = calcAliquotaInss.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    //mostrando:
    console.log('Seu salário de',salarioBruto+' , cai na alíquota do Inss de',aliquotaInss+'% = ',calcAliquotaInss+'/Mês.');
    console.log('Seu salário líquido após pagar o Inss é de: '+salarioBase);
    if(salarioBase2 > 1903.98 & salarioBase2 < 2826.65)
    {
        let calcIr = (7.5/100);
        let aliquotaIr = (calcIr*100);
        let calcAliquotaIr = ((salarioBase2*calcIr)-142.80);        
        let salarioLiquido = (salarioBase2-calcAliquotaIr);
        let impostoTotal =  (calcAliquotaIr+impostoInss);        
        //formatando
        aliquotaIr = aliquotaIr.toLocaleString('pt-BR');       
        salarioLiquido = salarioLiquido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        calcAliquotaIr = calcAliquotaIr.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        impostoTotal = impostoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        //mostrando
        console.log('Seu salario Base após pagar o Inss, pega uma alíquota de Ir de',aliquotaIr+'%, com valor de',calcAliquotaIr+'/Mês. com uma dedução de R$142,80 já calculada');
        console.log('Você vai receber Líquido no fim do mês:',salarioLiquido,', Pagou um total de', impostoTotal,'em impostos.');            
    }
}
else if(salarioBruto > 2594.93 & salarioBruto < 5189.82){
    let calcInss = (11/100);
    let calcAliquotaInss = (salarioBruto*calcInss);
    let aliquotaInss = (calcInss*100);    
    let salarioBase = (salarioBruto-calcAliquotaInss);
    let salarioBase2 = salarioBase;
    let impostoInss = calcAliquotaInss; 
    //formatando
    aliquotaInss = aliquotaInss.toLocaleString('pt-BR');     
    salarioBase = salarioBase.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    salarioBruto = salarioBruto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    calcAliquotaInss = calcAliquotaInss.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    //mostrando:
    console.log('Seu salário de',salarioBruto+' , cai na alíquota do Inss de',aliquotaInss+'% = ',calcAliquotaInss+'/Mês.');
    console.log('Seu salário líquido após pagar o Inss é de: '+salarioBase);
    if(salarioBase2 > 1903.98 & salarioBase2 < 2826.65)
    {
        let calcIr = (7.5/100);
        let aliquotaIr = (calcIr*100);
        let calcAliquotaIr = ((salarioBase2*calcIr)-142.80);        
        let salarioLiquido = (salarioBase2-calcAliquotaIr);
        let impostoTotal =  (calcAliquotaIr+impostoInss);        
        //formatando
        aliquotaIr = aliquotaIr.toLocaleString('pt-BR');       
        salarioLiquido = salarioLiquido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        calcAliquotaIr = calcAliquotaIr.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        impostoTotal = impostoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        //mostrando
        console.log('Seu salario Base após pagar o Inss, pega uma alíquota de Ir de',aliquotaIr+'%, com valor de',calcAliquotaIr+'/Mês. com uma dedução de R$142,80 já calculada');
        console.log('Você vai receber Líquido no fim do mês:',salarioLiquido,', Pagou um total de', impostoTotal,'em impostos.');                  
    }
    if(salarioBase2 > 2826.65 & salarioBase2 < 3751.05)
    {
        let calcIr = (15/100);
        let aliquotaIr = (calcIr*100);
        let calcAliquotaIr = ((salarioBase2*calcIr)-354.80);        
        let salarioLiquido = (salarioBase2-calcAliquotaIr);
        let impostoTotal =  (calcAliquotaIr+impostoInss);        
        //formatando
        aliquotaIr = aliquotaIr.toLocaleString('pt-BR');       
        salarioLiquido = salarioLiquido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        calcAliquotaIr = calcAliquotaIr.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        impostoTotal = impostoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        //mostrando
        console.log('Seu salario Base após pagar o Inss, pega uma alíquota de Ir de',aliquotaIr+'%, com valor de',calcAliquotaIr+'/Mês. com uma dedução de R$354,80 já calculada');
        console.log('Você vai receber Líquido no fim do mês:',salarioLiquido,', Pagou um total de', impostoTotal,'em impostos.');            
    }
    if(salarioBase2 > 3751.05 & salarioBase2 < 4664.68)
    {
        let calcIr = (22.5/100);
        let aliquotaIr = (calcIr*100);
        let calcAliquotaIr = ((salarioBase2*calcIr)-316.13);        
        let salarioLiquido = (salarioBase2-calcAliquotaIr);
        let impostoTotal =  (calcAliquotaIr+impostoInss);        
        //formatando
        aliquotaIr = aliquotaIr.toLocaleString('pt-BR');       
        salarioLiquido = salarioLiquido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        calcAliquotaIr = calcAliquotaIr.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        impostoTotal = impostoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        //mostrando
        console.log('Seu salario Base após pagar o Inss, pega uma alíquota de Ir de',aliquotaIr+'%, com valor de',calcAliquotaIr+'/Mês. com uma dedução de R$613,13 já calculada');
        console.log('Você vai receber Líquido no fim do mês:',salarioLiquido,', Pagou um total de', impostoTotal,'em impostos.');           
    }
}
else if(salarioBruto > 5189.82){        
    let salarioBase = (salarioBruto-570.88);
    let salarioBase2 = salarioBase;
    let impostoInss = 570.88; 
    //formatando         
    salarioBase = salarioBase.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    salarioBruto = salarioBruto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });    
    //mostrando:
    console.log('Seu salário de',salarioBruto+' , cai na alíquota Máxima do Inss que tem o valor de R$ 570,80/Mês Fixo.');
    console.log('Seu salário líquido após pagar o Inss é de: '+salarioBase);
    if(salarioBase2 > 4664.68)
    {
        let calcIr = (27.5/100);
        let aliquotaIr = (calcIr*100);
        let calcAliquotaIr = ((salarioBase2*calcIr)-869.36);        
        let salarioLiquido = (salarioBase2-calcAliquotaIr);
        let impostoTotal =  (calcAliquotaIr+impostoInss);        
        //formatando
        aliquotaIr = aliquotaIr.toLocaleString('pt-BR');       
        salarioLiquido = salarioLiquido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        calcAliquotaIr = calcAliquotaIr.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        impostoTotal = impostoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        //mostrando
        console.log('Seu salario Base após pagar o Inss, pega uma alíquota de Ir de',aliquotaIr+'%, com valor de',calcAliquotaIr+'/Mês. com uma dedução de R$869,36 já calculada');
        console.log('Você vai receber Líquido no fim do mês:',salarioLiquido,', Pagou um total de', impostoTotal,'em impostos.');      
    }
}
