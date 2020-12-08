/*
Usando o objeto abaixo, faça os exercícios a seguir:

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
*/

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

  info['recorrente'] = 'sim';
  for(let keys in info){
      console.log(info[keys]);
  }