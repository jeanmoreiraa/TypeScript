/** TIPOS BÁSICOS, SIMPLES, PRIMITIVOS DE DADOS **/

//string - valores de texto
let nome: string = "jean";

//number - números inteiros e valores de pontos flutuante
let idade: number = 25;

//boolean - valores verdadeiros (true) ou falsos (false)
let ativo: boolean = true;

//undefined (indefinido)
let bizarro: undefined = undefined;

//null (nulo)
let nada: null = null;

/* Há também 2 tipos primitivos menos comuns, encontrados em versões mais recentes do Javascript e TypeScript - bigint e symbol */

/* Ao criar uma variável há duas maneiras principais de o TypeScript atribuir um top:*/

/* obs sempre usar > TIPO EXPLÍCITO - quando você atribui o tipo de dados na declaração.*/
let sobrenome: string = "Moreira";
//sobrenome = 30; //TypeScript aponta erro

/*TIPO IMPLÍCITO - QUANDO O TypesScript irá "adivinhar" (inferir) o tipo, com base no valor atribuído.*/
let profissao = "Professor";
//profissao = 100; //TypeScript aponta erro

/*TIPOS AVANÇADOS OU ESPECIAIS*/

//union type - quando um valor pode ser mais do que um único tipo
let myVariable: string | number;
myVariable = "Hello";
myVariable = 42;
//myVariable = true; //erro

/* any (qualquer) - é um tipo que desabilita a verificação de tipo e permite
efetivamente que todos os tipos sejam usados.*/
let teste: any = 100;
teste = "texto";

/* 
ALERTA: any pode ser uma maneira útil de enviar erros, uma vez que desabilita a verificação de tipos, mas o
TypeScript não será capaz de fornecer segurança de tipo e ferramentas que dependem em dados de tipo, como preenchimento outomatico, não funcionarão.
Lembre-se, deve ser enviado a "qualquer" custo...
*/

/*unknown (desconhecido) -  é uma alternativa semelhante ao any, só mais segura 
esse tipo exige verificação ou conversões explícitas para
garantir a segurança de tipo durante as operações.*/
let valor: unknown = 100;
valor = "Texto agora";
//exenplo-- unknown----------------------------------
let convert = valor as string;
console.log(convert.length); // valor 10

/*never (nunca) - lança um erro sempre que ele é definido.
never é raramente usando, seu uso primário é em genéricos avançados.*/
//let b: never = true;

//array - TypeScript tem uma sintaxe especifica para matrizes.
const names: string[] = [];
names.push("Moreira"); //sem erro
//names.push(3); //erro

/*A palavra-chave 'readonly' (somente leitura) impede que matrizes sejam alteradas.*/
const nomes: readonly string[] = ["Moreira", "Jean"];
//nomes.push("Jack"); // erro

/* Inferência de tipo
TypeScript pode inferir o tipo de uma matriz se ela tiver valores.*/
const numbers = [1, 2, 3]; // infere tipo number[]
numbers.push(4); // sem erro
//numbers.push("2"); // error
let y: number = numbers[0]; // sem erro, pegou valor 1

/*tuplas - uma tupla é uma array (matriz) tipada com um comprimento e tipos predefinidos para cada índice. as tuplas são ótimas porque permitem
que cada elemento na matriz seja um tipo conhecido de valor.*/
let nossaTupla: [number, boolean, string];
nossaTupla = [5, false, "Deixa p Like!"];

nossaTupla.push("Outra coisa"); //exemplo
//[5, false, 'Deixa o like!', 'Outra coisa']

//EXEMPLOS COM ERRO
//nossaTupla = [false, 'Se inscreve também!', 5];

/*Uma boa prática é fazer sua tupla sempre readonly. por que?
por que as tuplas só têm tipos fortementes definidos para os valores iniciais.
*/

//Tupla com os tipos de dados definidos
let ourTuple: [Number, boolean, string];
//inicializou correto
ourTuple = [5, false, "Professor bonitão!"];
// Agora se eu inserir mais coisas na tupla não tenho controle
ourTuple.push("Outra coisa");

//AGORA READONLY
const tuplaReadonly: readonly [number, boolean, string] = [5, true, "Teste"];
//ERRO LANÇADO
//tuplaReadonly.push('Ainda não deixeou o like?');

