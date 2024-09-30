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


//Agência de viagens Hawaii Paris Nova York Rio de Janeiro Tokyo
const listaDeDestinos = new Array(
  " Hawaii",
  " Paris",
  " Nova York",
  " Rio de Janeiro",
  " Tokyo"
  );

console.log(listaDeDestinos);
console.log(listaDeDestinos[3]);
listaDeDestinos.push(" Coronel Vivida");
console.log(listaDeDestinos);
listaDeDestinos.push(" São Paulo");
listaDeDestinos.push(" China");
listaDeDestinos.push(" Japão");

console.log(listaDeDestinos);

const LoginCerto = "gabryelle";
const SenhaCerta = "123";

var login = entrada("Qual é o seu login?");
var senha = entrada("Digite sua senha:");

while(login != LoginCerto || senha != SenhaCerta){
  console.log("login ou senha incorretos");
login =  entrada("Qual é o seu login?")
  senha = entada(" Digite sua senha:")

}


var idadeComprador = entrada("Qual a sua idade?");
var nomeComprador = entrada("Qual o seu nome?");

if (idadeComprador >=18) {
  console.log("Olá senhor(a) " + nomeComprador );
  console.log("Comprador maior de idade");
  console.log ("destinos disponiveis: " + listaDeDestinos)
  console.log ("escolha seu destino");
} 
else {
  console.log("olá senhor(a)" + nomeComprador);
  console.log("infelizmente, não será finalizado o procedimento, pois idade informada é menor de 18 anos de idade.");
  console.log("não será finalizado devido a idade");
}

 var contador = 0;
while (contador<9){
  console.log(listaDeDestinos[contador]);
  contador++;
}
var destino = entrada("digite o número que corresponde ao destino selecionado (0-8)");
console.log(`destino selecionado foi: ${listaDeDestinos[destino]}`);