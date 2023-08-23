// Função para multiplicação de matrizes
function multiplicarMatrizes(matrizA, matrizB) {
    const linhasA = matrizA.length;
    const colunasA = matrizA[0].length;
    const linhasB = matrizB.length;
    const colunasB = matrizB[0].length;

    if (colunasA !== linhasB) {
        console.log("Não é possível calcular a multiplicação das matrizes.");
        return null;
    }

    const matrizC = new Array(linhasA);
    for (let i = 0; i < linhasA; i++) {
        matrizC[i] = new Array(colunasB);
        for (let j = 0; j < colunasB; j++) {
            matrizC[i][j] = 0;
            for (let k = 0; k < colunasA; k++) {
                matrizC[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }
    return matrizC;
}

// Definindo as matrizes A e B
var matrizA = [
    [1, 2],
    [3, 4]
];

var matrizB = [
    [5, 6],
    [7, 8]
];

// Multiplicando as matrizes e tendo o seu resultado
var matrizC = multiplicarMatrizes(matrizA, matrizB);

if (matrizC) {
    console.log("Matriz C (Resultado da multiplicação):");
    for (let i = 0; i < matrizC.length; i++) {
        console.log(matrizC[i].join('\t'));
    }
}