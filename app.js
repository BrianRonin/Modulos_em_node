// ao importar utiliza require("caminho").chaveObj
const mod1 = require("./mod1");
const falarMeuNome = mod1.falaNome;

// com desustruturação, obs: tem que ser o mesmo nome do arquivo original
const { nome, sobrenome, falaNome } = require("./mod1");

//ao importar algo default não precisa o {}
const cachorrinho = require("./class");
const cachorro1 = new cachorrinho("Luiz");
cachorro1.latir();

// todos modulos em nodeModules ou do proprio node
// não precisa especificar o caminho tipo assim ("./app.js")
const path = require("path");
//path resolve o caminho .. volta
console.log(path.resolve(__dirname, "..", "Js basico", "1", "index.js"));
// raiz => arquivo
console.log(__filename);
// raiz => pasta
console.log(__dirname);
