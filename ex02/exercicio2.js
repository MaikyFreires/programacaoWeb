// Função para imprimir uma matriz
function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join('\t'));
    }
}

// Criando a matriz A 3x3
var matrizA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Imprimindo a matriz A
console.log("Matriz A:");
imprimirMatriz(matrizA);

// Calculando a matriz transposta
var matrizTransposta = [];
for (let i = 0; i < matrizA[0].length; i++) {
    matrizTransposta[i] = [];
    for (let j = 0; j < matrizA.length; j++) {
        matrizTransposta[i][j] = matrizA[j][i];
    }
}

// Imprimindo a matriz transposta
console.log("\nMatriz Transposta:");
imprimirMatriz(matrizTransposta);