/* objects (objetos) - Objetos são variáveis com muito valores dentro */
const carro: { marca: string; modelo: string; ano: number } = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2009,
};

/*O typeScript pode inferir os tipos de propriedade com base em seus valores*/
const car = {
  marca: "toyota",
};
car.marca = "Ford"; //nenhum erro - ele entendeu que 'marca' é string.
//car.marca = 2; // Se eu atribuir outro tipo levo Erro.

/* No TypeScript um objeto pode ter propriedades opcionais.
propriedades opcionais são propriedades que não precisam ser definidas na
definição do objeto. elas podem ser usadas depois ou não são opcionais.*/
const carro2: { modelo: string; motor?: number } = {
  modelo: "Uno",
};
carro2.motor = 1.0;

/*Assinaturas de índice - as assinaturas de índice podem ser usadas para objetos sem uma lista definida de propriedades.*/

const nomeIdade: { [index: string]: number } = {};
nomeIdade["Moreira"] = 31;
//nomeIdade["Jean"] = "trinta"; //erro

/* Aliases E Interfaces
Basicamente é criar os seus próprios tipos personalizados

Os aliases de tipo permitem definir tipos com um nome personalizado (um alias) de tipos primitivos ou complesxo.

As interfaces são a mesm coisa que os aliases, exceto que só se aplicam ao tipo objeto.

*/

//ALIASES (Criando nosso tipo personalizados)
type AnoVeiculo = number;
type MarcaVeiculo = string;
type ModeloVeiculo = string;
type carro = {
  ano: AnoVeiculo;
  marca: MarcaVeiculo;
  modelo: ModeloVeiculo;
};

//EXEMPLO DE USO
const uno: AnoVeiculo = 2001;
const gol: MarcaVeiculo = "Wolksvagen";
const TSI: ModeloVeiculo = "Up";
const laFerrari: carro = {
  ano: 2002,
  marca: "ferrari",
  modelo: "La Ferrari",
};

//INTERFACES
interface Retangulo {
  altura: number;
  largura: number;
}

//EXEMPLO DE USO
const novoItem: Retangulo = {
  altura: 20,
  largura: 10,
};

//ESTENDENDO INTERFACES - Herdar propriedades do original e adicionar algo.
interface RetanguloColorido extends Retangulo {
  cor: string;
}

//USO
const outroItem: RetanguloColorido = {
  altura: 20,
  largura: 10,
  cor: "azul",
};

/* FUNÇÕES
TypeScript tem uma sintaxe específica para digitar parâmetros de função
e valores de retorno.
*/

//DEFININDO TIPOS DO RETORNO DA FUNÇÃO
function getTime(): number {
  return new Date().getTime();
}

//Void - QUANDO A FUNÇÃO NÃO TEM RETORNO
function printHello(): void {
  console.log("Hello!");
}

//Tipos em parâmetros de função
function multiplicacao(a: number, b: number): number {
  return a * b;
}

//multiplicacao(5, 5); //saida 25
//multiplicacao("teste", 5); //parametro não aceito porque deveria ser um numero

//Parametros opcionais
//o operador '?' aqui marca que o parametro 'c' é opcional
function add(a: number, b: number, c?: number): number {
  return a + b + (c || 0);
}

add(5, 3); //saida 8
add(5, 3, 2); //saida 10;

//Parametros com valores iniciais padrão
function saudacao(name: string = "Jean"): void {
  console.log(`olá, ${name}!`);
}

saudacao(); //saida: Olá, Jean!
saudacao("Mariane"); //saida: Olá Mariane!

//Parametros nomeados (Named Parameters)
function hello({ nome, idade }: { nome: string; idade: number }): void {
  console.log(`Hello ${nome}! Você tem ${idade} anos.`);
}

hello({ nome: "Jean", idade: 31 });
// Saída: Hello, Jean! você tem 31 anos.

/*GENERICS (Genéricos)
Pense nos generics como "caixas" flexíveis, onde você pode colocar
diferentes tipos de dados. É um coringa, que pode aceitar um valor.
*/

function imprimirValor<T>(valor: T): void {
  console.log(valor);
}

imprimirValor<number>(42); //Imprime 42
imprimirValor<string>("Olá"); //Imprime 'Olá'
imprimirValor<boolean>(true); // Imprime true
