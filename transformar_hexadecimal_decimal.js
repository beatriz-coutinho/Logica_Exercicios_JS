/* Faça um programa que recebendo um número inteiro positivo N em hexadecimal seja
capaz de verificar se este número em decimal é lido exatamente da mesma forma seja de
frente para trás ou de trás para frente.
Caso positivo o programa deverá retornar uma linha com o caractere S, caso contrário o
caractere informado deverá ser o N. */




let readline = require('readline-sync');

/* ~~~~~~~~~~~~~~~~PARTE UM~~~~~~~~~~~~~~~~ */

/* Equivalências */
let letrasEmHex = ['a', 'b', 'c', 'd', 'e', 'f'];
let letrasEmHexMaius = ['A', 'B', 'C', 'D', 'E', 'F'];

/* Definindo o número hexadecimal */
let numHex = readline.question('Digite um número em hexadecimal para transformar em decimal: ');



/* ~~~~~~~~~~~~~~~~PARTE DOIS~~~~~~~~~~~~~~~~ */

/* Função para criar arrays com os caracteres de um número */
function criarArray(num) {
    let valores = [];
    for (let charac of num) {
        valores.push(charac)
    }

    return (valores)
}


/* Criando um array a partir do número passado */
arrayHexadecimal = criarArray(numHex);


/* Transformando as letras em números */
let valoresTransformados = [];

for (charac of arrayHexadecimal) {
    let valorTransf = 0
    if (Number(charac)) {
        valoresTransformados.push(Number(charac));
    } else {
        for (let i = 0; i < 6; i++) {
            if (charac === letrasEmHex[i]) {
                valorTransf = i + 10
                valoresTransformados.push(valorTransf);
            } else if (charac.toUpperCase() === letrasEmHexMaius[i]){
                valorTransf = i + 10
                valoresTransformados.push(valorTransf);
            }
        }
    }
}


/* Função para inverter arrays */
function inverterArray(array) {
    let invertidos = [];

    for (let i = array.length - 1; i >= 0; i--) {
        invertidos.push(array[i]);
    }

    return (invertidos)
}


/* Invertendo o array valoresTransformados */
let novoArrayInvertido = inverterArray(valoresTransformados);


/* Transformando de hexadecimal para decimal */
let expoente = 0;
let numDecimalFinal = 0

for (charac of novoArrayInvertido) {
    let num = charac * (16**expoente);
    numDecimalFinal += num;
    expoente++
}

console.log(numDecimalFinal)



/* ~~~~~~~~~~~~~~~~PARTE TRÊS~~~~~~~~~~~~~~~~ */

/* Transformando a variável numDecimalFinal em string e criando um array */
let numDecimalFinalEmString = String(numDecimalFinal);
let arrayNumDecimalFinal = criarArray(numDecimalFinalEmString);
console.log(arrayNumDecimalFinal);

/* Invertendo o array arrayNumDecimalFinal */
let arrayNumDecimalFinalInvertido = inverterArray(arrayNumDecimalFinal);
console.log(arrayNumDecimalFinalInvertido);

/* Criando strings com os arrays arrayNumDecimalFinal e arrayNumDecimalFinalInvertido */

let stringRef = '';
let stringInvertido = '';

for (num of arrayNumDecimalFinal) {
    stringRef += num;
}

for (num of arrayNumDecimalFinalInvertido) {
    stringInvertido += num;
}

/* Comparando as strings e trazendo a resposta final */
if (stringRef === stringInvertido){
    console.log('S');
} else {
    console.log('N')
}