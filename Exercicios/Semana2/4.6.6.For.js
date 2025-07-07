//Percorra o vetor de notas que voce criou em 4.4.Arrays.js e calcule a média delas
//Após sair do for imprima sua média

//DESAFIO: copie também o vetor de matérias, utilize o for para percorrer os dois vetores
//e imprimir a matéria e a nota correspondente
let materias = ["CTCO02", "CMAC03", "ECOX22", "XMAC02", "XDES02", "CRSC02"]
let notas = [10, 10, 10, 10, 10, 10]

let count = 0;
let soma = 0
for (let i = 0; i < notas.length; i++) {
    count++;
    console.log(`Somando: ${notas[i]} de ${materias[i]} `)
    soma += notas[i]
}

console.log("Média: ", soma/count)