function saudar(nome: string): string {
    return `Olá, ${nome}!`;
}



import readline from 'readline-sync';


function exercicio1() {
  const a = readline.questionInt('Digite o primeiro número: ');
  const b = readline.questionInt('Digite o segundo número: ');
  console.log(`Soma: ${a + b}`);
}

function exercicio2() {
  const n = readline.questionInt('Digite um número: ');
  console.log(n % 2 === 0 ? 'Par' : 'Ímpar');
}

function exercicio3() {
  const n1 = readline.questionFloat('Nota 1: ');
  const n2 = readline.questionFloat('Nota 2: ');
  const n3 = readline.questionFloat('Nota 3: ');
  console.log(`Média: ${(n1 + n2 + n3) / 3}`);
}

function exercicio4() {
  const c = readline.questionFloat('Temperatura em Celsius: ');
  const f = (c * 9) / 5 + 32;
  console.log(`Fahrenheit: ${f}`);
}

function exercicio5() {
  for (let i = 2; i <= 20; i += 2) console.log(i);
}

function exercicio6() {
  const arr: number[] = [];
  for (let i = 0; i < 5; i++) {
    arr.push(readline.questionInt(`Digite o ${i + 1}º número: `));
  }
  console.log('Números:', arr);
}

function exercicio7() {
  const arr = [10, 22, 5, 7, 98];
  console.log('Maior número:', Math.max(...arr));
}

function exercicio8() {
  const str = readline.question('Digite uma string: ').toLowerCase();
  const count = str.split('').filter((c: string) => 'aeiou'.includes(c)).length;
  console.log(`Numero de vogais: ${count}`);
}

function exercicio9() {
  const a = readline.questionFloat('Número 1: ');
  const op = readline.question('Operador (+ - * /): ');
  const b = readline.questionFloat('Número 2: ');
  let r: number | string;
  switch (op) {
    case '+': r = a + b; break;
    case '-': r = a - b; break;
    case '*': r = a * b; break;
    case '/': r = b !== 0 ? a / b : 'Divisão por zero'; break;
    default: r = 'Operador invalido';
  }
  console.log('Resultado:', r);
}

function exercicio10() {
  const arr = [4, 1, 7, 3, 9];
  console.log('Ordenado:', arr.sort((a, b) => a - b));
}

class Pessoa {
  constructor(public nome: string, public idade: number) {}
  exibir() {
    console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
  }
}

function exercicio11() {
  const nome = readline.question('Nome: ');
  const idade = readline.questionInt('Idade: ');
  const p = new Pessoa(nome, idade);
  p.exibir();
}

class Aluno extends Pessoa {
  constructor(nome: string, idade: number, public matricula: string) {
    super(nome, idade);
  }
  exibir() {
    super.exibir();
    console.log(`Matricula: ${this.matricula}`);
  }
}

function exercicio12() {
  const nome = readline.question('Nome: ');
  const idade = readline.questionInt('Idade: ');
  const matricula = readline.question('Matricula: ');
  const a = new Aluno(nome, idade, matricula);
  a.exibir();
}

interface Veiculo {
  acelerar(): void;
  frear(): void;
}

class Carro implements Veiculo {
  acelerar() { console.log('Acelerando...'); }
  frear() { console.log('Freando...'); }
}

function exercicio13() {
  const c = new Carro();
  c.acelerar();
  c.frear();
}

function exercicio14() {
  const n = readline.questionInt('Digite um numero: ');
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

function exercicio15() {
  const peso = readline.questionFloat('Peso (kg): ');
  const altura = readline.questionFloat('Altura (m): ');
  const imc = peso / (altura * altura);
  let classif = '';
  if (imc < 18.5) classif = 'Abaixo do peso';
  else if (imc < 25) classif = 'Peso normal';
  else if (imc < 30) classif = 'Sobrepeso';
  else classif = 'Obesidade';
  console.log(`IMC: ${imc.toFixed(2)} - ${classif}`);
}

function exercicio16() {
  const senha = readline.question('Digite a senha: ', { hideEchoBack: true });
  const valida = senha.length >= 8 && /[A-Z]/.test(senha) && /[a-z]/.test(senha) && /[0-9]/.test(senha);
  console.log(valida ? 'Senha valida' : 'Senha invalida');
}

function exercicio17() {
  const secreto = Math.floor(Math.random() * 100) + 1;
  let tentativa: number;
  do {
    tentativa = readline.questionInt('Adivinhe o número (1-100): ');
    console.log(tentativa < secreto ? 'Maior' : tentativa > secreto ? 'Menor' : 'Acertou!');
  } while (tentativa !== secreto);
}

function exercicio18() {
  const frase = readline.question('Digite uma frase: ');
  const palavras = frase.trim().split(/\s+/);
  console.log(`Número de palavras: ${palavras.length}`);
}

function menu() {
  const funcoes = [
    exercicio1, exercicio2, exercicio3, exercicio4, exercicio5, exercicio6,
    exercicio7, exercicio8, exercicio9, exercicio10, exercicio11, exercicio12,
    exercicio13, exercicio14, exercicio15, exercicio16, exercicio17, exercicio18
  ];

  const nomes = [
    'Soma de dois números',
    'Verificar par ou ímpar',
    'Calcular média de três notas',
    'Converter Celsius para Fahrenheit',
    'Exibir números pares de 1 a 20',
    'Ler 5 números e armazenar em array',
    'Encontrar maior número em um array',
    'Contar vogais em uma string',
    'Calculadora simples',
    'Ordenar array em ordem crescente',
    'Classe Pessoa',
    'Classe Aluno',
    'Classe Carro',
    'Tabuada',
    'Calculadora de IMC',
    'Validar senha',
    'Jogo de adivinhação',
    'Contar palavras em uma frase'
  ];

  let opcao: number;
  do {
    console.log('\n=== MENU DE EXERCÍCIOS ===');
    for (let i = 0; i < funcoes.length; i++) {
      console.log(`${i + 1} - ${nomes[i]}`);
    }
    console.log('0 - Sair');
    opcao = readline.questionInt('Escolha uma opcao: ');
    if (opcao > 0 && opcao <= funcoes.length) {
      console.log(`\n--- Executando: ${nomes[opcao - 1]} ---`);
      funcoes[opcao - 1]();
      readline.question('\nPressione Enter para voltar ao menu...');
    }
  } while (opcao !== 0);
  console.log('Programa encerrado.');
}

menu();