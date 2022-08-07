const nome = "brian";
const sobrenome = "matias";

const falaNome = () => {
  console.log(nome, sobrenome);
};
console.log(module);
//no node cada arquivo javascript é um obj como modulo                                                              console.log(module)
//e nesse modulo tem um outro obj que se chama "exports"
//voce consegue manipular esse modulo da forma que quiser a seguir

// as tres formas são a mesma coisa obviamente a segunda opção é  	     //
// mais rapida comparada com a primeira, a terceira importa separadamente//
/** FORMA 1 */
// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;
/** FORMA 2 */
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
/** FORMA 3 */
// OBS: Dessa forma o uso do "module" é obrigatorio
// OBS: Ele reescreve totalmente o seu module
// module.exports = {
//   nome,
//   sobrenome,
//   falaNome,
// }

//uma coisa interessante é que o 'this' global
//vai apontar para o exports então..
this.qualquerCoisa = "Oque eu quiser exportar";

console.log(module.exports);
