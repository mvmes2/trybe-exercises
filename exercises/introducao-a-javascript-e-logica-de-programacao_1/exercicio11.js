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
Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?*/

//notas do Aluno: Aqui pesquisei no goole um jeito para formatar as virgulas e valores referente a moeda do pais e encontrei uma função que mostrarei abaixo:
//Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL', maximumSignificantDigits: 2 }).format(nomeDaVariavelQueContemOValorASerFormatado);
//aqui esta função está formatando o valor de saida para moeda real "BRL" e limitando a casa decimal em 2. "Intl.NumberFormat -> Construtor para objetos que permitem formatação de número sensível a linguagem."
// ou também podemos usar o "toLocaleString" - > nomeDaVariavelQueContemOValorASerFormatado.toLocaleString('pt-BR', { maximumSignificantDigits: 2 });
// vai formatar apenas 2 casas apos a virgula para o padrão brasileiro, e ".toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})" -> vai formatar a virgula e inserir a moeda real BRL ao valor. 
// lembrando que estas funções nos retornam o numero em formato de string, então teste e cuidado a usar são imprecindíveis principalmente quando se trata de valores que representam dinheiro. para este exercício basta utilizarmos o ".toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });" que ele já irá limitar em 2 após a vírgula pois este é o padrão brasileiro.


//exercício:
//1- Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
//2- INSS
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// 3- 
// IR
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.



let salarioBruto = 3500; // insira o valor do seu salario bruto no formaro "9999.99" e rode o programa para calcular seus impostos. <<<<<<<<<<<<<<<<<<<<<<<<<<<<




