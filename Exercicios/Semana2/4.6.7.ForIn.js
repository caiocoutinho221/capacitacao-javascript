//Copie o vetor de matérias no 4.4.Arrays.jsque você criou e
//percorra ele imprimindo cada matéria

//DESAFIO:Caso tenha feito o desafio de objetos, percorra ele imprimindo matéria e nota

materias_notas = [
                {"codigo": "CTCO02", "nota": 10}, 
                {"codigo": "CMAC03", "nota": 10}, 
                {"codigo": "ECOX22", "nota": 10}, 
                {"codigo": "XMAC02", "nota": 10}, 
                {"codigo": "XDES02", "nota": 10}, 
                {"codigo": "CRSC02", "nota": 10}
                ]


for (element of materias_notas) {
    console.log(element.codigo)
}