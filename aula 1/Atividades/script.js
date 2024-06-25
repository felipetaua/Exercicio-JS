const linha = "________________________________________";
/*Aula do dia 06/06/2024
Tipos Primitivos:
01) Crie três variáveis do tipo:String, Number, Boolean*/
console.log(linha + " Atividade 1");

let nome = "Felipe";//sting;
let num1 = 1;//number;
let matriculado = false; //Boleano;

console.log(nome);
console.log(num1);
console.log(matriculado);



/*2) Exiba no console as variáveis criadas:*/
console.log(linha + " Atividade 2");

console.log(nome);
console.log(num1);
console.log(matriculado);
console.log('------');
console.log( '('+nome +', '+ num1 +', '+ matriculado+');');



/*3) Exiba no console o tipo de cada variável criada:*/
console.log(linha + " Atividade 3");

console.log('O nome é tipo: '+ typeof nome);
console.log('Números é tipo: '+ typeof num1);
console.log('Matriculado é do tipo: '+ typeof matriculado);



/*4) Mostre que o JS é fracamente tipada.*/
console.log(linha + " Atividade 4");

console.log(`Nossa variável nome: (${nome}) receberá um valor booleano na linha de baixo`);
nome = false;
console.log(`agora a nossa variável vale (${nome})`);



/*5) Mostre a diferença entre let e const:*/
console.log(linha + " Atividade 5");

let variar = 1;
const naoVariar = 2;

console.log(`let = ${variar} e const = ${naoVariar}`);
variar = 2;



/*6) Operações aritméticas em Js. Crie duas variáveis Num1 e Num2 e realize as operações de: Soma, Subtração, Divisão e Multiplicação:*/
console.log(linha + " Atividade 6");

let num2 = 1;

let resultado = num1 + num2;

console.log('soma: '+ resultado);
console.log(`subtração ${num1 - num2}`);
console.log('multiplicação: '+ num1 * num2);
console.log('divisão'+ num1 / num2);



/*7) Crie um array com as seguints frutas: Banana, Maçã, Abacate, Limão, Amora, Mamão e Pêra:*/
console.log(linha + " Atividade 7");



/*8) Exiba o primeiro e o último elemento do array.*/
console.log(linha + " Atividade 8");

/*9) Crie um Função que exiba no console o seu nome.*/
console.log(linha + " Atividade 9");

function meuNome(){
    return console.log('Tauã Lindão');
}

/*10) Crie uma Função para a soma de dois números:*/
console.log(linha + " Atividade 10");

function somaDoisNumeros(){
    return console.log(num1 + num2);
}

somaDoisNumeros(2,3);



/*11) Crie uma Função que multipla dois números e use Tamplate string para manipular o resultado no console.*/
console.log(linha + " Atividade 11");

function multiplicaDoisNumeros(){
    return console.log(`Os números multiplicados foram ${num1} e ${num2} e o resultado é ${num1 * num2}`);
}

multiplicaDoisNumeros();
