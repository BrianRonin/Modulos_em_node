//tambem posso manipular o export transformando inves
//de um obj noque eu quiser como uma classe por exemplo
//ou um numero uma string um array oque eu quiser eu posso
//transformar exportando assim module.exports =
//OBS: reseta o module exports

module.exports = class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  latir() {
    return console.log(this.nome, "esta latindo");
  }
};