//programa:
if(salarioBruto < 1556.95){ //Pagando apenas o valor do INSS
    let aliquotaINSSCalc = (8/100);
    let aliquotaINSS = salarioBruto*aliquotaINSSCalc;
    let valorFinal = (salarioBruto-aliquotaINSS);
    let valor = valorFinal;
    //Formatação dos valores.
    valor = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    salarioBruto = salarioBruto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    aliquotaINSS = aliquotaINSS.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    //Mostrando o resultado:
    console.log('Você ganha um salário bruto de:', salarioBruto, ', paga uma alíquota de 8% apra o Inss = '+aliquotaINSS+'/mês');    
    console.log('Seu salário Líquido no fim do mês descontando o inss é:',valor,'Você não Paga IR. "sortudo!"');
}else if(salarioBruto > 1556.94 & salarioBruto < 1903.98){ // pagando inss e IR
    let aliquotaINSSCalc = (9/100); // % da aliquota inss
    let aliquotaINSS = (salarioBruto*aliquotaINSSCalc);// valor aliquota inss   
    let inssValor = (aliquotaINSSCalc*100); //Demonstra valor da aliquota IR em numero real.  
    let salarioMenosInss = (salarioBruto-aliquotaINSS); 
    //foratando resultados:
    salarioBruto = salarioBruto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    aliquotaINSS = aliquotaINSS.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });  
    salarioMenosInss = salarioMenosInss.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    //mostrando resultados:
    console.log('Seu Salário mensal é de:', salarioBruto, ',Você paga uma alíquota de:',inssValor,'% para o Inss');
    console.log('É retirado do seu salário:',aliquotaINSS+'/mês para o INSS');
    console.log('Seu Salário Líquido mensal deduzindo inss fica em:',salarioMenosInss,'Você não paga IR.');
}
    else if(salarioBruto > 1903.98 & salarioBruto < 2594.93){
        let aliquotaINSSCalc = (9/100); // % da aliquota inss
        let aliquotaINSS = (salarioBruto*aliquotaINSSCalc);// valor aliquota inss   
        let inssValor = (aliquotaINSSCalc*100); //Demonstra valor da aliquota IR em numero real.  
        let salarioMenosInss = (salarioBruto-aliquotaINSS); 
        let aliquotaIRCalc = (7.5/100); // % da aliquota IR
        let aliquotaIR = (salarioBruto*aliquotaIRCalc);// valor aliquota IR   
        let irValor = (aliquotaIRCalc*100); //Demonstra valor da aliquota IR em numero real. 
        let salarioMenosIr = (salarioBruto-aliquotaIR);
        let salarioFinalLiquido = (salarioBruto-aliquotaINSS-aliquotaIR);
        let impostoFinal = (aliquotaINSS+aliquotaIR);
        //formatando:
        salarioBruto = salarioBruto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        aliquotaINSS = aliquotaINSS.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });  
        salarioMenosInss = salarioMenosInss.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        salarioMenosIr = salarioMenosIr.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
        aliquotaIR = aliquotaIR.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        salarioFinalLiquido = salarioFinalLiquido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
        impostoFinal = impostoFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });       
        //mostrando:
        console.log('Seu Salário Bruto é de:', salarioBruto, ',Você paga uma alíquota de:',irValor+'% para o IR = '+aliquotaIR+'/mês');
        console.log('Seu Salário Líquido mensal deduzindo IR fica em:',salarioMenosIr);    
        console.log('Você paga uma alíquota de:',inssValor+'% para o Inss = '+aliquotaINSS+'/mês');
        console.log('Seu Salário Líquido mensal deduzindo inss fica em:',salarioMenosInss)
        console.log('De '+salarioBruto,'você recebe apenas:',salarioFinalLiquido,'após pagar',impostoFinal,'de impostos, "INNS + IR".');         
    }
    else if(salarioBruto > 2594.92 & salarioBruto < 3751.05){
        let aliquotaINSSCalc = (11/100); // % da aliquota inss
        let aliquotaINSS = (salarioBruto*aliquotaINSSCalc);// valor aliquota inss   
        let inssValor = (aliquotaINSSCalc*100); //Demonstra valor da aliquota IR em numero real.  
        let salarioMenosInss = (salarioBruto-aliquotaINSS); 
        let aliquotaIRCalc = (15/100); // % da aliquota IR
        let aliquotaIR = (salarioBruto*aliquotaIRCalc);// valor aliquota IR  
        let irValor = (aliquotaIRCalc*100); //Demonstra valor da aliquota IR em numero real. 
        let salarioMenosIr = (salarioBruto-aliquotaIR);
        let salarioFinalLiquido = (salarioBruto-aliquotaINSS-aliquotaIR);
        let impostoFinal = (aliquotaINSS+aliquotaIR);
        //formatando:
        salarioBruto = salarioBruto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        aliquotaINSS = aliquotaINSS.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });  
        salarioMenosInss = salarioMenosInss.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        salarioMenosIr = salarioMenosIr.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
        aliquotaIR = aliquotaIR.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        salarioFinalLiquido = salarioFinalLiquido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
        impostoFinal = impostoFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });           
        //mostrando:
        console.log('Seu Salário Bruto é de:', salarioBruto, ',Você paga uma alíquota de:',irValor+'% para o IR = '+aliquotaIR+'/mês');
        console.log('Seu Salário Líquido mensal deduzindo IR fica em:',salarioMenosIr);    
        console.log('Você paga uma alíquota de:',inssValor+'% para o Inss = '+aliquotaINSS+'/mês');
        console.log('Seu Salário Líquido mensal deduzindo inss fica em:',salarioMenosInss)
        console.log('De '+salarioBruto,'você recebe apenas:',salarioFinalLiquido,'após pagar',impostoFinal,'de impostos, "INNS + IR".');         
    }
    else if(salarioBruto > 3751.05 & salarioBruto < 4664.68){
        let aliquotaINSSCalc = (11/100); // % da aliquota inss
        let aliquotaINSS = (salarioBruto*aliquotaINSSCalc);// valor aliquota inss   
        let inssValor = (aliquotaINSSCalc*100); //Demonstra valor da aliquota IR em numero real.  
        let salarioMenosInss = (salarioBruto-aliquotaINSS); 
        let aliquotaIRCalc = (22.5/100); // % da aliquota IR
        let aliquotaIR = (salarioBruto*aliquotaIRCalc);// valor aliquota IR  
        let irValor = (aliquotaIRCalc*100); //Demonstra valor da aliquota IR em numero real. 
        let salarioMenosIr = (salarioBruto-aliquotaIR);
        let salarioFinalLiquido = (salarioBruto-aliquotaINSS-aliquotaIR);
        let impostoFinal = (aliquotaINSS+aliquotaIR);
        //formatando:
        salarioBruto = salarioBruto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        aliquotaINSS = aliquotaINSS.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });  
        salarioMenosInss = salarioMenosInss.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        salarioMenosIr = salarioMenosIr.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
        aliquotaIR = aliquotaIR.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        salarioFinalLiquido = salarioFinalLiquido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
        impostoFinal = impostoFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });   
        irValor = irValor.toLocaleString('pt-BR');         
        //mostrando:
        console.log('Seu Salário Bruto é de:', salarioBruto, ',Você paga uma alíquota de:',irValor+'% para o IR = '+aliquotaIR+'/mês');
        console.log('Seu Salário Líquido mensal deduzindo IR fica em:',salarioMenosIr);    
        console.log('Você paga uma alíquota de:',inssValor+'% para o Inss = '+aliquotaINSS+'/mês');
        console.log('Seu Salário Líquido mensal deduzindo inss fica em:',salarioMenosInss)
        console.log('De '+salarioBruto,'você recebe apenas:',salarioFinalLiquido,'após pagar',impostoFinal,'de impostos, "INNS + IR".'); 
    }
    else if(salarioBruto > 4664.68 & salarioBruto < 5189.82){
        let aliquotaINSSCalc = (11/100); // % da aliquota inss
        let aliquotaINSS = (salarioBruto*aliquotaINSSCalc);// valor aliquota inss   
        let inssValor = (aliquotaINSSCalc*100); //Demonstra valor da aliquota IR em numero real.  
        let salarioMenosInss = (salarioBruto-aliquotaINSS); 
        let aliquotaIRCalc = (27.5/100); // % da aliquota IR
        let aliquotaIR = (salarioBruto*aliquotaIRCalc);// valor aliquota IR  
        let irValor = (aliquotaIRCalc*100); //Demonstra valor da aliquota IR em numero real. 
        let salarioMenosIr = (salarioBruto-aliquotaIR);
        let salarioFinalLiquido = (salarioBruto-aliquotaINSS-aliquotaIR);
        let impostoFinal = (aliquotaINSS+aliquotaIR);
        //formatando:
        irValor = irValor.toLocaleString('pt-BR'); 
        salarioBruto = salarioBruto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        aliquotaINSS = aliquotaINSS.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });  
        salarioMenosInss = salarioMenosInss.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        salarioMenosIr = salarioMenosIr.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
        aliquotaIR = aliquotaIR.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        salarioFinalLiquido = salarioFinalLiquido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
        impostoFinal = impostoFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });   
        irValor = irValor.toLocaleString('pt-BR');        
        //mostrando:
        console.log('Seu Salário Bruto é de:', salarioBruto, ',Você paga uma alíquota de:',irValor+'% para o IR = '+aliquotaIR+'/mês');
        console.log('Seu Salário Líquido mensal deduzindo IR fica em:',salarioMenosIr);    
        console.log('Você paga uma alíquota de:',inssValor+'% para o Inss = '+aliquotaINSS+'/mês');
        console.log('Seu Salário Líquido mensal deduzindo inss fica em:',salarioMenosInss)
        console.log('De '+salarioBruto,'você recebe apenas:',salarioFinalLiquido,'após pagar',impostoFinal,'de impostos, "INNS + IR".'); 
    }
    else if(salarioBruto > 5189.82){
        let aliquotaINSSCalc = (11/100); // % da aliquota inss
        let aliquotaINSS = (salarioBruto*aliquotaINSSCalc);// valor aliquota inss   
        let inssValor = (aliquotaINSSCalc*100); //Demonstra valor da aliquota IR em numero real.  
        let salarioMenosInss = (salarioBruto-570.88); 
        let aliquotaIRCalc = (27.5/100); // % da aliquota IR
        let aliquotaIR = (salarioBruto*aliquotaIRCalc);// valor aliquota IR  
        let irValor = (aliquotaIRCalc*100); //Demonstra valor da aliquota IR em numero real. 
        let salarioMenosIr = (salarioBruto-aliquotaIR);
        let salarioFinalLiquido = (salarioBruto-aliquotaINSS-aliquotaIR);
        let impostoFinal = (570.88+aliquotaIR);
        //formatando:
        irValor = irValor.toLocaleString('pt-BR'); 
        salarioBruto = salarioBruto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        aliquotaINSS = aliquotaINSS.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });  
        salarioMenosInss = salarioMenosInss.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        salarioMenosIr = salarioMenosIr.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
        aliquotaIR = aliquotaIR.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        salarioFinalLiquido = salarioFinalLiquido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
        impostoFinal = impostoFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });   
        irValor = irValor.toLocaleString('pt-BR');        
        //mostrando:
        console.log('Seu Salário Bruto é de:', salarioBruto, ',Você paga uma alíquota de:',irValor+'% para o IR = '+aliquotaIR+'/mês');
        console.log('Seu Salário Líquido mensal deduzindo IR fica em:',salarioMenosIr);    
        console.log('Você paga a alíquota Máxima para o Inss de R$ 570,88/mês');
        console.log('Seu Salário Líquido mensal deduzindo inss fica em:',salarioMenosInss)
        console.log('De '+salarioBruto,'você recebe apenas:',salarioFinalLiquido,'após pagar',impostoFinal,'de impostos, "INNS + IR".'); 
    }
