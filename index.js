const prompt = require('prompt-sync');
const entrada = prompt();

const meuNome = "Gabryelle";
const altura = "1.65";
const peso = "65";
const sexo = "Feminino";
const cidade = "São José";

console.log(meuNome)

console.log(altura)
console.log(peso)
console.log(sexo)
console.log(cidade)

const nomeCompleto = "Gabryelle Dal Lin Molina Azevedo";
const anoNascimento = 2007;
let anoAtual = 2024;
let idade = 17;
const anoFormatura = 2028;

console.log("olá eu sou " +  nomeCompleto + " estamos no ano " + anoAtual + " minha idade é " + idade + " anos " + " e nasci no ano de " + anoNascimento);

idade = idade + 1;
anoAtual = anoAtual + 1;
console.log("Eu vou fazer " + idade + " anos, ano que vem, em " + anoAtual + ". Quero estar cursando Biomedicina, e pretendo me formar em " + anoFormatura);



console.log ("-----------------------------------------");
console.log ("-------------Âgencia de viagens----------");
console.log ("-----------------------------------------");
console.log ("                                         ");

console.log ("-----------------------------------------");
console.log ("--------------Area de login--------------");
console.log ("-----------------------------------------");
console.log ("                                         ");

//Agencia de viagens hawai, paris, nova york, rio de janeiro, tokyo
const listaDeDestinos = new Array(
  "hawai",
  "Paris",
  "Nova York",
  "Rio De Janeiro",
  "Tokyo"
);

const loginCerto = "gabryelle";
const senhaCerta = 1234;

var login = entrada("Qual é o seu username?");
var senha = entrada("Qual é a sua senha?");

while (login != loginCerto || senha != senhaCerta){
  console.log ("Login ou senha incorretos");
  login = entrada("Qual é o seu username?");
  senha = entrada("Qual é a sua senha?");
}
console.log ("");
console.log ("-----------------------------------------");
console.log ("-------------Identificação---------------");
console.log ("-----------------------------------------");
console.log ("                                         ");

var nomeComprador = entrada("Digite seu nome: ");
var idadeComprador = entrada("Qual a sua idade?");


console.log ("");
console.log ("-----------------------------------------");
console.log ("-------------Lista de vôos---------------");
console.log ("--------------Disponiveis----------------");
console.log ("-----------------------------------------");
console.log ("");

if(idadeComprador >=18){
  console.log ("Olá senhor(a) " + nomeComprador);
  console.log("comprador maior de idade");
  console.log("Escolha seu destino: ");
  var contador = 0;


  while(contador <5){

    console.log(listaDeDestinos[contador]);
    contador++

  }
  var destino = entrada("Digite o numero que corresponde ao destino selecionado (0-5): ");
  console.log (`destino selecionado foi: ${listaDeDestinos[destino]}`);
}
